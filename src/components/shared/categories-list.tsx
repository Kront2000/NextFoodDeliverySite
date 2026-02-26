'use client'
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { CategoriesWithDishes } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
interface Props {
    className?: string;
    categoriesWithDishes: CategoriesWithDishes[];
}

export const CategoriesList: React.FC<Props> = ({ className, categoriesWithDishes }) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY !== 0) {
                
                e.preventDefault();

                
                el.scrollBy({
                    left: e.deltaY * 1.5,
                    behavior: "smooth",
                });
            }
        };

        
        el.addEventListener("wheel", handleWheel, { passive: false });

        return () => el.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div

            ref={scrollRef}
            
            

            className={cn(
                "w-full overflow-x-auto scrollbar @container ",
                className
            )}>
            <div className="flex w-max p-4 gap-2">
                {categoriesWithDishes.map((category, key) => (
                    <a key={key} href={"#" + category.name}><Button variant={"ghost"} className="rounded-full shadow-sm text-[4cqw] md:text-lg text-gray-700">{category.name}</Button></a>
                ))}
                
            </div>
        </div>
    );
};