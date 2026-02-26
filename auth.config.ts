import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
    authorized({ auth, request: { nextUrl } }) {
    const isLoggedIn = !!auth?.user;
    const isOnAdmin = nextUrl.pathname.startsWith('/admin');

    if (isOnAdmin) {
        if (isLoggedIn) return true;
        return false; // Явный запрет — Auth.js сам сделает редирект
    }
    
    // Для всех остальных страниц (включая /login) разрешаем просмотр
    return true; 
},
},
    providers: [], 
} satisfies NextAuthConfig;