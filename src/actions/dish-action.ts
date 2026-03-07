'use server'

import { prisma } from "@/lib/prisma";
import { categores } from "../../prisma/constants";
import { revalidatePath } from "next/cache";
import { addCategorySchema, addCategoryType, addDishSchema, addDishType } from "@/lib/schemas";
import { DishCreateInput } from "@/generated/prisma/models";
import { Prisma } from "@/generated/prisma/client";

export async function fetchCategoryWithDishes() {
  try {
    const data = await prisma.category.findMany({
      include: {
        dishes: true,
      },
    })
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchDishById(id: number) {
  try {
    const data =  prisma.dish.findFirst({
      where: {
        id: id,
      },
      include: {
        category: true,
      }
    })
    return data;
  } catch (error) {
    console.error('Database Error', error);
  }
}

export async function fetchCategoryById(id: number) {
  try {
    const data = prisma.category.findFirst({
      where: {
        id: id,
      }
    })
    return data;
  } catch (error) {
    console.error('Database Error', error);
  }
}

export async function deleteDish(id: number) {
  try {
    const response = await prisma.dish.delete({
      where: {
        id: id,
      },
      include: {
        category: true,
      }
    })
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true, message: `Блюдо - ${response.category.name} ${response.name} успешно удалено` }

  } catch (error) {
    console.log("Ошибка при удаленни блюда", error)
    return { error: true, message: "Ошибка сервера" }

  }
}

export async function deleteCategory(id: number) {
  try {
    const response = await prisma.category.delete({
      where: {
        id: id,
      },

    })
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true, message: `Категория ${response.name} успешно удалена` }

  } catch (error) {
    console.log("Ошибка при удаленни категории", error)
    return { error: true, message: "Ошибка сервера" }

  }
}

export async function addDish(categoryId: number, formData: addDishType) {

  const validatedData = addDishSchema.safeParse({
    name: formData.name,
    description: formData.description,
    price: formData.price,
    image: formData.image
  })

  if (!validatedData.success) {
    console.error("Ошибка при созданнии блюда", validatedData)
    return {
      error: true,
      message: 'Некоректные данные',
    };
  }

  const dishForAdd: Prisma.DishUncheckedCreateInput = {
    name: formData.name,
    description: formData.description,
    price: Number(formData.price),
    image: formData.image,
    categoryId: Number(categoryId)
  }

  try {
    await prisma.dish.create({
      data: dishForAdd,
    })

  } catch (e) {
    console.error("Ошибка при добавлении блюда", e)
    return { error: true, message: "Ошибка при добавлении блюда" }
  }
  revalidatePath("/admin");
  revalidatePath("/");

  return { success: true, message: "Блюдо успешно добавленно" }


}

export async function addCategory(formData: addCategoryType) {

  const validatedData = addCategorySchema.safeParse({
    name: formData.name,
  })

  if (!validatedData.success) {
    console.error("Ошибка при созданнии категории", validatedData)
    return {
      error: true,
      message: 'Некоректные данные',
    };
  }

  const categoryForAdd: Prisma.CategoryUncheckedCreateInput = {
    name: formData.name,   
  }

  try {
    await prisma.category.create({
      data: categoryForAdd,
    })

  } catch (e) {
    console.error("Ошибка при добавлении категории", e)
    return { error: true, message: "Ошибка при добавлении категории" }
  }
  revalidatePath("/admin");
  revalidatePath("/");

  return { success: true, message: "Категория успешно добавленно" }


}

export async function editDish(dishId: number, categoryId: number, formData: addDishType) {

  const validatedData = addDishSchema.safeParse({
    name: formData.name,
    description: formData.description,
    price: formData.price,
    image: formData.image
  })

  if (!validatedData.success) {
    console.error("Ошибка при редактировании блюда", validatedData)
    return {
      error: true,
      message: 'Некоректные данные',
    };
  }

  const dishForEdit: Prisma.DishUncheckedUpdateInput = {
    id: dishId,
    name: formData.name,
    description: formData.description,
    price: Number(formData.price),
    image: formData.image,
    categoryId: Number(categoryId)
  }

  try {
    await prisma.dish.update({
      data: dishForEdit,
      where: {
        id: dishId,
      }
    })

  } catch (e) {
    console.error("Ошибка при редактировании блюда", e)
    return { error: true, message: "Ошибка при редактировании блюда" }
  }
  revalidatePath("/admin");
  revalidatePath("/");

  return { success: true, message: "Блюдо успешно изменено" }

}


export async function editCategory(categoryId: number, formData: addCategoryType) {

  const validatedData = addCategorySchema.safeParse({
    name: formData.name,
  })

  if (!validatedData.success) {
    console.error("Ошибка при редактировании категории", validatedData)
    return {
      error: true,
      message: 'Некоректные данные',
    };
  }

  const categoryForEdit: Prisma.CategoryUncheckedUpdateInput = {
    id: categoryId,
    name: formData.name,
  }

  try {
    await prisma.category.update({
      data: categoryForEdit,
      where: {
        id: categoryId,
      }
    })

  } catch (e) {
    console.error("Ошибка при редактировании категории", e)
    return { error: true, message: "Ошибка при редактировании категории" }
  }
  revalidatePath("/admin");
  revalidatePath("/");

  return { success: true, message: "Категория успешно изменено" }

}