import React from "react";
import { tv } from "tailwind-variants";
import { Icon } from "@/components/Icon";
import ArrowForwardSVG from "../../../public/svgs/arrow-forward.svg";

type ButtonWithIconProps =
	| (React.ComponentPropsWithoutRef<"button"> & {
			as?: "button";
	  })
	| (React.ComponentPropsWithoutRef<"a"> & {
			as: "a";
	  })
	| (React.ComponentPropsWithoutRef<"span"> & {
			as: "span";
	  });

const buttonWithIconTV = tv({
	slots: {
		baseTV: "group flex flex-nowrap gap-x-2 place-items-center transition duration-300 ease-in-out",
		labelTV: "font-forum text-base uppercase tracking-wider",
		iconWrapperTV:
			"w-8 h-8 grid place-items-center  rounded-full border border-neutral-light transition duration-300 ease-in-out group-hover:border-neutral-base",
		iconTV: "w-4",
	},
});

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ children = "Button label", ...props }) => {
	const { baseTV, labelTV, iconWrapperTV, iconTV } = buttonWithIconTV({});

	let Component = (props.as || "button") as React.ElementType;

	return (
		<Component className={baseTV()} {...props}>
			<span className={labelTV()}>{children}</span>
			<div className={iconWrapperTV()}>
				<Icon className={iconTV()} SVG={ArrowForwardSVG} />
			</div>
		</Component>
	);
};

/*
	//If Component = props.as doesnt work
	const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ children = "Button label", ...props }) => {
	const { baseTV, labelTV, iconWrapperTV, iconTV } = buttonWithIconTV({});

	if (props.as === "a") {
		return (
			<a className={baseTV()} {...props}>
				<span className={labelTV()}>{children}</span>
				<div className={iconWrapperTV()}>
					<Icon className={iconTV()} SVG={ArrowForwardSVG} />
				</div>
			</a>
		);
	} else if (props.as === "span") {
		return (
			<span className={baseTV()} {...props}>
				<span className={labelTV()}>{children}</span>
				<div className={iconWrapperTV()}>
					<Icon className={iconTV()} SVG={ArrowForwardSVG} />
				</div>
			</span>
		);
	}
	return (
		<button className={baseTV()} {...props}>
			<span className={labelTV()}>{children}</span>
			<div className={iconWrapperTV()}>
				<Icon className={iconTV()} SVG={ArrowForwardSVG} />
			</div>
		</button>
	);
}; */

/*
// No polymorphic components
interface ButtonWithIconProps extends React.ComponentPropsWithoutRef<"button"> {
	label?: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ label = "Icon Button", ...props }) => {
	const { baseTV, labelTV, iconWrapperTV, iconTV } = buttonWithIconTV({});

	return (
		<button className={baseTV()} {...props}>
			<span className={labelTV()}>{label}</span>
			<div className={iconWrapperTV()}>
				<Icon className={iconTV()} SVG={ArrowForwardSVG} />
			</div>
		</button>
	);
}; */

export default ButtonWithIcon;
