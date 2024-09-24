import type { Metadata } from "next";
import { forum, satoshiVariable } from "../styles/fonts";
import PageHeader from "@/components/PageHeader/PageHeader";
import PageFooter from "@/components/PageFooter/PageFooter";
import "@/styles/globals.css";
import MenuStateProvider from "@/contexts/MenuStateProvider";
import { FullscreenMenu } from "@/components/FullscreenMenu";
import FullscreenMenuWrapper from "@/components/FullscreenMenu/FullscreenMenuWrapper";
import GlobalComponentsLayout from "@/components/GlobalComponentsLayout/GlobalComponentsLayout";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
	title: "Qitchen - Gourmet Japanese cuisine",
	description:
		"Experience the finest gourmet Japanese cuisine at Qitchen. Indulge in our exclusive sushi and traditional dishes with a modern twist. Book your table today!",
	metadataBase: new URL(process.env.BASE_URL!),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${forum.variable} ${satoshiVariable.variable} `}>
			<MenuStateProvider>
				<body className="min-h-screen box-border bg-black transition-opacity duration-300 ease-in-out">
					{/* Homepage has md:h-screen while others have xl:h-screen so this is a client comopnent to check path and aply layout accordingly  */}
					<GlobalComponentsLayout>
						{/* 2-row grid layout for main and footer */}
						<div className="grid gap-4 md:h-full md:grid-rows-[minmax(0,1fr)_auto]">
							{/* Position absolute */}
							<PageHeader />

							{/* Position absolute */}
							<FullscreenMenuWrapper>
								<FullscreenMenu />
							</FullscreenMenuWrapper>

							{/* grid first row. Only the <main> of every page */}
							{children}

							{/* grid second row */}
							<PageFooter />
						</div>
					</GlobalComponentsLayout>
					<Toaster />
				</body>
			</MenuStateProvider>
		</html>
	);
}
