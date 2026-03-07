import { useBucketStore } from "@/store/use-cart";
import { useHeaderStore } from "@/store/use-header";
import { useEffect, useState } from "react";

//Хук следит за тем, когда показывать липкий хедер со списком категорий
export function useHero() {
    const categoryInView = useHeaderStore((s) => s.categoriesListInView);
    const headerInView = useHeaderStore((s) => s.mainHeaderInView);
    const [show, setShow] = useState(false);
    const bucketIsOpen = useBucketStore((s) => s.isOpen);

    useEffect(() => {
        if (categoryInView  || headerInView || bucketIsOpen) {
            setShow(false);
        } else {
            setShow(true)
        }

    }, [categoryInView, headerInView, bucketIsOpen]);

    return show;
}