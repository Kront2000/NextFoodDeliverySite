import { fetchCategoryById, fetchDishById } from "@/actions/dish-action";
import { notFound } from "next/navigation";

import { Category } from "@/generated/prisma/client";
import { CategoryDeleteForm } from "@/app/admin/components/category-delete-form";


export default async function CategoryDeletePage(props: { params: Promise<{ id: string }> }) {

    const params = await props.params;

    const category = await fetchCategoryById(parseInt(params.id));

    if(!category){
        notFound();
    }

    return <>
        <CategoryDeleteForm category={category}/>
    </>
}