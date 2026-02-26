"use client"
import * as z from "zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils";
import { OrderFormValues, orderSchema } from "@/lib/schemas";
import { PersonalDataForm } from "./components/personal-data-form";
import { Container } from "@/components/shared/container";
import { DeliveryDataForm } from "./components/delivery-data-form";
import { BucketInOrder } from "./components/bucket-in-order";
import { OrderSubmit } from "./components/order-submit";
import { dataFormWithBucket } from "@/lib/definitions";
import { useBucketStore } from "@/store/use-cart";
import { sendOrder } from "@/actions/telegram-action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function OrderPage() {



  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      comment: "",
      typeOfDelivery: "",
    },
  })

  const bucket = useBucketStore((s) => s.dishes);
  const totalPrice = useBucketStore((s) => s.totalCount);
  const resetBucket = useBucketStore((s) => s.clearCart);
  const setIsOpen = useBucketStore((s) => s.setIsOpen)
  const router = useRouter();

  const onSubmit: SubmitHandler<OrderFormValues> = async (data) => {
    const dataFormWithBucket: dataFormWithBucket = {
      personalData: data,
      dishes: bucket,
      totalPrice: totalPrice
    }

    const response = await sendOrder(dataFormWithBucket);

    if (response.success) {
      toast.success(response.message, {position: "top-right"});
      resetBucket();
      setIsOpen(false);
      router.push("/")
    } else {
      toast.error(response.message);
    }
  }



  return (
    <>
      <Container className="w-full mb-[8vw]">

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="w-[95%] sm:w-[70%] mx-auto grid grid-cols-1 items-start md:grid-cols-2 gap-8 items-center justify-start @container">
              <h1 className="pt-[4cqw] text-[6cqw] mb-[8cqw] md:col-span-2">Страница заказа</h1>
              <div className="flex flex-col gap-[4cqw]">
                <BucketInOrder />
                <PersonalDataForm />
                <DeliveryDataForm />
              </div>

              <OrderSubmit className="sticky top-[2vw]" />
            </div>
          </form >
        </FormProvider>
      </Container>
    </>
  );
}













