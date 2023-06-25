import { useMemo } from "react";
import { Product, ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<Product>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, onAddToWishlist }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);

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