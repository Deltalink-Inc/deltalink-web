import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/mousewheel";

import { StoreCard } from "../components/StoreCard/StoreCard";
import { StorePromotion } from "../helpers/StorePromotion";

export function CardSlider() {
  const stores = StorePromotion();

  return (
    <Swiper
      slidesPerView={7}
      pagination={{ clickable: true }}
      autoplay
      speed={1000}
      style={{
        //@ts-ignore
        "--swiper-pagination-color": "#e2e2e2",
      }}
    >
      {stores.map((store) => (
        <SwiperSlide>
          <StoreCard
            urlTo={store.urlTo}
            id={store.id}
            logoPath={store.logoPath}
            name={store.name}
            description={store.description}
            category={store.category}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
