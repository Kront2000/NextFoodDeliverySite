# NextFoodDeliverySite — Fullstack Web Application

Современное веб-приложение, построенное на базе экосистемы Next.js. Проект представляет собой полноценную платформу с системой авторизации, управлением базой данных и интеграцией с облачными хранилищами.

<video src="https://github.com/user-attachments/assets/bfd9cf43-d7cf-4301-a1ea-d5ef0feb535a" autoplay loop muted playsinline style="max-width: 100%;"></video>
### demo: https://nextfood-delivery-site.vercel.app/
- demo admin page: https://nextfood-delivery-site.vercel.app/admin
- логин: admin
- пароль: admin

## 🚀 Технологический стек
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) с использованием [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [NextAuth.js v5](https://authjs.dev/)
- **Storage**: [AWS S3](https://aws.amazon.com/s3/) (загрузка файлов через Presigned URLs)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Validation**: [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/)

## ✨ Основные возможности

- **Безопасная аутентификация**: Вход и регистрация пользователей с использованием Next-Auth и хешированием паролей через bcryptjs.
- **Работа с медиа**: Загрузка и хранение изображений/файлов в облачном хранилище AWS S3.
- **Динамический интерфейс**: Адаптивный и отзывчивый дизайн, реализованный с помощью Tailwind CSS и доступных компонентов Radix UI.
- **Управление данными**: Эффективное взаимодействие с базой данных PostgreSQL через Prisma.
- **Валидация**: Строгая типизация и валидация данных как на клиенте, так и на сервере.
- Интеграция с Telegram Bot API для мгновенного уведомления о заказах.
- Админ-панель с полным циклом управления контентом (Images via R2).

## 🛠 Установка и запуск

1. **Клонируйте репозиторий:**
```bash
git clone https://github.com/Kront2000/NextFoodDeliverySite/
cd gyrmaniya2
```
Установите зависимости:
```Bash
npm install
```
Настройте переменные окружения:
Создайте файл .env в корне проекта и добавьте следующие ключи (см. .env.example при наличии):
Фрагмент кода
```Bash
DATABASE_URL=""
TELEGRAM_BOT_TOKEN = ""
TELEGRAM_CHAT_ID = ""

# Cloudflare R2 Credentials
R2_ACCOUNT_ID=""
R2_ACCESS_KEY_ID=""
R2_SECRET_ACCESS_KEY=""
R2_ENDPOINT=""
R2_PUBLIC_URL=""

# Имя бакета
R2_BUCKET_NAME=""

AUTH_SECRET=""

ADMIN_LOGIN="admin"
ADMIN_PASSWORD='JDJiJDEwJEVjaVJ4OHZQRHJuZGJ2ZEFoNEZwb3VOU01wYjFhazhEOVR3MnhqUTdRcS9tZGVGOWNTZ3h1'
```
Запустите миграции базы данных:
```Bash
npx prisma migrate dev
```
Запустите проект в режиме разработки:
```Bash
npm run dev
```
## 📈 Планы на будущее
   - Добавление тестов.
   - Оптимизация изображений.
