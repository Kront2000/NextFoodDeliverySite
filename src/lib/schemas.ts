import * as z from "zod"; // Используй такой формат импорта

export const orderSchema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
  phone: z.string()
    .min(10, "Слишком короткий номер")
    .regex(/^\+?\d+$/, "Только цифры и +"),
  address: z.string().optional(),
  comment: z.string().optional(),
  typeOfDelivery: z.string().min(1, "Выберите тип доставки"),
});

export type OrderFormValues = z.infer<typeof orderSchema>;

export const addDishSchema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
  description: z.string().min(2, "Описание слишком короткое"),
  price: z.string().regex(/^\d+$/, "Только цифры"),
  image: z.string(),
})

export type addDishType = z.infer<typeof addDishSchema>;


export const addCategorySchema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
})

export type addCategoryType = z.infer<typeof addCategorySchema>;

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export type loginFormType = z.infer<typeof loginSchema>;