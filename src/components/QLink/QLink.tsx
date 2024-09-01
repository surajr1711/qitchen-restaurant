import React from "react";
import { typographyTV, Variant as TypographyVariant } from "../Typography/Typography";
import { tv } from "tailwind-variants";

type QLinkBaseProps = {
	textStyle?: TypographyVariant;
	children?: React.ReactNode;
};

type PolyLinkProps =
	| (React.ComponentPropsWithoutRef<"a"> &
			QLinkBaseProps & {
				as?: "a";
				href: string;
			})
	| (React.ComponentPropsWithoutRef<"span"> &
			QLinkBaseProps & {
				as: "span";
			});

const qLinkTV = tv({
	base: "transition duration-100 ease-out hover:underline hover:text-gold-light",
});

const QLink: React.FC<PolyLinkProps> = ({ children = "qLink", className, textStyle = "body1", ...props }) => {
	if (props.as === "span") {
		return (
			<span className={typographyTV({ variant: textStyle, className: qLinkTV({ className }) })} {...props}>
				{children}
			</span>
		);
	}
	return (
		<a className={typographyTV({ variant: textStyle, className: qLinkTV({ className }) })} target="_blank" {...props}>
			{children}
		</a>
	);
};

export default QLink;
