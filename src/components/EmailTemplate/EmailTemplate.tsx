import React from "react";
import { QFormData } from "../QForm/qFormSchema";
import { Html, Head, Body, Preview, Container, Heading, Text, Section } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailTemplateProps extends QFormData {}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, message }) => (
	<Html>
		<Head />
		<Preview>New reservation form submission</Preview>
		<Tailwind>
			<Body>
				<Container>
					<Heading>You have a new reservation request from the website</Heading>
					<Section>
						<div>
							<Text>Sender&apos;s name:</Text>
							<Text>{name}</Text>
							<br />

							<Text>Sender&apos;s email:</Text>
							<Text>{email}</Text>
							<br />

							<Text>Sender&apos;s message:</Text>
							<Text>{message}</Text>
						</div>
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);
