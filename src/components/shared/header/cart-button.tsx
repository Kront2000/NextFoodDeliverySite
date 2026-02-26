'use client'
import React, { } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useBucketStore } from "@/store/use-cart";


interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {

    const setIsOpen = useBucketStore((s) => s.setIsOpen);
    const totalCount = useBucketStore((s) => s.totalCount)

    return (
        <button onClick={() => setIsOpen(true)} className={cn("text-[4cqw] sm:text-[2cqw] rounded-full relative bg-primary px-[1cqw] text-gray-50", className)}>КОРЗИНА
            {totalCount > 0 && <div className="w-[2cqw] h-[2cqw] text-[1vw] font-medium text-gray-600 bg-white rounded-full border  border-primary/50 absolute top-0 right-0 translate-x-1/3 -translate-y-1/3">{totalCount}</div>}

        </button>
    );
};