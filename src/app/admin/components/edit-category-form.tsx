'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { addCategorySchema, addCategoryType,   } from "@/lib/schemas";

import {  editCategory,  } from "@/actions/dish-action";
import { toast } from "sonner";
import { Category, Dish } from "@/generated/prisma/client";

interface Props {
    className?: string;
    category: Category
}

export const EditCategoryForm: React.FC<Props> = ({ className, category }) => {

    const router = useRouter()

    const form = useForm({
        mode: "onChange",
        resolver: zodResolver(addCategorySchema),
        defaultValues: {
            name: category.name,
        }
    })



    const onSubmit: SubmitHandler<addCategoryType> = async (data) => {
        console.log("yes")

        const response = await editCategory(category.id, data);
        console.log("no")

        if (response.success) {
            toast.success(response.message);
            router.refresh();
            router.push("/admin");
        } else if (response.error) {
            toast.error(response.message);
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn('flex flex-col  p-[3vw] w-full xs:w-[75%] sm:w-[50%] md:w-[70%] xl:w-[60%] 2xl:w-[50%] items-center @container', className)}>

            <div className="flex flex-col w-full md:w-1/2 items-center p-[2cqw] shadow-xl gap-[2cqw] h-fit rounded-2xl @container">

                <div className="w-full flex flex-col ">
                    <label htmlFor="name" className={cn("font-medium text-[4cqw]", form.formState.errors.name?.message && "text-red-700")}>Название</label>
                    <input {...form.register("name")} id="name" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", form.formState.errors.name?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{form.formState.errors.name?.message}</p>
                </div>

                <input type="submit" value="Изменить категорию" className="cursor-pointer bg-primary/90 text-white px-[2cqw] py-[2cqw] text-[5cqw] h-fit rounded text-center hover:bg-primary/30 transition" />

            </div>

        </form>
    );
};