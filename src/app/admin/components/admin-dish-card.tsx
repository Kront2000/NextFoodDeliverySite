import React from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { Dish } from "@/generated/prisma/client";
import { FilePenLine, Trash } from "lucide-react";
import Link from "next/link";



interface Props {
    className?: string;
    dish: Dish;
    categoryId: number;
}

export const AdminDishCard: React.FC<Props> = ({ className, dish, categoryId }) => {

    return (
        <div className={cn('w-full flex flex-col justify-between items-center p-2 xs:p-3  aspect-4/6 shadow-sm bg-white rounded-2xl @container', className)}>
            <div className="flex flex-col items-center w-full xs:gap-2">
                <Image src={dish.image} alt={dish.name} width={292} height={292} className="w-full aspect-square object-cover rounded-2xl " />
                <h3 className="text-[8cqw] font-medium text-left w-full leading-none">{dish.name}</h3>
                <p className="text-[7cqw] leading-[7cqw] text-muted-foreground w-full">{dish.description}</p>
            </div>
            <div className="bottom-2 flex justify-between w-full items-center">
                <h4 className=" xs-sm:text-lg">{dish.price}тг</h4>
                <div className="flex rounded-[4cqw] overflow-hidden">
                    <Link href={`/admin/dish/edit/${dish.id}`}><button className="bg-amber-400 hover:bg-amber-300 p-[3cqw] transition duration-200"><FilePenLine color="#f6f5f4" className="w-[9cqw] h-[9cqw]" /></button></Link>
                    <Link href={`/admin/dish/delete/${dish.id}`}><button className="bg-red-700 hover:bg-red-600 p-[3cqw] transition duration-200"><Trash className="w-[9cqw] h-[9cqw]" color="#f6f5f4"/></button></Link>
                </div>
            </div>

        </div>
    );
};