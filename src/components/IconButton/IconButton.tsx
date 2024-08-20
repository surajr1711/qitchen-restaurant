import React from "react";
import Icon from "../Icon/Icon";
import ArrowRightSVG from "../../../public/svgs/arrow-right.svg";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	label?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ label = "Icon Button", ...props }) => {
	return (
		<button
			className="group flex flex-nowrap gap-x-2 place-items-center transition duration-300 ease-in-out"
			{...props}
		>
			<span className="font-forum text-base uppercase tracking-wider">{label}</span>
			<div className="w-8 h-8 grid place-items-center  rounded-full border border-[#333330] transition duration-300 ease-in-out group-hover:border-[#4e4c47]">
				<Icon className="w-3">
					<ArrowRightSVG />
				</Icon>
			</div>
		</button>
	);
};

export default IconButton;
