import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

export const OrderSubmit: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("w-full  @container", className)}>
            <div className="w-full bg-white rounded-2xl flex flex-col items-center justify-between overflow-hidden shadow-2xl p-[4cqw] gap-[6cqw]">
                <div className="flex justify-between w-full border-b border-gray-300  ">
                    <h3 className="text-[5cqw] text-gray-900">Итого:</h3>
                    <h3 className="text-[5cqw] text-gray-900">3200тг</h3>
                </div>
                <div className="flex w-full gap-4">
                    <div className="flex justify-between w-1/2 border-b-1 border-gray-200">
                        <h3 className="text-[3cqw] text-gray-800">Доставка:</h3>
                        <h3 className="text-[3cqw] text-gray-800">500тг</h3>
                    </div>
                    <div className="flex justify-between w-1/2 border-b-1 border-gray-200">
                        <h3 className="text-[3cqw] text-gray-800">Стоимость блюд:</h3>
                        <h3 className="text-[3cqw] text-gray-800">2900тг</h3>
                    </div>
                </div>
                <input className="text-[6cqw] bg-primary text-gray-50 font-medium rounded-full px-[5cqw] py-[1cqw]" type="submit" value={"Заказать"} />
            </div>
        </div>
    );
};