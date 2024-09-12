import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface QCarouselProps extends React.ComponentPropsWithoutRef<"div"> {
	images: { src: StaticImport | string; alt: string }[];
}

const QCarousel: React.FC<QCarouselProps> = ({ images, ...props }) => {
	return (
		<Carousel {...props}>
			<CarouselContent>
				{images.map((image, i) => (
					<CarouselItem key={i}>
						<Image
							src={image.src}
							alt={image.alt}
							className=" h-full object-cover"
							placeholder="blur"
							sizes="100vw, (min-width: 768px) 40vw, (min-width: 1280px) 25vw"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="left-2" />
			<CarouselNext className="right-2" />
		</Carousel>
	);
};

export default QCarousel;
