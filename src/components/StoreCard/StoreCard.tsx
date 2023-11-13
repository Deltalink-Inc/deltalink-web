import React from "react";
import { Link } from "react-router-dom";
import { StoreCardProps } from "../../types/StoreCardProps";

import { CardBody } from "./styles";

export function StoreCard(props: StoreCardProps) {
  return (
    <Link
      to={props.urlTo}
      style={{
        textDecoration: "none",
      }}
    >
      <CardBody id="StoreCard">
        <img src={props.logoPath} alt="" id="storeLogo" />
        <p id="storeName">{props.name}</p>
        <p id="storeDescription">{props.description}</p>
        <p id="storeCategory">{props.category}</p>
      </CardBody>
    </Link>
  );
}
