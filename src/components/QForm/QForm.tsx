"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import Button from "../Button/Button";
// 1. Define/import the form schema and validation
import { QFormData, qFormSchema } from "./qFormSchema";
import { processReservation } from "@/app/reservation/actions";

const QForm = () => {
	// 2. Define the form
	const form = useForm<QFormData>({
		resolver: zodResolver(qFormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	// 3. Define the submit handler
	const onSubmit = async (data: QFormData) => {
		const response = await processReservation(data);
		console.log(response);
	};

	return (
		// 4. Build the form
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-4 mx-auto">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="John Doe" {...field} className="bg-neutral-dark border-none py-4 h-auto" />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="johndoe@email.com"
										{...field}
										className="bg-neutral-dark border-none py-4 h-auto"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Input
										placeholder="Your message here. "
										{...field}
										className="bg-neutral-dark border-none py-4 h-auto"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<Button type="submit" variant="filled" size="large" className="mt-2">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default QForm;
