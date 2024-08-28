import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { RoundCornerWrapper } from "@/components/RoundCornerWrapper";

// interface HomepageCardLinkProps extends ImageProps, React.ComponentPropsWithoutRef<'section'> {}
interface CardPageLinkProps {
	href: string;
	src: StaticImport;
	alt: string;
	label: string;
}

const CardPageLink: React.FC<CardPageLinkProps> = ({ href, src, alt, label, ...props }) => {
	return (
		<Link
			href={href}
			className="group relative bg-neutral-800 rounded-2xl overflow-clip min-w-60 min-h-60 max-w-[480px] max-h-[480px] h-full w-full"
			{...props}
		>
			{/* background image */}
			<Image src={src} alt={alt} fill={true} style={{ objectFit: "cover" }} />

			{/* overlay */}
			<div className="absolute inset-x-0 inset-y-0 bg-black opacity-20 transition duration-200 ease-in-out group-hover:opacity-0" />

			{/* Button */}
			<RoundCornerWrapper className="pl-4">
				<ButtonWithIcon as="span">{label}</ButtonWithIcon>
			</RoundCornerWrapper>
		</Link>
	);
};

export default CardPageLink;
