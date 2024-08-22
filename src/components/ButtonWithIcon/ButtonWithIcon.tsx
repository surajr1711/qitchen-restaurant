import React from "react";
import Icon from "../Icon/Icon";
import ArrowRightSVG from "../../../public/svgs/arrow-right.svg";

interface ButtonWithIconProps extends React.ComponentPropsWithoutRef<"button"> {
	label?: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ label = "Icon Button", ...props }) => {
	return (
		<button
			className="group flex flex-nowrap gap-x-2 place-items-center transition duration-300 ease-in-out"
			{...props}
		>
			<span className="font-forum text-base uppercase tracking-wider">{label}</span>
			<div className="w-8 h-8 grid place-items-center  rounded-full border border-outline-light transition duration-300 ease-in-out group-hover:border-outline-medium">
				<Icon className="w-3">
					<ArrowRightSVG />
				</Icon>
			</div>
		</button>
	);
};

export default ButtonWithIcon;
