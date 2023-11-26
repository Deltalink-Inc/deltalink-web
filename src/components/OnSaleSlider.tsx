import React from "react";
import { Link } from "react-router-dom";

import { ProductPromotion } from "../db/ProductPromotion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/mousewheel";

export function OnSaleSlider() {
  const products = ProductPromotion();

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay
      speed={1000}
      style={{
        //@ts-ignore
        "--swiper-pagination-color": "#e2e2e2",
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Link to={product.promotionUrl}>
            <img
              src={product.imgPath}
              style={{
                width: "100vw",
                height: "60vh",
                objectFit: "cover",
              }}
              alt={`Product ${product.id}`}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
