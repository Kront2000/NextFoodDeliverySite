'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Category} from "@/generated/prisma/client";
import { deleteCategory } from "@/actions/dish-action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


interface Props {
    className?: string;
    category: Category
}

export const CategoryDeleteForm: React.FC<Props> = ({ className, category }) => {

    const router = useRouter()

    const form = useForm({})

    async function handleDelete(){
        const response = await deleteCategory(category.id);

        if(response.success){
            toast.success(response.message);
            router.refresh();
            router.push("/admin");
        }else{
            toast.error(response.message);
        }
    }

    return (
        <form onSubmit={form.handleSubmit(handleDelete)} className={cn('flex flex-col  p-[3vw] w-full xs:w-[75%] sm:w-[50%] md:w-[70%] xl:w-[60%] 2xl:w-[50%] items-center ', className)}>

            <div className="flex flex-col w-full md:w-1/2 items-center p-[2cqw] shadow-xl gap-[2cqw] h-fit rounded-2xl @container">
                <h3 className="text-[8cqw] text-gray-800 text-center">Вы уверены, что хоитие удалить эту категорию?</h3>
                <h3 className="text-[7cqw] text-gray-800 text-center">{category.name}</h3>
                <input type="submit" value="Удалить" className="bg-primary px-[3cqw] py-[1cqw] text-[8cqw] text-gray-50 rounded-[3cqw]"/>
            </div>
            
        </form>
    );
};