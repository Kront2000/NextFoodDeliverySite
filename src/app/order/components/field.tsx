import React from "react";
import { cn } from "@/lib/utils";


interface Props {
    className?: string;
    name: string;
    rigester:
}

export const field: React.FC<Props> = ({ className }) => {
    return (
        <>
            <label htmlFor="name" className={cn("font-medium text-[4cqw]", errors.name?.message && "text-red-700")}>Введите ваше имя</label>
            <input {...register("name")} id="name" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", errors.name?.message && "outline-red-600 focus:outline-red-700")} />
            <p className="font-bold text-[4cqw] text-red-700">{errors.name?.message}</p>
        </>
    );
};