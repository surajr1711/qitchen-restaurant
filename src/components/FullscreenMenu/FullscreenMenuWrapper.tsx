"use client";

import React, { useRef } from "react";
import { useMenuStateContext } from "@/contexts/MenuStateProvider";

type FullScreenMenuWrapperProps = React.ComponentPropsWithoutRef<"div"> & {};

const FullscreenMenuWrapper: React.FC<FullScreenMenuWrapperProps> = ({ children }) => {
	const fullscreenMenuRef = useRef<HTMLDivElement | null>(null);

	const { isOpen, setIsOpen } = useMenuStateContext();

	if (!isOpen) return null;

	return (
		<div ref={fullscreenMenuRef} className="absolute top-0 left-0 bg-black p-4 w-screen h-screen z-20">
			{children}
		</div>
	);
};

export default FullscreenMenuWrapper;
