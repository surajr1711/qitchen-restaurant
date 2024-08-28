import type { Metadata } from "next";
import { forum, satoshiVariable } from "../styles/fonts";
import PageHeader from "@/components/PageHeader/PageHeader";
import PageFooter from "@/components/PageFooter/PageFooter";
import "@/styles/globals.css";
import MenuStateProvider from "@/contexts/MenuStateProvider";
import { FullscreenMenu } from "@/components/FullscreenMenu";

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
		<html lang="en" className={`${forum.variable} ${satoshiVariable.variable} `}>
			<MenuStateProvider>
				<body className="bg-black p-4 md:h-screen">
					{/* 2-row grid layout for main and footer */}
					<div className="grid gap-2 md:h-full md:grid-rows-[minmax(0,1fr)_auto] md:gap-4">
						{/* position absolute */}
						<PageHeader />
						<FullscreenMenu />

						{/* first row */}
						{children}

						{/* second row */}
						<PageFooter />
					</div>
				</body>
			</MenuStateProvider>
		</html>
	);
}
