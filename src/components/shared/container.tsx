import React from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    variant?: "default" | "header";
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children, variant = "default" }) => {

    if(variant === "default"){
        return (
            <div className={cn('w-full sm:w-160 md:w-3xl lg:w-5xl xl:w-7xl 2xl:w-[1350px]', className)}>
                {children}
            </div>
        );
    }
    else if (variant === "header"){
        return (
            <div className={cn('w-full sm:w-180 md:w-[800px] lg:w-[1200px] xl:w-[1400px] 2xl:w-[1500px] max-w-screen', className)}>
                {children}
            </div>
        );
    }


};