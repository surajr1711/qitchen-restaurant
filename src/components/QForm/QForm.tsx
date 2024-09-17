"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import Button from "../Button/Button";
// 1. Define/import the form schema and validation
import { QFormData, qFormSchema } from "./qFormSchema";
// 5. Define the server action to send the form
import { onSubmitAction } from "@/actions/submitForm";
import { useToast } from "@/hooks/use-toast";

const QForm = () => {
	const { toast } = useToast();

	// 2. Define the form
	const form = useForm<QFormData>({
		resolver: zodResolver(qFormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	// 3. Define the onSubmit handler
	const onSubmit = async (data: QFormData) => {
		// create the formData type from data
		const formData = new FormData();
		// formData.append("name", data.name);
		// formData.append("email", data.email);
		// formData.append("message", data.message);
		for (const key in data) {
			if (data.hasOwnProperty(key)) {
				formData.append(key, data[key as keyof typeof data]);
			}
		}

		// pass formdata to a server action
		const response = await onSubmitAction(formData);
		// do something with the server response
		toast({
			title: response.message,
			description: response.description,
			duration: 10000,
			variant: response.ok ? "default" : "destructive",
		});
	};

	return (
		// 4. Build the form
		<>
			<Form {...form}>
				<form
					// ref={formRef}
					// action={onSubmitAction}
					onSubmit={form.handleSubmit(onSubmit)}
					// onSubmit={form.handleSubmit(() => formRef.current?.submit())}
					className="max-w-md w-full flex flex-col gap-4 mx-auto"
				>
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
		</>
	);
};

export default QForm;
