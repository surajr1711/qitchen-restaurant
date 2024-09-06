import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { RoundCornerWrapper } from "@/components/RoundCornerWrapper";
import { tv } from "tailwind-variants";

interface CardPageLinkProps extends React.ComponentPropsWithoutRef<"a"> {
	href: string;
	src: StaticImport;
	alt: string;
	label: string;
}

const cardPageLinkTV = tv({
	slots: {
		baseTV: "group relative min-w-60 min-h-60 block h-full",
		overlayTV:
			"absolute inset-x-0 inset-y-0 bg-black opacity-20 transition duration-200 ease-in-out group-hover:opacity-0",
	},
});

const CardPageLink: React.FC<CardPageLinkProps> = ({ href, src, alt, label, className, ...props }) => {
	const { baseTV, overlayTV } = cardPageLinkTV();
	return (
		<Link href={href} className={baseTV({ className })} {...props}>
			{/* background image */}
			<Image src={src} alt={alt} fill={true} className="rounded-2xl object-cover" />

			{/* overlay */}
			<div className={overlayTV()} />
			{/* <div className="absolute inset-x-0 inset-y-0 bg-black opacity-20 transition duration-200 ease-in-out group-hover:opacity-0" /> */}

			{/* Button */}
			<RoundCornerWrapper className="pl-4">
				<ButtonWithIcon as="span">{label}</ButtonWithIcon>
			</RoundCornerWrapper>
		</Link>
	);
};

export default CardPageLink;
