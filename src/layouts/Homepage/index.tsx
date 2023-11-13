import React from "react";

import { CustomerNav } from "../../components/Nav/Customer";
import { OnSaleSlider } from "../../components/OnSaleSlider";
import { CardSlider } from "../../components/CardSlider"

export function Homepage() {
    return (
        <>
            <CustomerNav />
            <OnSaleSlider />
            <CardSlider/>
        </>
    );
}
