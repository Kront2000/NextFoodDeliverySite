

import React from "react";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { OrderFormValues } from "@/lib/schemas";

interface Props {
    className?: string;
}



export const PersonalDataForm: React.FC<Props> = ({ className }) => {

    const {
        register,
        formState: { errors },
    } = useFormContext<OrderFormValues>();

    return (
        <div className="w-full  @container">
            <div className="w-full rounded-2xl shadow-middle-2xl p-[4cqw] flex flex-col gap-8">
                <h2 className="text-[6cqw] mb-[4cqw] text-left w-full">2.Личная информация</h2>

                <div className="w-full flex flex-col ">
                    <label htmlFor="name" className={cn("font-medium text-[4cqw]", errors.name?.message && "text-red-700")}>Имя</label>
                    <input {...register("name")} id="name" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", errors.name?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{errors.name?.message}</p>
                </div>

                <div className="w-full flex flex-col ">
                    <label htmlFor="phone" className={cn("font-medium text-[4cqw]", errors.phone?.message && "text-red-700")}>Номер телефона</label>
                    <input {...register("phone")} id="phone" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", errors.phone?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{errors.phone?.message}</p>
                </div>
            </div>
        </div>
    );
};