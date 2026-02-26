'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { useBucketStore } from "@/store/use-cart";
import { BucketCard } from "@/components/shared/bucket.tsx/bucket-card";

interface Props {
    className?: string;
}



export const BucketInOrder: React.FC<Props> = ({ className }) => {

    const bucket = useBucketStore((s) => s.dishes);

    return (
        <div className={cn("w-full  bg-gray-200 rounded-2xl flex flex-col items-center justify-between overflow-hidden shadow-2xl  @container", className)}>

            <div className="w-full aspect-5/1 overflow-hidden bg-white shadow-md flex items-center justify-center p-[4cqw]">
                <h2 className="text-[6cqw] mb-[4cqw] text-left w-full">1.Корзина</h2>
            </div>

            <div className="w-full pb-[2cqw] grow">
                {bucket.map((dish, key) => (
                    <BucketCard key={key} dish={dish} />
                ))}
            </div>

            <div className="w-full aspect-9/1 overflow-hidden bg-white shadow-md flex items-center justify-center">
            </div>
        </div>
    );
};