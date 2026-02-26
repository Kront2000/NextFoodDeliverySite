'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { useHotkeys } from 'react-hotkeys-hook'
import { useRouter } from "next/navigation";


interface Props {
    className?: string;
}

export const Hotkey: React.FC<Props> = ({ className }) => {

    const router = useRouter()

    useHotkeys('a+d', () => router.push("/admin") )

    return (
        <></>
    );
};