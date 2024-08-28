import React from "react";
import { Icon } from "@/components/Icon";
import CornerRadiusSVG from "../../../public/svgs/corner-radius.svg";
import { tv } from "tailwind-variants";

type RoundCornerWrapperProps = React.ComponentPropsWithoutRef<"div"> & {
	/** A tailwind text-color for the curve SVG. */
	curveColor?: string;
};

const roundCornerWrapperTV = tv({
	slots: {
		baseTV: "min-h-10 min-w-10 max-h-40 max-w-60 absolute bottom-0 right-0 p-2 rounded-tl-3xl bg-black",
		curveLeftTV: "absolute bottom-0 -left-6 text-black",
		curveTopTV: "absolute -top-6 right-0 text-black",
	},
});

const RoundCornerWrapper: React.FC<RoundCornerWrapperProps> = ({ children, className, curveColor, ...props }) => {
	const { baseTV, curveLeftTV, curveTopTV } = roundCornerWrapperTV();
	return (
		<div className={baseTV({ className })} {...props}>
			<Icon size="medium" SVG={CornerRadiusSVG} className={curveTopTV({ className: curveColor })} />
			<Icon size="medium" SVG={CornerRadiusSVG} className={curveLeftTV({ className: curveColor })} />
			{children}
		</div>
	);
};

export default RoundCornerWrapper;
