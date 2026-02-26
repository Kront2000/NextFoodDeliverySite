import { Dish, Prisma } from "@/generated/prisma/client"
import { OrderFormValues } from "./schemas";
import { intersection } from "zod";

export type CategoriesWithDishes = Prisma.CategoryGetPayload<{
    include: { dishes: true }
}>

export type DishInBucket = Dish & {amount: number, categoryName: string}



export interface dataFormWithBucket {
    dishes: DishInBucket[];
    totalPrice: number;
    personalData: OrderFormValues;
}

export interface dishForTemplate {
    name: string ;
    description: string ;
    image: string ;
    price: number;
}

export interface user {
    id: string;
    email: string;
    password: string;
}