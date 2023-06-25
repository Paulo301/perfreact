import { useMemo } from "react";
import { Product, ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<Product & { priceFormatted: string }>;
  totalPrice: number;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, totalPrice, onAddToWishlist }: SearchResultsProps) {

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => (
        <ProductItem
          key={product.id}
          product={product} 
          onAddToWishlist={onAddToWishlist} 
        />
      ))}
    </div>
  );
}