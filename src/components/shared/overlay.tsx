'use client'
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void
}

export const Overlay: React.FC<Props> = ({ className, isOpen, setIsOpen }) => {

    useEffect(() => {
        if (isOpen) {

            document.body.style.overflow = "hidden";
        } else {

            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <div onClick={() => setIsOpen(false)} className={cn("fixed top-0 left-0 bg-black w-screen h-screen z-50 opacity-0 pointer-events-none transition duration-300", isOpen && "opacity-40 pointer-events-auto")}>
        </div>
    );
};