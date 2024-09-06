import React from "react";
import { BlogT } from "@/constants/blogPageConsts";
import Image from "next/image";
import Diamond from "../Diamond/Diamond";
import Typography from "../Typography/Typography";

type BlogCardProps = React.ComponentPropsWithoutRef<"div"> & BlogT & {};

const BlogCard: React.FC<BlogCardProps> = ({ src, alt, date, title, desc, ...props }) => {
	return (
		<div className="border border-neutral-light flex flex-col gap-4 md:flex-row md:gap-6 md:max-w-xl" {...props}>
			{/* image */}
			<div className="relative min-w-64 min-h-56 max-w-md md:flex-none md:w-1/3">
				<Image src={src} alt={alt} fill={true} className=" rounded-2xl object-cover" />
			</div>

			{/* content */}
			<div className="flex flex-col gap-2 flex-grow ">
				{/* date */}
				<div className="flex gap-4">
					<Diamond lineLength="none" />
					<Typography variant="label2">{date}</Typography>
				</div>
				{/* title */}
				<Typography variant="heading5" className="max-w-96">
					{title}
				</Typography>
				{/* description */}
				<Typography variant="body2" className="max-w-prose">
					{desc}
				</Typography>
			</div>
		</div>
	);
};

export default BlogCard;
