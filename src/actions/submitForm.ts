"use server";

import { qFormSchema } from "@/components/QForm/qFormSchema";
import { sendEmail } from "./sendEmail";

// onSubmitAction is a server action that expects FormData and returns the type of Response
interface OnSubmitActionReturn {
	message: string;
	description: string;
	data?: any;
	status: number;
	ok: boolean;
}

export const onSubmitAction = async (formData: FormData): Promise<OnSubmitActionReturn> => {
	// convert formdata type object into regular json object
	const data = Object.fromEntries(formData);
	// parse and validate the data on server side using the zod schema
	const parsed = qFormSchema.safeParse(data);

	// parsing returns either success or error result from validation
	if (!parsed.success) {
		// if result is error return object with message and string array of errors
		const issues = parsed.error.issues.map((issue) => issue.message);
		// console.error("Data is invalid: ", issues);
		return {
			message: "Data is invalid",
			description: issues.join(". "),
			status: 400,
			ok: false,
		};
	}

	// console.info("Data parsed successfully: ", parsed.data);
	// if parsing was successful, perform some server check/logic/operation. example: saving to database, checking in DB if email already exists
	// example of server side check
	if (parsed.data.message.includes("booking exists")) {
		return {
			message: `Booking already exists for ${parsed.data.name}, ${parsed.data.email}`,
			description: "Please contact our office. Our staff will help you with any changes to your reservation.",
			status: 400,
			ok: false,
		};
	}

	// once data is valid AND server check has passed, send email to owner/customer id
	const response = await sendEmail(parsed.data);

	if (!response.ok) {
		// console.error(response.json().then((json) => json.error));
		return {
			message: "Sorry, something went wrong.",
			description: "Please contact our office. Our staff will help you with your reservation.",
			status: 500,
			ok: false,
		};
	}

	// console.info(response.json().then((json) => json.data));
	return {
		message: "Thank you! Your request was received.",
		description: `We will send a confirmation email to ${parsed.data.email} with the date and time of your reservation.`,
		// data: parsed.data,
		status: 200,
		ok: true,
	};
};
