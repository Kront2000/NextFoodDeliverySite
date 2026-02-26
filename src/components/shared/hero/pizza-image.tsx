'use client'
import React from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { useInView } from "react-intersection-observer";


interface Props {
    className?: string;
}



export const PizzaImage: React.FC<Props> = ({ className }) => {

    const { ref, inView } = useInView({
        threshold: 0.6,
    });

    return (
        <div  className={cn('w-full aspect-square relative flex justify-center items-center', className)}>
            <Image ref={ref} src={"/image/main-pizza2.png"} width={1000} height={1000} alt="pizza" className="w-[80%] z-20" priority={true} />
            <Image src={"/image/ingridient21.png"} width={891} height={443} alt="pizza" className={cn("w-[20%] absolute rotate-210 transition duration-700 ease-in-out delay-200 opacity-0", inView && "translate-x-[165%] translate-y-[70%] opacity-100")}></Image>
            <Image src={"/image/ingridient22.png"} width={260} height={260} alt="pizza" className={cn("w-[20%] absolute transition duration-700 ease-in-out delay-100 opacity-0", inView && "-translate-x-[55%] -translate-y-[195%] opacity-100" )}></Image>
            <Image src={"/image/ingridient23.png"} width={380} height={307} alt="pizza" className={cn("w-[20%] absolute  transition duration-700 ease-in-out delay-0 opacity-0", inView && "-translate-x-[190%] -translate-y-[20%] opacity-100" )}></Image>
            <Image src={"/image/ingridient24.png"} width={150} height={150} alt="pizza" className={cn("w-[10%] absolute transition duration-700 ease-in-out delay-75 opacity-0", inView && "-translate-x-[310%] -translate-y-[240%] opacity-100" )}></Image>
            <Image src={"/image/ingridient25.png"} width={460} height={460} alt="pizza" className={cn("w-[20%] absolute  transition duration-700 ease-in-out delay-300 opacity-0", inView && "-translate-x-[80%] translate-y-[180%] opacity-100"  )}></Image>
            <Image src={"/image/circle.png"} width={891} height={443} alt="pizza" className={cn("w-[40%] absolute rotate-210 transition duration-700 ease-in-out delay-150 opacity-0", inView && "translate-x-[55%] -translate-y-[55%] opacity-100" )}></Image>
        </div>
    );
};