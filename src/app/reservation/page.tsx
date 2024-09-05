import React from "react";
import Typography from "@/components/Typography/Typography";
import HeroSection from "@/components/HeroSection/HeroSection";
import { heroImage } from "@/constants/reservationPageConsts";
import Diamond from "@/components/Diamond/Diamond";
import QForm from "@/components/QForm/QForm";

const page = () => {
	return (
		<main className="grid gap-4 h-full xl:grid-cols-2 xl:grid-rows-1">
			{/* Hero */}
			<HeroSection src={heroImage.src} alt={heroImage.alt} title="Book a table" />

			{/* Reservation form */}
			<section
				id="reservation"
				className="rounded-2xl p-8 pt-12 border border-neutral-light flex flex-col gap-8 md:pt-16 md:gap-16 2xl:p-24 2xl:gap-24"
			>
				<header>
					<span className="flex gap-4 justify-center pb-4">
						<Diamond />
						<Typography tag="h2" variant="heading4">
							Reservation
						</Typography>
						<Diamond lineSide="right" />
					</span>
					<Typography tag="p" className="max-w-[500px] mx-auto text-center">
						Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.
					</Typography>
				</header>

				{/* Form */}
				<QForm />
			</section>
		</main>
	);
};

export default page;
