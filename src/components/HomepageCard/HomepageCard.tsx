import React from "react";
import Image from "next/image";
import { ImageProps } from "next/dist/shared/lib/get-img-props";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { RoundCornerWrapper } from "@/components/RoundCornerWrapper";
import { tv } from "tailwind-variants";

interface HomepageCardProps extends ImageProps {
	// interface HomepageCardProps extends React.ComponentPropsWithoutRef<"div"> {
	// src: StaticImport;
	// alt: string;
	label: string;
	// priority?: boolean;
}

const cardTV = tv({
	slots: {
		baseTV: "group relative min-w-60 min-h-60 block h-full",
		overlayTV:
			"absolute inset-x-0 inset-y-0 bg-black opacity-20 transition duration-200 ease-in-out group-hover:opacity-0",
	},
});

const HomepageCard: React.FC<HomepageCardProps> = ({
	src,
	alt,
	label,
	className,
	priority = false,
	sizes,
	...props
}) => {
	const { baseTV, overlayTV } = cardTV();
	return (
		<div className={baseTV({ className })} {...props}>
			{/* background image */}
			<Image src={src} alt={alt} fill={true} priority={priority} sizes={sizes} className="rounded-2xl object-cover" />

			{/* overlay */}
			<div className={overlayTV()} />

			{/* Button */}
			<RoundCornerWrapper className="pl-4">
				<ButtonWithIcon as="span">{label}</ButtonWithIcon>
			</RoundCornerWrapper>
		</div>
	);
};

export default HomepageCard;
