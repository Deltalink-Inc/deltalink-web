import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import UUID from "pure-uuid"

import { ProductProps } from "../types/ProductProps"

import { Config } from "../config/deltalink.config"
import { User } from "../db/users.database"

export class Order{
    api: AxiosInstance

    constructor(){
        this.api = axios.create({
            baseURL: `${Config.api.url}:${Config.api.port   }`,
        })
    }
    sendOrder(product:ProductProps, fee){
        const options:AxiosRequestConfig = {
            method: "POST",
            url: "/order-receive",
            data: {
                orderId: new UUID(1), 
                customerName: User.name,
                customerEmail: User.email,
                product: {
                    ...product,
                    fee: {
                        ...fee
                    }
                }
            }
        }
        this.api(options).then((res)=>{console.log(res)})
    }
}
