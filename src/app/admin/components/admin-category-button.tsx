import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FilePenLine, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    className?: string;
    categoryName: string;
}

export const AdminCategoryButton: React.FC<Props> = ({ className, categoryName }) => {
    return (
        <a  href={"#"}><Button variant={"ghost"} className="rounded-full shadow-sm text-[4cqw] md:text-lg text-gray-700">{categoryName}</Button></a>
    );
};