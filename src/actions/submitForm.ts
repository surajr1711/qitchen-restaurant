"use server";

import { QFormData, qFormSchema } from "@/components/QForm/qFormSchema";

type SuccessT = {
	message: string;
	data: QFormData;
};
type ErrorT = {
	message: string;
	issues: string[];
};

type FormState = SuccessT | ErrorT;

export const onSubmitAction = async (formData: FormData): Promise<FormState> => {
	// export const onSubmitAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {
	// convert formdata type object into regular json object
	const data = Object.fromEntries(formData);
	// parse and validate the data on server side using the zod schema
	const parsed = qFormSchema.safeParse(data);

	// parsing returns either success or error result from validation
	if (!parsed.success) {
		// if result is error return object with message and string array of errors
		const issues = parsed.error.issues.map((issue) => issue.message);
		console.log("Data recieved on server is invalid: ", issues);
		return {
			message: "Invalid data",
			issues,
		};
	}

	console.log("Data received on server was parsed successfully: ", parsed.data);

	// if parsing is successful, perform some server check/logic/operation. example: saving to database, checking in DB if email already exists
	if (parsed.data.message.includes("booking exists")) {
		return {
			message: `A booking already exists under ${parsed.data.name}`,
			issues: ["Please contact our office for reservation changes."],
		};
	}

	// if server operation is successful return object with message and data
	return {
		message: "Thank you for your booking request.",
		data: parsed.data,
	};
};
