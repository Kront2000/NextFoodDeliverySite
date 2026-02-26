'use client'
import React from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { DishInBucket } from "@/lib/definitions";
import { useBucketStore } from "@/store/use-cart";


interface Props {
    className?: string;
    dish: DishInBucket;
}



export const BucketCard: React.FC<Props> = ({ className, dish}) => {

    const addDish = useBucketStore((s) => s.addToCart);
    const minusItem = useBucketStore((s) => s.removeFromCart);

    return (
        <div className={cn('w-full bg-gray-50 h-fit flex flex-col items-center p-2 gap-2 relative my-2 @container', className)}>
            <Button className="absolute top-1 right-1 " size="icon" variant={"ghost"}><X size={20} /></Button>
            <div className="w-full flex gap-2">
                <Image src={dish.image} alt="Пицца" width={292} height={292} className="w-[20%] h-fit my-auto object-cover rounded-[3cqw]"></Image>
                <div className="w-[80%]">
                    <h3 className="text-[5cqw] font-medium ">{dish.name}</h3>
                    <h4 className="text-[4cqw] leading-[5cqw] text-gray-600 max-w-[80%]">{dish.description}</h4>
                </div>
            </div>
            <div className="w-full h-px bg-gray-300"></div>
            <div className="w-full flex justify-between items-center">
                <h4 className="text-[5cqw] h-fit">{dish.price}тг</h4>
                <div className="flex justify-between bg-gray-200 rounded-2xl overflow-hidden text-[4cqw] gap-3 px-2 py-1 ">
                    <button className="" onClick={() => (minusItem(dish.id))}>-</button>
                    <button className="">{dish.amount}</button>
                    <button className="" onClick={() => (addDish(dish, dish.categoryName))}>+</button>
                </div>
            </div>
        </div>
    );
};