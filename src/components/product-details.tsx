import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	ProductDetails,
	ProductDetailsHeader,
	ProductDetailsTitle,
	ProductDetailsLink,
	ProductDetailsPricing,
	ProductDetailsPrice,
	ProductDetailsPriceRange,
	ProductDetailsGrid,
	ProductDetailsImages,
	ProductDetailsMainImage,
	ProductDetailsImage,
	ProductDetailsThumbnails,
	ProductDetailsThumbnailGrid,
	ProductDetailsThumbnail,
	ProductDetailsContent,
	ProductDetailsDescription,
	ProductDetailsDescriptionTitle,
	ProductDetailsDescriptionText,
	ProductDetailsOptions,
	ProductDetailsOption,
	ProductDetailsOptionLabel,
	ProductDetailsOptionValues,
	ProductDetailsOptionValue,
	ProductDetailsActions,
} from "@/components/ui/product-details";

export function ProductDetailsComponent() {
	return (
		<ProductDetails>
			<ProductDetailsHeader>
				<ProductDetailsTitle>
					<ProductDetailsLink href="https://example.com/headphones">
						Premium Wireless Headphones
					</ProductDetailsLink>
				</ProductDetailsTitle>
				<ProductDetailsPricing>
					<ProductDetailsPrice>$299.99</ProductDetailsPrice>
					<ProductDetailsPriceRange>
						Range: $249.99 - $349.99
					</ProductDetailsPriceRange>
					<Badge>In Stock</Badge>
				</ProductDetailsPricing>
			</ProductDetailsHeader>

			<ProductDetailsGrid>
				<ProductDetailsImages>
					<ProductDetailsMainImage>
						<ProductDetailsImage
							src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
							alt="Premium Wireless Headphones"
						/>
					</ProductDetailsMainImage>

					<ProductDetailsThumbnails>
						<ProductDetailsThumbnailGrid>
							<ProductDetailsThumbnail active>
								<ProductDetailsImage
									src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
									alt="Front view"
								/>
							</ProductDetailsThumbnail>
							<ProductDetailsThumbnail>
								<ProductDetailsImage
									src="https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop"
									alt="Side view"
								/>
							</ProductDetailsThumbnail>
							<ProductDetailsThumbnail>
								<ProductDetailsImage
									src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop"
									alt="Detail view"
								/>
							</ProductDetailsThumbnail>
						</ProductDetailsThumbnailGrid>
					</ProductDetailsThumbnails>
				</ProductDetailsImages>

				<ProductDetailsContent>
					<ProductDetailsDescription>
						<ProductDetailsDescriptionTitle>Description</ProductDetailsDescriptionTitle>
						<ProductDetailsDescriptionText>
							Experience superior sound quality with these premium wireless headphones featuring advanced noise cancellation technology, 30-hour battery life, and premium materials for ultimate comfort.
						</ProductDetailsDescriptionText>
					</ProductDetailsDescription>

					<ProductDetailsOptions>
						<ProductDetailsOption>
							<ProductDetailsOptionLabel>Color</ProductDetailsOptionLabel>
							<ProductDetailsOptionValues>
								<ProductDetailsOptionValue selected>Black</ProductDetailsOptionValue>
								<ProductDetailsOptionValue>White</ProductDetailsOptionValue>
								<ProductDetailsOptionValue>Silver</ProductDetailsOptionValue>
							</ProductDetailsOptionValues>
						</ProductDetailsOption>
						<ProductDetailsOption>
							<ProductDetailsOptionLabel>Size</ProductDetailsOptionLabel>
							<ProductDetailsOptionValues>
								<ProductDetailsOptionValue selected>Standard</ProductDetailsOptionValue>
								<ProductDetailsOptionValue>Large</ProductDetailsOptionValue>
							</ProductDetailsOptionValues>
						</ProductDetailsOption>
					</ProductDetailsOptions>

					<ProductDetailsActions>
						<Button size="lg" className="w-full">
							Add to Cart
						</Button>
						<Button size="lg" variant="outline" className="w-full">
							Find Similar Products
						</Button>
					</ProductDetailsActions>
				</ProductDetailsContent>
			</ProductDetailsGrid>
		</ProductDetails>
	);
}