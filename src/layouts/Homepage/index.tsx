import React from "react";

import { CardSlider } from "../../components/CardSlider";
import { Highlights } from "../../components/Highlights/Highlights";
import { CustomerNav } from "../../components/Header";
import { OnSaleSlider } from "../../components/OnSaleSlider";

export function Homepage() {
  return (
    <>
      <CustomerNav />
      <OnSaleSlider />
      <CardSlider />
      <Highlights />
    </>
  );
}
