import React from "react";

import { CustomerNav } from "../../../components/Header";
import { ProductCatalogCard } from "../../../components/ProductCatalogCard/ProductCatalogCard";
import { ProductProps } from "../../../types/ProductProps";
import { ProductsDb } from "../../../db/Products";
import { useParams } from "react-router-dom";

import { MainContainer } from "./styles";

export function ProductCatalog() {
  const { categoryId } = useParams();

  let productsList: ProductProps[] = [];

  switch (categoryId) {
    case "food":
      ProductsDb.forEach((produto) => {
        if (produto.category == "food") {
          productsList.push(produto);
        }
      });
      break;
    case "healthandbeauty":
      ProductsDb.forEach((produto) => {
        if (produto.category == "healthandbeauty") {
          productsList.push(produto);
        }
      });
      break;
    case "fashion":
      ProductsDb.forEach((produto) => {
        if (produto.category == "fashion") {
          productsList.push(produto);
        }
      });
      break;
    case "electronics":
      ProductsDb.forEach((produto) => {
        if (produto.category == "electronics") {
          productsList.push(produto);
        }
      });
      break;
  }

  return (
    <>
      <div>
        <CustomerNav />
        <h1>Eletrônicos</h1>
        <MainContainer>
          {productsList.map((product) => (
            <ProductCatalogCard
              id={product.id}
              imgPath={product.imgPath}
              name={product.name}
              price={product.price}
              installments={product.installments}
            />
          ))}
        </MainContainer>
      </div>
    </>
  );
}
