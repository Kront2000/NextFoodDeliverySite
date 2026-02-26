'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { comfortaa } from "@/components/ui/fonts";

interface Props {
    className?: string;
    isAdmin?: boolean;
}

export const Title: React.FC<Props> = ({ className, isAdmin = false }) => {

    const { ref, inView } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

    return (
        <div ref={ref} className={cn("w-full md:w-[40%] md:pt-24 lg:pt-32 xl:pt-52 md:pl-10 xl:pl-16 @container", className)}>
            <h1 className={cn(comfortaa.className, "text-[15cqw] md:text-[20cqw] leading-[9cqw] md:leading-[14cqw]  font-bold text-center md:text-left", "transition duration-500 ease-in-out opacity-0 -translate-x-8", inView && "opacity-100 translate-0" )}>Гурмания</h1>
            <h4 className={cn("text-[10cqw] md:text-[12cqw] font-medium text-center md:text-left  text-primary-light", "transition duration-500 ease-in-out delay-75 opacity-0 -translate-x-8", inView && "opacity-100 translate-0" )}>{isAdmin ? "Админ панель" : "пицца и суши"}</h4>
            <p className={cn("text-[5.5cqw] md:text-[7cqw] leading-[8cqw] md:leading-[7cqw] font-medium text-center md:text-left text-muted-foreground p-2", "transition duration-500 ease-in-out delay-100 opacity-0 translate-y-8", inView && "opacity-100 translate-0")}>{isAdmin ? "Нажмите на категорию для редактирования" : "Заказывай, пробуй и получай удовольствие"}</p>
        </div>
    );
};