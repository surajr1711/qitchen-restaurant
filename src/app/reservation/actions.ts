"use server";

import { QFormData, qFormSchema } from "@/components/QForm/qFormSchema";

export const processReservation = async (data: QFormData) => {
	const parsedData = qFormSchema.parse(data);

	console.log("submitForm received data:", parsedData);

	return { message: "Form data received", data: parsedData };
};
