import { Comfortaa, Geist, Geist_Mono, Nunito } from "next/font/google";

export const geistSans = Geist({
  display: 'swap',
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const nunito = Nunito({
  display: 'swap',
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  display: 'swap',
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const comfortaa = Comfortaa({
  display: 'swap',
  variable: "--font-comfortaa",
  subsets: ["latin"],
});