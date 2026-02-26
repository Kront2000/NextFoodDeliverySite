import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { user } from '@/lib/definitions';

function getUser(): user | undefined {
    try {
        const email = process.env.ADMIN_LOGIN;
        const password = process.env.ADMIN_PASSWORD;
        if (!email || !password) {
            return undefined
        } else if (email || password) {
            const user: user = {
                id: "admin-id",
                email: email,
                password: password
            }
            return user;
        }
    } catch (error) {
        console.error('Пользователь не найден', error);
        throw new Error('Пользователь не найден');
    }

}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string(), password: z.string() })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = getUser();

                    console.log('Введено в форме:', email);
                    console.log('Данные из ENV:', user?.password);

                    if (!user) {
                        console.log('Пользователь из ENV не загрузился!');
                        return null;
                    }

                    // ВРЕМЕННО: замени bcrypt на прямое сравнение, чтобы проверить ENV
                    // const passwordsMatch = password === user.password;
                    const hashedPassword = Buffer.from(process.env.ADMIN_PASSWORD || '', 'base64').toString('utf-8');
                    const passwordsMatch = await bcrypt.compare(password, hashedPassword); 

                    if (passwordsMatch) {
                        console.log('Пароли совпали!');
                        return { id: '1', email: user.email, name: 'Admin' };
                    } else {
                        console.log('Пароли НЕ совпали!');
                    }
                } else {
                    console.log('Zod ошибка валидации:', parsedCredentials.error.format());
                }

                return null;
            },
        }),
    ],
});