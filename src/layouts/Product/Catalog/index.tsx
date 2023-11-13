import React from "react";
import { ProductCatalogCard } from "../../../components/ProductCatalogCard";
import { ProductProps } from "../../../types/ProductProps";

const productsList: ProductProps[] = [
  {
    imgPath: "",
    name: "Redmi Note 12 Pro 4G",
    price: "R$1530",
    installments: "em 12x R$127,50",
  },
  {
    imgPath: "",
    name: "Iphone 13 Plus",
    price: "R$4500",
    installments: "em 12x R$375,0",
  },
];

export function ProductCatalog() {
  return (
    <div id="catalogBody">
      {productsList.map((product, index) => (
        <ProductCatalogCard
          key={index}
          imgPath={product.imgPath}
          name={product.name}
          price={product.price}
          installments={product.installments}
        />
      ))}
    </div>
  );
}
