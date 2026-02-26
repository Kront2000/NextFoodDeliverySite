'use client'

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { useHeaderStore } from "@/store/use-header";

interface Props {
    className?: string;
    position: "top" | "bottom";
}

//Компонент для отселиживани, что и список категорий и основной хедер видны. 
// Если оба не будут видны, тогда появится stiky header

export const BoundaryForIo: React.FC<Props> = ({ className, position }) => {

    const { ref, inView } = useInView({
        threshold: 0.001,
        initialInView: true,
    });

    const setHeaderInView = useHeaderStore((s) => s.setHeaderInView);
    const setCategoriesListInView = useHeaderStore((s) => s.setCategoriesInView)

    useEffect(() => {
        if (position === "top") {
            setHeaderInView(inView);
        }
        else if (position === "bottom") {
            setCategoriesListInView(inView);
        }
        
    }, [inView]);

    return (
        <div ref={ref} className={cn('opacity-0 h-0 w-full', className)}>
        </div>
    );
};