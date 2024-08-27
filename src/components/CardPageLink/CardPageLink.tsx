import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { Icon } from "@/components/Icon";
import CornerRadiusSVG from "../../../public/svgs/corner-radius.svg";

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
			<div className="absolute bottom-0 right-0 p-2 pl-4 rounded-tl-3xl bg-black ">
				<ButtonWithIcon as="span">{label}</ButtonWithIcon>
				<Icon size="medium" SVG={CornerRadiusSVG} className="absolute bottom-0 -left-6 text-black" />
				<Icon size="medium" SVG={CornerRadiusSVG} className="absolute -top-6 right-0 text-black" />
			</div>
		</Link>
	);
};

export default CardPageLink;
