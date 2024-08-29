"use client";

import React from "react";
import { useMenuStateContext } from "@/contexts/MenuStateProvider";

type FullScreenMenuWrapperProps = React.ComponentPropsWithoutRef<"div"> & {};

const FullscreenMenuWrapper: React.FC<FullScreenMenuWrapperProps> = ({ children }) => {
	console.log("FullscreenMenuWrapper rendered");

	const { isOpen, setIsOpen } = useMenuStateContext();

	if (!isOpen) return null;

	return <>{children}</>;
};

export default FullscreenMenuWrapper;
