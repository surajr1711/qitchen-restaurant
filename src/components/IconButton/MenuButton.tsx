"use client";

import IconButton from "./IconButton";
import { useMenuStateContext } from "@/contexts/MenuStateProvider";

type MenuButtonProps = React.ComponentPropsWithoutRef<"button">;

const MenuButton: React.FC<MenuButtonProps> = ({ children, ...props }) => {
	const { isOpen, setIsOpen } = useMenuStateContext();

	// console.log("MenuButton rendered");
	const handleClick = (e: React.MouseEvent) => {
		setIsOpen(!isOpen);
	};

	return (
		<IconButton as="button" shape="squircle" size="large" onClick={handleClick} aria-label="Fullscreen Menu" {...props}>
			{children}
		</IconButton>
	);
};

export default MenuButton;
