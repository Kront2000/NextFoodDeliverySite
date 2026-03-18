'use client'
import React, { useEffect, useState } from "react";
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

    const [isLoaded, setIsLoaded] = useState<number>(0);

    useEffect(() => {
        console.log(isLoaded)
    }, [isLoaded])

    return (
        <div className={cn('w-full aspect-square relative flex justify-center items-center', className)}>
            <Image sizes="(max-width: 768px) 74vw, 46vw" onLoad={() => setIsLoaded(prev => prev + 1)} ref={ref} src={"/image/main-pizza2.png"} width={700} height={700} alt="pizza" className="w-[80%] z-20" priority={true} loading="eager" />
            <Image sizes="(max-width: 768px) 26vw, 16vw" onLoad={() => setIsLoaded(prev => prev + 1)} src={"/image/ingridient21.png"} width={251} height={277} alt="pizza" className={cn("w-[20%] absolute rotate-210 transition duration-700 ease-in-out delay-200 opacity-0", inView && isLoaded == 7 && "translate-x-[165%] translate-y-[70%] opacity-100")}></Image>
            <Image sizes="(max-width: 768px) 26vw, 16vw" onLoad={() => setIsLoaded(prev => prev + 1)} src={"/image/ingridient22.png"} width={157} height={145} alt="pizza" className={cn("w-[20%] absolute transition duration-700 ease-in-out delay-100 opacity-0", inView && isLoaded == 7 && "-translate-x-[55%] -translate-y-[195%] opacity-100")}></Image>
            <Image sizes="(max-width: 768px) 26vw, 16vw" onLoad={() => setIsLoaded(prev => prev + 1)} src={"/image/ingridient23.png"} width={157} height={145} alt="pizza" className={cn("w-[20%] absolute  transition duration-700 ease-in-out delay-0 opacity-0", inView && isLoaded == 7 && "-translate-x-[190%] -translate-y-[20%] opacity-100")}></Image>
            <Image sizes="(max-width: 768px) 13vw, 8vw" onLoad={() => setIsLoaded(prev => prev + 1)} src={"/image/ingridient24.png"} width={78} height={78} alt="pizza" className={cn("w-[10%] absolute transition duration-700 ease-in-out delay-75 opacity-0", inView && isLoaded == 7 && "-translate-x-[310%] -translate-y-[240%] opacity-100")}></Image>
            <Image sizes="(max-width: 768px) 26vw, 16vw" onLoad={() => setIsLoaded(prev => prev + 1)} src={"/image/ingridient25.png"} width={157} height={161} alt="pizza" className={cn("w-[20%] absolute  transition duration-700 ease-in-out delay-300 opacity-0", inView && isLoaded == 7 && "-translate-x-[80%] translate-y-[180%] opacity-100")}></Image>
            <Image sizes="(max-width: 768px) 51vw, 30vw" onLoad={() => setIsLoaded(prev => prev + 1)} src={"/image/circle.png"} width={403} height={382} alt="pizza" className={cn("w-[40%] absolute rotate-210 transition duration-700 ease-in-out delay-150 opacity-0", inView && isLoaded == 7 && "translate-x-[55%] -translate-y-[55%] opacity-100")}></Image>
        </div>
    );
};