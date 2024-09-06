import { z } from "zod";

export const qFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, { message: "Name must be at least 2 characters." })
		.max(50, { message: "Name must be under 50 characters." }),
	email: z.string().trim().email(),
	message: z
		.string()
		.trim()
		.min(2, { message: "Message be at least 2 characters" })
		.max(100, { message: "Message must be under 100 characters." }),
});

export type QFormData = z.infer<typeof qFormSchema>;
