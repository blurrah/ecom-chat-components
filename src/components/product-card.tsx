"use client";

import { Button } from "@/components/ui/button";
import {
	ProductCard,
	ProductCardImage,
	ProductCardContent,
	ProductCardTitle,
	ProductCardPrice,
	ProductCardDescription,
	ProductCardActions,
	ProductCardLink,
} from "@/components/ui/product-card";
import type { Product } from "@/lib/types";

interface ProductCardProps {
	product: Product;
	sendMessage: (message: { text: string }) => void;
	className?: string;
}

export function ProductCardComponent({ product, sendMessage, className }: ProductCardProps) {
	return (
		<ProductCard className={className}>
			{product.image_url && (
				<ProductCardImage
					src={product.image_url}
					alt={product.title}
				/>
			)}
			<ProductCardContent>
				<ProductCardTitle>{product.title}</ProductCardTitle>
				<ProductCardPrice>
					Between {product.price_range?.currency || "$"}{product.price_range?.min} and {product.price_range?.currency || "$"}{product.price_range?.max}
				</ProductCardPrice>
				{product.description && (
					<ProductCardDescription>
						{product.description}
					</ProductCardDescription>
				)}
				<ProductCardActions>
					{product.url && (
						<ProductCardLink href={product.url}>
							View Product →
						</ProductCardLink>
					)}
					<Button
						size="sm"
						className="w-full"
						onClick={() => {
							const message = `Add "${product.title}" to my cart (variant: default)`;
							sendMessage({ text: message });
						}}
					>
						Add to Cart
					</Button>
					<Button
						size="sm"
						className="w-full"
						variant="outline"
						onClick={() => {
							const message = `Get the product details for ${product.product_id}`;
							sendMessage({ text: message });
						}}
					>
						Get product details
					</Button>
				</ProductCardActions>
			</ProductCardContent>
		</ProductCard>
	);
}