import { fetchCategoryWithDishes } from "@/actions/dish-action";
import { BoundaryForIo } from "@/components/shared/boundary-for-io";
import { Bucket } from "@/components/shared/bucket.tsx/bucket";
import { CategoriesList } from "@/components/shared/categories-list";
import { Container } from "@/components/shared/container";
import { DishContainer } from "@/components/shared/dish/dish-container";
import { Header } from "@/components/shared/header/header";
import { StikyHeader } from "@/components/shared/header/stiky-header";
import { Hero } from "@/components/shared/hero/hero";
import { Hotkey } from "@/components/shared/hotkey";
import { MobileCartButton } from "@/actions/mobile-cart-button";
import { CategoriesWithDishes } from "@/lib/definitions";


export default async function Home() {

  const data: CategoriesWithDishes[] = await fetchCategoryWithDishes();

  return (
    <>
      <Header />
      <StikyHeader categoriesWtihDishes={data} />
      <MobileCartButton />
      <Bucket />
      <BoundaryForIo position={"top"} />
      <Hero />
      <Container className=""><CategoriesList categoriesWithDishes={data} /></Container>
      <BoundaryForIo position={"bottom"} />
      <Container> <DishContainer categoriesWhithDishes={data} /> </Container>
      <Hotkey />
      <div className="h-[1000px]"></div>

    </>
  );
}
