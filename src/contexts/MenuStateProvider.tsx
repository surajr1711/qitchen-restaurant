"use client";

import { createContext, useState, useContext } from "react";

interface MenuStateContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuStateContext = createContext<MenuStateContextType | undefined>(undefined);

export default function MenuStateProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return <MenuStateContext.Provider value={{ isOpen, setIsOpen }}>{children}</MenuStateContext.Provider>;
}

export const useMenuStateContext = () => {
	const context = useContext(MenuStateContext);
	if (!context) {
		throw new Error("useMenuStateContext must be used within a MenuStateProvider");
	}
	return context;
};
