import type { Metadata } from "next";
import { forum, satoshiVariable } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Qitchen Restaurant",
	description: "Your place for gourmet japanese cuisine",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${forum.variable} ${satoshiVariable.variable}`}>
			<body>{children}</body>
		</html>
	);
}
