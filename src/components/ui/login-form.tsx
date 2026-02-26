'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { loginFormType, loginSchema } from "@/lib/schemas";
import { authenticate } from "@/actions/auth-action";

interface Props {
    className?: string;
}

export const LoginForm: React.FC<Props> = ({ className }) => {

    const form = useForm({
        mode: "onChange",
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",

        }
    })

    const onSubmit: SubmitHandler<loginFormType> = async (data) => {
        try{const response = await authenticate(data);

        if (response.success) {
            toast.success(response.message);
        } else if (response.error) {
            toast.error(response.message);
        }}catch(e){
            
        }

    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn('flex flex-col  p-[3vw] w-full xs:w-[75%] sm:w-[50%] md:w-[70%] xl:w-[60%] 2xl:w-[50%] items-center @container', className)}>

            <div className="flex flex-col w-full md:w-1/2 items-center p-[2cqw] shadow-xl gap-[2cqw] h-fit rounded-2xl @container">

                <div className="w-full flex flex-col ">
                    <label htmlFor="name" className={cn("font-medium text-[4cqw]", form.formState.errors.email?.message && "text-red-700")}>Логин</label>
                    <input {...form.register("email")} id="name" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", form.formState.errors.email?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{form.formState.errors.email?.message}</p>
                </div>

                <div className="w-full flex flex-col ">
                    <label htmlFor="name" className={cn("font-medium text-[4cqw]", form.formState.errors.password?.message && "text-red-700")}>Пароль</label>
                    <input {...form.register("password")} id="name" type="text" className={cn("p-[1cqw] text-[4cqw] rounded-md outline-1 outline-gray-400 focus:outline-primary", form.formState.errors.password?.message && "outline-red-600 focus:outline-red-700")} />
                    <p className="font-bold text-[4cqw] text-red-700">{form.formState.errors.password?.message}</p>
                </div>

                <input type="submit" value="Создать блюдо" className="cursor-pointer bg-primary/90 text-white px-[2cqw] py-[2cqw] text-[5cqw] h-fit rounded text-center hover:bg-primary/30 transition" />

            </div>

        </form>
    );
};