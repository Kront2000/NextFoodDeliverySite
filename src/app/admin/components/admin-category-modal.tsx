import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Overlay } from "@/components/shared/overlay";
import { Category } from "@/generated/prisma/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
    className?: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void
    category: Category;
}

export const AdminCategoryModal: React.FC<Props> = ({ className, isOpen, setIsOpen, category }) => {
    return (
        <>
            <Container className={cn("fixed top-0 z-60 flex justify-center w-screen items-center h-screen opacity-0  transition duration-300 pointer-events-none", isOpen && "opacity-100 ")}>
                <div className={cn("w-[95%] xs:w-[70%] sm:w-[65%] md:w-[50%] lg:w-[35%] xl:w-[30%] gap-[1cqw] p-[1cqw] max-h-screen bg-gray-200 rounded-2xl flex flex-col items-center justify-between pointer-events-none relative overflow-hidden shadow-2xl releative @container", isOpen && " pointer-events-auto")}>
                    <h3 className="text-[6cqw]">Что сделать?</h3>
                    <p className="text-[6cqw]">{category.name}</p>
                    <div className="flex justify-between w-full">
                        <Link href={`/admin/category/edit/${category.id}`} className=""><Button className="text-[5cqw] px-[2cqw] py-[1cqw]">Редактировать</Button></Link>
                        <Link href={`/admin/category/delete/${category.id}`} className=""><Button className="text-[5cqw] px-[2cqw] py-[1cqw] bg-red-500 hover:bg-red-400">Удалить</Button></Link>
                    </div>
                </div>
            </Container>
            <Overlay setIsOpen={setIsOpen} isOpen={isOpen} />


        </>

    );
};