import { heroImage } from "@/constants/homePageConsts";
import { ImageResponse } from "next/og";
import QitchenSVG from "../../public/brand/qitchen.svg";
import Image from "next/image";

export const runtime = "edge";

// Image element
export const OpengraphImage = () => {
	return (
		<div className="h-full w-full bg-black">
			<div className="h-full grid grid-cols-2 gap-12">
				{/* Content */}
				<div className="p-12">
					<QitchenSVG className="text-gold-base w-[300px] mt-8 mb-4" />
					<p id="service" className="font-forum text-[64px] leading-none">
						Experience the finest gourmet Japanese cuisine
					</p>
				</div>

				{/* image */}
				<div className="relative h-full w-full">
					<Image src={heroImage.src} alt={heroImage.alt} fill={true} className="object-cover" />
				</div>
			</div>
		</div>
	);
};

// Image metadata
export const alt = heroImage.alt;
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Opengraph() {
	// Font
	// const interSemiBold = fetch(new URL("./Inter-SemiBold.ttf", import.meta.url)).then((res) => res.arrayBuffer());

	return new ImageResponse(
		(
			// ImageResponse JSX element
			<OpengraphImage />
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported opengraph-image
			// size config to also set the ImageResponse's width and height.
			...size,
			// fonts: [
			// 	{
			// 		name: "Inter",
			// 		data: await interSemiBold,
			// 		style: "normal",
			// 		weight: 400,
			// 	},
			// ],
		}
	);
}
