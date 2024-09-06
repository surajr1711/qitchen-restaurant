import Image from "next/image";
import React from "react";
import { tv } from "tailwind-variants";
import Typography from "../Typography/Typography";
import { MenuItem } from "@/constants/menuPageConsts";
import { Icon } from "../Icon";
import LeafSVG from "../../../public/svgs/leaf.svg";

type MenuCardProps = React.ComponentPropsWithoutRef<"div"> & MenuItem & {};

const menuCardTV = tv({
	slots: {
		baseTV: "min-w-64 max-w-[600px] grid gap-4 lg:grid-cols-[160px_auto] lg:gap-8 lg:items-center",
		imageWrapperTV: "rounded-lg relative h-64 lg:w-40 lg:h-24",
		headerTV: "flex justify-between",
		titleWrapperTV: "flex gap-4",
	},
});

const MenuCard: React.FC<MenuCardProps> = ({
	children,
	className,
	imageSrc,
	imageAlt,
	title,
	leaf,
	price,
	description,
	...props
}) => {
	const { baseTV, imageWrapperTV, headerTV, titleWrapperTV } = menuCardTV();

	return (
		<div className={baseTV()} {...props}>
			{/* Image */}
			<div className={imageWrapperTV()}>
				<Image src={imageSrc} alt={imageAlt} fill={true} className="object-cover rounded-lg" />
			</div>

			{/* content */}
			<div>
				{/* title and price */}
				<header className={headerTV()}>
					<div className={titleWrapperTV()}>
						<Typography variant="heading6">{title}</Typography>
						{leaf ? <Icon SVG={LeafSVG} size="medium" /> : null}
					</div>
					<Typography variant="heading6">{`$${price}`}</Typography>
				</header>

				{/* Description */}
				<div>
					<Typography variant="body3">{description}</Typography>
				</div>
			</div>
		</div>
	);
};

export default MenuCard;
