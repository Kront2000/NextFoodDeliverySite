

import React from "react";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { OrderFormValues } from "@/lib/schemas";

interface Props {
    className?: string;
}



export const DeliveryDataForm: React.FC<Props> = ({ className }) => {

    const {
        register,
        formState: { errors },
    } = useFormContext<OrderFormValues>();

    return (
        <div className="w-full  @container">
            <div className="w-full rounded-2xl shadow-middle-2xl p-[4cqw] flex flex-col gap-8">
                <h2 className="text-[6cqw] mb-[4cqw] text-left w-full">3.Доставка</h2>

                <div className="w-full flex flex-col ">
                    <label htmlFor="address" className={cn("font-medium text-[4cqw]", errors.address?.message && "text-red-700")}>Ваш адрес</label>
                    <input {...register("address")} id="address" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", errors.address?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{errors.address?.message}</p>
                </div>

                <div className="w-full flex flex-col ">
                    <div className="flex">
                        <label htmlFor="dostavka" className={cn("font-medium text-[4cqw] mr-[1cqw]", errors.typeOfDelivery?.message && "text-red-700")}>Доставка</label>
                        <input type="radio" id="dostavka" value="dostavka" className="mr-[3cqw]"  {...register("typeOfDelivery")} />
                        <label htmlFor="samovivoz" className={cn("font-medium text-[4cqw] mr-[1cqw]", errors.typeOfDelivery?.message && "text-red-700")}>Самовывоз</label>
                        <input type="radio" id="samovivoz" value="samovivoz" {...register("typeOfDelivery")} />
                    </div>

                    <p className="font-bold text-[4cqw] text-red-700">{errors.typeOfDelivery?.message}</p>
                </div>

                <div className="w-full flex flex-col ">
                    <label htmlFor="comment" className={cn("font-medium text-[4cqw]", errors.comment?.message && "text-red-700")}>Коментарий к заказу</label>
                    <textarea {...register("comment")} id="comment" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", errors.comment?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{errors.comment?.message}</p>
                </div>
            </div>
        </div>
    );
};