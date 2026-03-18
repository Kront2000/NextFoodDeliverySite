'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { CartButton } from "./cart-button";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { CategoriesList } from "../categories-list";
import { CategoriesWithDishes } from "@/lib/definitions";
import { useHero } from "@/hooks/useHero";

interface Props {
    className?: string;
    categoriesWtihDishes: CategoriesWithDishes[]
}


export const StikyHeader: React.FC<Props> = ({ className, categoriesWtihDishes }) => {

    const show = useHero();


    return (
        <header className={cn('fixed top-0 flex flex-col items-center w-full transition duration-300 -translate-y-20 z-200', show && "translate-0", className)}>
            <Container variant={"header"} className="flex pr-2 lg:pr-4 bg-white shadow-lg rounded-b-xl gap-2 @container">
                <div className="grow"><CategoriesList categoriesWithDishes={categoriesWtihDishes} /></div>
                <div className="hidden md:block xl:hidden w-px my-auto h-[4cqh] bg-gray-200"></div>
                <nav className="hidden md:flex gap-4 items-center">
                    <CartButton />
                    <Button className="lg:w-10 lg:h-10" size={"icon"} variant={"outline"}><Menu className="" /></Button>
                </nav>
            </Container>
        </header>
    );
};