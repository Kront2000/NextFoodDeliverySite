import { AddDishForm } from "../../../components/add-dish-form";

export default async function AddDishPage(props: { params: Promise<{ categoryId: number }> }) {

    const params = await props.params;

    return <>
        <AddDishForm categoryId={params.categoryId}></AddDishForm>
    </>
}