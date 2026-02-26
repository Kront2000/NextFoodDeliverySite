'use client'
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

import Link from "next/link";
import { useBucketStore } from "@/store/use-cart";
import { X } from "lucide-react";
import { BucketCard } from "./bucket-card";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Overlay } from "../overlay";



interface Props {
    className?: string;
}

export const Bucket: React.FC<Props> = ({ className }) => {

    const isOpen = useBucketStore((s) => s.isOpen);
    const setIsOpen = useBucketStore((s) => s.setIsOpen);
    const bucket = useBucketStore((s) => s.dishes);
    const totalPrice = useBucketStore((s) => s.totalPrice)

    

    return (
        <>
            <Container className={cn("fixed z-60 flex justify-center w-screen items-center h-screen opacity-0  transition duration-300 pointer-events-none", isOpen && "opacity-100 ")}>
                <div className={cn("w-[95%] xs:w-[70%] sm:w-[65%] md:w-[50%] lg:w-[35%] xl:w-[30%] aspect-3/5 max-h-screen bg-gray-200 rounded-2xl flex flex-col items-center justify-between pointer-events-none relative overflow-hidden shadow-2xl releative @container", isOpen && " pointer-events-auto")}>
                    <Button onClick={() => setIsOpen(false)} className="absolute top-[2cqw] right-[2cqw] h-auto w-auto" variant={"ghost"}><X className="size-6" /></Button>
                    <div className="w-full aspect-5/1 overflow-hidden bg-white shadow-md flex items-center justify-center border ">
                        <h2 className="text-[10cqw] text-center" >Корзина</h2>
                    </div>

                    
                    <ScrollArea className={cn("w-full flex-1 overflow-hidden min-h-0 grow", className)}>
                        <div className="w-full">
                            {bucket.map((dish, key) => (
                                <BucketCard key={key} dish={dish} />
                            ))}
                        </div>
                        <ScrollBar orientation="vertical" />
                    </ScrollArea>




                    <div className="flex flex-col items-center  w-full  overflow-hidden bg-white shadow-md py-4 gap-4 ">
                        <div className="flex w-full justify-between px-[4cqw]">
                            <h3 className="text-[5cqw]">Итого:</h3>
                            <h3 className="text-[5cqw]">{totalPrice}тг</h3>
                        </div>
                        <Link href="/order"><Button className="text-[6cqw] p-[4cqw]">Перейти к оформлению</Button></Link>
                    </div>
                </div>
            </Container>
            <Overlay setIsOpen={setIsOpen} isOpen={isOpen}/>
        </>
    );
};