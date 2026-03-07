import { fetchCategoryWithDishes } from "@/actions/dish-action";
import { BoundaryForIo } from "@/components/shared/boundary-for-io";
import { Bucket } from "@/components/shared/bucket.tsx/bucket";
import { CategoriesList } from "@/components/shared/categories-list";
import { Container } from "@/components/shared/container";
import { AdminDishContainer } from "./components/admin-dish-container";
import { Header } from "@/components/shared/header/header";
import { StikyHeader } from "@/components/shared/header/stiky-header";
import { Hero } from "@/components/shared/hero/hero";
import { MobileCartButton } from "@/actions/mobile-cart-button";
import { CategoriesWithDishes } from "@/lib/definitions";
import { AdminCategoriesList } from "./components/admin-categories-list";

export const dynamic = 'force-dynamic'
export default async function AdminPage() {

  const data: CategoriesWithDishes[] = await fetchCategoryWithDishes();

  return (
    <>
      <Header />
      <StikyHeader categoriesWtihDishes={data} />
      <MobileCartButton />
      <Bucket />
      <BoundaryForIo position={"top"} />
      <Hero isAdmin={true}/>
      <Container className=""><AdminCategoriesList categoriesWithDishes={data} /></Container>
      <BoundaryForIo position={"bottom"} />
      <Container> <AdminDishContainer categoriesWhithDishes={data} /> </Container>
      <div className="h-[1000px]"></div>

    </>
  );
}
