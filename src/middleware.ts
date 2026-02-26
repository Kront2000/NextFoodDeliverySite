import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';
 
export default NextAuth(authConfig).auth; // ВАЖНО: .auth в конце
 
export const config = {
  // Убедитесь, что /admin НЕ исключен здесь
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};