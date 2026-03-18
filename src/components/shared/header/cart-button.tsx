'use client'
import React, { } from "react";
import { cn } from "@/lib/utils";

import { useBucketStore } from "@/store/use-cart";


interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {

    const setIsOpen = useBucketStore((s) => s.setIsOpen);
    const totalCount = useBucketStore((s) => s.totalCount)

    return (
        <button onClick={() => setIsOpen(true)} className={cn("text-lg lg:text-2xl rounded-full relative bg-primary px-3 text-gray-50", className)}>КОРЗИНА
            {totalCount > 0 && <div className="w-6 lg:w-7 h-6 lg:h-7 text-base lg:text-lg  font-medium text-gray-600 bg-white rounded-full border  border-primary/50 absolute top-0 right-0 translate-x-1/2 -translate-y-3/7">{totalCount}</div>}

        </button>
    );
};