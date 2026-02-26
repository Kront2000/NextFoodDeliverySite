import {LoadingSpinner} from "@/components/shared/loading-spinner/loading-spinner"


export default function Loading() {
  // Или кастомный компонент скелетона загрузки
  return <div className="w-screen h-screen flex justify-center items-center">
    <LoadingSpinner></LoadingSpinner>
  </div>
}