import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function cleanString(input: string): string {
	return input
		.trim() // Remove leading and trailing whitespace
		.toLowerCase() // Convert to lowercase
		.replace(/[^a-z0-9-]+/g, "-") // Replace non-alphanumeric characters (except hyphens) with hyphens
		.replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
		.replace(/^-+|-+$/g, ""); // Remove hyphens from the beginning and end
}
