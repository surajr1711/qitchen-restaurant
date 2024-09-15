import { EmailTemplate } from "@/components/EmailTemplate/EmailTemplate";
import { QFormData } from "@/components/QForm/qFormSchema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (parsedData: QFormData) => {
	try {
		const { data, error } = await resend.emails.send({
			from: "Qitchen <onboarding@resend.dev>",
			to: ["surajr1711@gmail.com"],
			subject: "Qitchen Reservation Form",
			react: EmailTemplate({ ...parsedData }),
			replyTo: parsedData.email,
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
};
