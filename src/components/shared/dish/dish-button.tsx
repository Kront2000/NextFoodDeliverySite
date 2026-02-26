'use client'

import React from "react";
import { Dish } from "@/generated/prisma/client";
import { useBucketStore } from "@/store/use-cart";
import { toast } from "sonner";


interface Props {
    className?: string;
    dish: Dish;
    categoryName: string;
}

export const DishButton: React.FC<Props> = ({ className, dish, categoryName }) => {

    const addToCart = useBucketStore((e) => e.addToCart)

    function handleAddToCart() {
        addToCart(dish, categoryName);
        toast.success("Блюдо успешно добавленно", {duration: 1500});
    }

    return (
        <button onClick={() => handleAddToCart()} className="text-[7cqw] bg-add-bg hover:bg-add-bg-hover transition duration-300 text-primary font-medium p-1 rounded-2xl px-2" >Выбрать</button>
    );
};