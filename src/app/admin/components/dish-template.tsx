import React from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';

import { FilePenLine, Trash } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { dishForTemplate } from "@/lib/definitions";



interface Props {
    className?: string;
    dish: dishForTemplate;

}

export const DishTemplate: React.FC<Props> = ({ className, dish }) => {

    return (
        <div className={cn('w-full flex flex-col justify-between items-center p-2 xs:p-3  aspect-4/6 shadow-sm bg-white rounded-2xl @container', className)}>
            <div className="flex flex-col items-center w-full xs:gap-2">
                {dish.image.length > 0 ? <Image src={dish.image} alt={dish.name} width={292} height={292} className="w-full aspect-square object-cover rounded-2xl " /> : <Skeleton className="w-full aspect-square rounded-2xl" />}
                <h3 className="text-[8cqw] font-medium text-left w-full leading-none">{dish.name}</h3>
                <p className="text-[7cqw] leading-[7cqw] text-muted-foreground w-full">{dish.description}</p>
            </div>
            <div className="bottom-2 flex justify-between w-full items-center">
                <h4 className=" text-[7cqw]">{dish.price}тг</h4>
                <button className="text-[7cqw] bg-add-bg hover:bg-add-bg-hover transition duration-300 text-primary font-medium p-1 rounded-2xl px-2" >Выбрать</button>
            </div>

        </div>
    );
};