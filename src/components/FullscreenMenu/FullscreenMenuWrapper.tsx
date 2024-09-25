"use client";

import React, { useEffect, useRef } from "react";
import { useMenuStateContext } from "@/contexts/MenuStateProvider";

type FullScreenMenuWrapperProps = React.ComponentPropsWithoutRef<"div"> & {};

const FullscreenMenuWrapper: React.FC<FullScreenMenuWrapperProps> = ({ children }) => {
	const fullscreenMenuRef = useRef<HTMLDivElement | null>(null);

	const { isOpen, setIsOpen } = useMenuStateContext();

	// disables scroll when menu isOpen
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div ref={fullscreenMenuRef} className="fixed inset-0 bg-black p-4 z-20">
			{/* <div ref={fullscreenMenuRef} className="fixed top-0 left-0 bg-black p-4 w-screen h-screen z-20"> */}
			{children}
		</div>
	);
};

export default FullscreenMenuWrapper;
