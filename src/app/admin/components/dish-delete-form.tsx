'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Dish } from "@/generated/prisma/client";
import { deleteDish } from "@/actions/dish-action";
import { toast } from "sonner";


import { useRouter } from "next/navigation";
import { DishCard } from "@/components/shared/dish/dish-card";

interface Props {
    className?: string;
    dish: Dish;
    categoryName: string;
}

export const DishDeleteForm: React.FC<Props> = ({ className, dish, categoryName }) => {

    const router = useRouter()

    const form = useForm({})

    async function handleDelete(){
        const response = await deleteDish(dish.id);

        if(response.success){
            toast.success(response.message);
            router.push("/admin");
        }else{
            toast.error(response.message);
        }
    }

    return (
        <form onSubmit={form.handleSubmit(handleDelete)} className={cn('flex flex-col md:flex-row p-[3vw] w-full xs:w-[75%] sm:w-[50%] md:w-[70%] xl:w-[60%] 2xl:w-[50%] items-center gap-6', className)}>
            <DishCard dish={dish} categoryName={categoryName} className=" md:w-1/2"/>

            <div className="flex flex-col w-full md:w-1/2 items-center p-[2cqw] shadow-xl gap-[2cqw] h-fit rounded-2xl @container">
                <h3 className="text-[8cqw] text-gray-800 text-center">Вы уверены, что хоитие удалить это блюдо?</h3>
                <input type="submit" value="Удалить" className="bg-primary px-[3cqw] py-[1cqw] text-[8cqw] text-gray-50 rounded-[3cqw]"/>
            </div>
            
        </form>
    );
};