import { fetchDishById } from "@/actions/dish-action";
import { AddDishForm } from "../../../components/add-dish-form";
import { notFound } from "next/navigation";
import { EditDishForm } from "../../../components/edit-dish-form";

export default async function EditDishPage(props: { params: Promise<{ dishId: string }> }) {

    const params = await props.params;

    const dish = await fetchDishById(parseInt(params.dishId));

    if (!dish) {
        notFound();
    }

    return <>
        <EditDishForm categoryId={dish.category.id} dish={dish}/>
    </>
}