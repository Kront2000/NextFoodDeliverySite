import { fetchCategoryById, fetchDishById } from "@/actions/dish-action";
import { EditCategoryForm } from "@/app/admin/components/edit-category-form";

import { notFound } from "next/navigation";


export default async function EditDishPage(props: { params: Promise<{ id: string }> }) {

    const params = await props.params;

    const category = await fetchCategoryById(parseInt(params.id));

    if (!category) {
        notFound();
    }

    return <>
        <EditCategoryForm category={category}/>
    </>
}