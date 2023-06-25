import { memo, useState } from "react";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
import dynamic from "next/dynamic";
const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import("./AddProductToWishlist").then(mod => mod.AddProductToWishlist);
}, {
  loading: () => <span>Carregando...</span>
})

export type Product = {
  id: number;
  price: number;
  title: string;
}

interface ProductItemProps {
  product: Product & { priceFormatted: string };
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Add to wishlist</button>

      { isAddingToWishlist && (
        <AddProductToWishlist 
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

// export const ProductItem = memo(({ product }: ProductItemProps) => {
//   return (
//     <div>
//       {product.title} - <strong>{product.price}</strong>
//     </div>
//   );
// })