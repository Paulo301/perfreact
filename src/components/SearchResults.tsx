import { Product, ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<Product>;
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}