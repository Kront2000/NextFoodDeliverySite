'use client'
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CategoriesWithDishes } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { AdminCategoryModal } from "./admin-category-modal";
import { Category } from "@/generated/prisma/client";
interface Props {
    className?: string;
    categoriesWithDishes: CategoriesWithDishes[];
}

export const AdminCategoriesList: React.FC<Props> = ({ className, categoriesWithDishes }) => {

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

    const [modalIsOpen, setModalIsOpne] = useState(false);
    const [category, setCategory] = useState<Category>(categoriesWithDishes[0]);
    function handleOnClick(category: Category){
        setCategory(category);
        setModalIsOpne(true);
    }

    return (
        <>
        <div

            ref={scrollRef}
            
            className={cn(
                "w-full overflow-x-auto scrollbar @container ",
                className
            )}>
            <div className="flex w-max p-4 gap-2">
                {categoriesWithDishes.map((category, key) => (
                    <Button key={key} onClick={() => handleOnClick(category)} variant={"ghost"} className="rounded-full shadow-sm text-[4cqw] md:text-lg text-gray-700">{category.name}</Button>
                ))}
                <a  href="/admin/category/add"><Button variant={"ghost"} className="rounded-full shadow-sm text-[4cqw] bg-green-100 hover:bg-green-200 border border-green-100/50  md:text-lg text-green-950/80 hover:text-green-950">Добавить</Button></a>
            </div>
        </div>
                <AdminCategoryModal setIsOpen={setModalIsOpne} isOpen={modalIsOpen} category={category}/>
        </>
    );
};