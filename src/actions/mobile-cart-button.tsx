'use client'
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import { useHeaderStore } from "@/store/use-header";
import { useBucketStore } from "@/store/use-cart";
import { useHero } from "@/hooks/useHero";

interface Props {
    className?: string;
}



export const MobileCartButton: React.FC<Props> = ({ className }) => {

    
    const setIsOpen = useBucketStore((s) => s.setIsOpen);
    const totalCount = useBucketStore((s) => s.totalCount)

    const show = useHero();

    return (
        <button onClick={() => setIsOpen(true)} className={cn("fixed right-[5vw] bottom-[3vh] bg-gray-50 shadow-4xl rounded-xl p-3 border-2 border-gray-200 transition duration-300 translate-x-3 opacity-0 pointer-events-none md:hidden releative ", show && "opacity-100 translate-0 pointer-events-auto")}><ShoppingCart className="w-[7vw] h-[7vw]" strokeWidth={2} color="#f54900" />
            {totalCount > 0 && <div className="w-[45%] h-[45%] text-[4vw] font-bold text-gray-600 bg-white rounded-full border  border-gray-400 absolute top-0 right-0 translate-x-1/3 -translate-y-1/3">{totalCount}</div>}
        </button>
    );
};