import { create } from 'zustand'

interface HeaderState {
  mainHeaderInView: boolean;
  categoriesListInView: boolean
  setHeaderInView: (inView: boolean) => void
  setCategoriesInView: (inView: boolean) => void
}

export const useHeaderStore = create<HeaderState>()((set) => ({
  mainHeaderInView: true,
  categoriesListInView: true,
  setHeaderInView: (InView) => set(() => ({mainHeaderInView: InView})),
  setCategoriesInView: (InView) => set(() => ({categoriesListInView: InView})),
}))


// Хук смотрит, когда видны главный хедер и лист с категориями.
// Что бы в нужный момент включать sticky хедер и кнопку корзины