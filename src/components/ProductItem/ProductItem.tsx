import { FC } from "react";
import { Product } from "../../types/product";
import "./ProductItem.css";
interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={"product-images/" + product.img} alt={product.name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.shortDescription}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};
