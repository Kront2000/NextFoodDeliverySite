import React from "react";
import { cn } from "@/lib/utils";
import { Dish } from "@/generated/prisma/client";
import { Skeleton } from "@/components/ui/skeleton";
import { Hamburger } from "lucide-react";
import Link from "next/link";




interface Props {
    className?: string;
    categoryId: number
}

export const AddDishButton: React.FC<Props> = ({ className, categoryId }) => {

    return (
        <Link href={`admin/dish/add/${categoryId}`}>
            <div className={cn('w-full flex flex-col justify-between items-center p-2 xs:p-3  aspect-4/6 shadow-sm bg-white rounded-2xl @container', className)}>
                <div className="flex flex-col items-center w-full xs:gap-2">
                    <div className="w-full aspect-square object-cover rounded-2xl relative">
                        <Hamburger color="#ffffff" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70cqw] h-[70cqw] z-100" />
                        <Skeleton className="w-full aspect-square" />
                    </div>
                    <h3 className="text-[8cqw] font-medium text-left w-full leading-none">Добавить блюдо</h3>
                    <p className="text-[7cqw] leading-[7cqw] text-muted-foreground w-full">Нажмите что бы добавить блюдо в эту категорию</p>
                </div>
            </div>
        </Link>
    );
};