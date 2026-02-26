'use client'
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { DishTemplate } from "./dish-template";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDishSchema, addDishType } from "@/lib/schemas";
import { dishForTemplate } from "@/lib/definitions";
import { ImageUploaderField } from "./image-uploader-field";
import { addDish, editDish } from "@/actions/dish-action";
import { toast } from "sonner";
import { Dish } from "@/generated/prisma/client";

interface Props {
    className?: string;
    dish: Dish;
    categoryId: number;
}

export const EditDishForm: React.FC<Props> = ({ className, dish, categoryId }) => {

    const router = useRouter()

    const form = useForm({
        mode: "onChange",
        resolver: zodResolver(addDishSchema),
        defaultValues: {
            name: dish.name,
            description: dish.description,
            price: dish.price.toString(),
            image: dish.image
        }
    })

    const values = form.watch();

    const dishForTemplate: dishForTemplate = {
        name: values.name,
        description: values.description,
        price: Number(values.price) || 0,
        image: values.image,
    };

    const onSubmit: SubmitHandler<addDishType> = async (data) => {
        const response = await editDish(dish.id, categoryId, data );

        if (response.success) {
            toast.success(response.message);
            router.push("/admin");
        } else if (response.error) {
            toast.error(response.message);
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn('flex flex-col md:flex-row p-[3vw] w-full xs:w-[75%] sm:w-[50%] md:w-[70%] xl:w-[60%] 2xl:w-[50%] items-center gap-6 @container', className)}>
            <DishTemplate dish={dishForTemplate} className="w-full md:w-1/2" />
            <div className="flex flex-col w-full md:w-1/2 items-center p-[2cqw] shadow-xl gap-[2cqw] h-fit rounded-2xl @container">

                <div className="w-full flex flex-col ">
                    <label htmlFor="name" className={cn("font-medium text-[4cqw]", form.formState.errors.name?.message && "text-red-700")}>Название</label>
                    <input {...form.register("name")} id="name" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", form.formState.errors.name?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{form.formState.errors.name?.message}</p>
                </div>

                <div className="w-full flex flex-col ">
                    <label htmlFor="name" className={cn("font-medium text-[4cqw]", form.formState.errors.description?.message && "text-red-700")}>Описание</label>
                    <input {...form.register("description")} id="name" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", form.formState.errors.description?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{form.formState.errors.description?.message}</p>
                </div>

                <div className="w-full flex flex-col ">
                    <label htmlFor="name" className={cn("font-medium text-[4cqw]", form.formState.errors.price?.message && "text-red-700")}>Цена</label>
                    <input {...form.register("price")} id="name" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", form.formState.errors.price?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{form.formState.errors.price?.message}</p>
                </div>

                <div className="w-full flex justify-between items-center">
                    <Controller
                        control={form.control}
                        name="image"
                        render={({ field, fieldState }) => (
                            <ImageUploaderField
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />

                    <input type="submit" value="Изменить блюдо" className="cursor-pointer bg-primary/90 text-white px-[2cqw] py-[2cqw] text-[5cqw] h-fit rounded text-center hover:bg-primary/30 transition" />
                </div>




            </div>

        </form>
    );
};