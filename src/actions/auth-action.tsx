'use server';
import { loginSchema, loginFormType } from "@/lib/schemas";
import { AuthError } from 'next-auth';
import { signIn } from '../../auth';

export async function authenticate(formData: loginFormType) {

    const validatedData = loginSchema.safeParse({
        email: formData.email,
        password: formData.password

    })

    if (!validatedData.success) {
        console.error("Ошибка при попытки аутентификации", validatedData)
        return {
            error: true,
            message: 'Некоректные данные',
        };
    }


    try {
        await signIn('credentials', {...formData, redirectTo: "/admin"});
    } catch (e) {
        if (e instanceof AuthError) {
            switch (e.type) {
                case 'CredentialsSignin':
                    console.error("Ошибка при попытке аутентификации", e)
                    return { error: true, message: "Неверный логин или пароль" }
                default:
                    console.error("Ошибка при попытке аутентификации", e)
                    return { error: true, message: "Ошибка при попытки входа" }
            }
        }
        throw e;
    }

    return { success: true, message: "Вы успешно зашли в админскую панель" }

}