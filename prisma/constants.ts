import { Prisma } from "@/generated/prisma/client"




export const categores: Prisma.CategoryCreateInput[] = [
    { name: "Пиццы" }, { name: "Запечёные роллы" }, { name: "Холодные роллы" },
    { name: "Жаренные роллы" }, { name: "Сеты" }, { name: "Снеки" }, { name: "Шаурма" }
]

export const dishes: Prisma.DishUncheckedCreateInput[] = [
    {
        name: "Пепперони",
        description: "соус, сыр, пепперони",
        image: "https://media.dodostatic.net/image/r:292x292/01995c4fb83e704284f5dcbbf3890686.avif",
        price: 2100,
        categoryId: 1
    },
    {
        name: "Гурмания",
        description: "соус, сыр, бекон, пепперони, грибы, перец, помидоры",
        image: "https://static.pizzasushiwok.ru/images/menu_new/39-1300.jpg",
        price: 2500,
        categoryId: 1
    },
    {
        name: "Шашлычная",
        description: "соус, сыр, шашлык свинина, помидоры",
        image: "https://static.pizzasushiwok.ru/images/menu_new/39-1300.jpg",
        price: 2500,
        categoryId: 1
    },
    {
        name: "Деревенская",
        description: "соус, сыр, бекон, грибы, лук, помидоры",
        image: "https://тайфун-суши.рф/image/cache/catalog/novyjsajt/pizza/kruglye/matador-1100x900.png",
        price: 2200,
        categoryId: 1
    },
    {
        name: "Двойная пепперони",
        description: "соус, сыр, 2х пепперони",
        image: "https://media.dodostatic.net/image/r:233x233/01995c6971d2789d92e6413177337d53.avif",
        price: 2400,
        categoryId: 1
    },
    {
        name: "Матадор",
        description: "соус, сыр, пепперони, копч. утка, грибы, перец, зеленый лук",
        image: "https://тайфун-суши.рф/image/cache/catalog/novyjsajt/pizza/kruglye/matador-1100x900.png",
        price: 3000,
        categoryId: 1
    },
    {
        name: "Пикантная",
        description: "соус, сыр, курица, бекон, кукуруза, помидоры, зелень",
        image: "https://papacarlo72.ru/wp-content/uploads/2021/08/Picca-Pikantnaya.jpg",
        price: 2250,
        categoryId: 1
    },
    {
        name: "Острая",
        description: "соус, сыр, пепперони, халапеньо, грибы, помидоры",
        image: "https://nnjfood.ru/upload/iblock/0d9/han1rb9fg1u1zea0clkq22gyvk4rfkve.jpg",
        price: 2300,
        categoryId: 1
    },
    {
        name: "Нью-Мехико",
        description: "соус, сыр, копч. грудка, бекон, грибы, соус чесночный, зелень",
        image: "https://image.vsem-edu-oblako.ru/upload/store/merchant4908/small/a3c2c1c6c0394c21873228a9e3ce3707.png?w=600&h=450",
        price: 2700,
        categoryId: 1
    },
    {
        name: "Карбонара",
        description: "соус, сыр, бекон, лук, зелень",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTZEOLkPx-AN-sjVz8gO5nUsGfPwq7cC_EQ&s",
        price: 2100,
        categoryId: 1
    },
    {
        name: "Баварская",
        description: "соус, сыр, пепперони, грибы, маслины",
        image: "https://sizomarket.kz/wp-content/uploads/2024/07/11EEF45F297D4479903041766B142AB1.png",
        price: 2200,
        categoryId: 1
    },
    {
        name: "Барселона",
        description: "соус, сыр, ветчина, бекон, пепперони",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-gAEKWXNmYXXDs7mkn23Qc1fSfun1LjU6g&s",
        price: 2500,
        categoryId: 1
    }
]