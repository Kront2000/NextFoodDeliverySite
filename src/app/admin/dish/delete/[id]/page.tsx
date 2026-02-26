import { fetchDishById } from "@/actions/dish-action";
import { DishCard } from "@/components/shared/dish/dish-card";
import { notFound } from "next/navigation";
import { DishDeleteForm } from "../../../components/dish-delete-form";


export default async function DishDeletePage(props: { params: Promise<{ id: string }> }) {

    const params = await props.params;

    const dish = await fetchDishById(parseInt(params.id));

    if(!dish){
        notFound();
    }

    return <>
        <DishDeleteForm dish={dish} categoryName={dish.category.name}/>
    </>
}