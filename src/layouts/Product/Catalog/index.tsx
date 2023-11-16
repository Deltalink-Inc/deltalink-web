import React from "react";

import { CustomerNav } from "../../../components/Nav/Customer";
import { ProductCatalogCard } from "../../../components/ProductCatalogCard";
import { ProductProps } from "../../../types/ProductProps";
import { ProductsDb } from "../../../db/Products";

export function ProductCatalog() {
  return (
    <>
      <CustomerNav />
      <h1>Eletrônicos</h1>
      {ProductsDb.map((product) => (
        <ProductCatalogCard
          LogoPath={product.imgPath}
          name={product.name}
          price={product.price}
          installments={product.installments}
        />
      ))}
    </>
  );
}
