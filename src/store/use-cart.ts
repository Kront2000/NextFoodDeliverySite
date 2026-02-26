import { Dish } from '@/generated/prisma/client';
import { DishInBucket } from '@/lib/definitions';
import { create } from 'zustand'
import { createJSONStorage, persist } from "zustand/middleware";

interface BucketState {
    isOpen: boolean;
    dishes: DishInBucket[];
    totalPrice: number; // Общая стоимость (цена * количество)
    totalCount: number;  // Общее количество предметов в корзине
    setIsOpen: (isOpen: boolean) => void;
    addToCart: (dish: Dish, categoryName: string) => void;
    removeFromCart: (dishId: number) => void;
    clearCart: () => void;
}

const isClient = typeof window !== "undefined";

// Функция для пересчета итогов (чтобы не дублировать код)
const calculateTotals = (dishes: DishInBucket[]) => {
    const totalPrice = dishes.reduce((sum, item) => sum + item.price * item.amount, 0);
    const totalCount = dishes.reduce((sum, item) => sum + item.amount, 0);
    return { totalPrice, totalCount };
};

export const useBucketStore = create<BucketState>()(

    persist((set) => ({
        isOpen: false,
        dishes: [],
        totalPrice: 0,
        totalCount: 0,

        setIsOpen: (isOpen) => set({ isOpen }),

        addToCart: (dish, categoryName) => set((state) => {
            const existingDishIndex = state.dishes.findIndex(item => item.id === dish.id);
            let newDishes: DishInBucket[];

            if (existingDishIndex > -1) {
                // Если блюдо уже есть, увеличиваем amount
                newDishes = state.dishes.map((item, index) =>
                    index === existingDishIndex
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            } else {
                // Если блюда нет, добавляем новое
                const newDish: DishInBucket = {
                    ...dish,
                    categoryName,
                    amount: 1
                };
                newDishes = [...state.dishes, newDish];
            }

            return {
                dishes: newDishes,
                ...calculateTotals(newDishes)
            };
        }),

        removeFromCart: (dishId: number) => set((state) => {
            const existingDish = state.dishes.find(item => item.id === dishId);
            if (!existingDish) return state;

            let newDishes: DishInBucket[];

            if (existingDish.amount > 1) {
                // Уменьшаем количество на 1
                newDishes = state.dishes.map(item =>
                    item.id === dishId ? { ...item, amount: item.amount - 1 } : item
                );
            } else {
                // Удаляем блюдо из массива
                newDishes = state.dishes.filter(item => item.id !== dishId);
            }

            return {
                dishes: newDishes,
                ...calculateTotals(newDishes)
            };
        }),

        clearCart: () => set({
            dishes: [],
            totalPrice: 0,
            totalCount: 0
        }),
    }), {
        name: "bucket",
        storage: createJSONStorage(() =>
            isClient ? window.localStorage : {
                // пустой storage для SSR
                getItem: async () => null,
                setItem: async () => { },
                removeItem: async () => { },
            }
        ),
    }));