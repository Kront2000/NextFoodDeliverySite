import React from "react";
import { cn } from "@/lib/utils";
import { AdminDishCard } from "./admin-dish-card";
import { CategoriesWithDishes } from "@/lib/definitions";
import { AddDishButton } from "./add-dish-button";


interface Props {
    className?: string;
    categoriesWhithDishes: CategoriesWithDishes[];
}

export const AdminDishContainer: React.FC<Props> = ({ className, categoriesWhithDishes }) => {

    return (
        <section className={cn('w-full rounded-2xl flex flex-col p-4 @container', className)}>
            {categoriesWhithDishes.map((category, index) => (
                <div key={index} id={category.name} className="w-full">
                    <h2 className="text-[6cqw] md:text-[2.5cqw] font-medium ">{category.name}</h2>
                    <div className="h-1 w-[5cqw] md:w-[2cqw] bg-primary mb-6"></div>
                    <div className="w-full grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-10 md:gap-6 xl:gap-6 2xl:gap-9 mb-12 mx-auto">
                        {category.dishes.map((dish, index) => (
                            <AdminDishCard key={index} dish={dish} categoryId={category.id} />
                        ))}
                        <AddDishButton categoryId={category.id}/>
                    </div>
                </div>
            ))}

        </section>
    );
};