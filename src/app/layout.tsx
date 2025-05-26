// app/layout.tsx

import "./globals.css";
import Navbar from "@/components/ui/Nav/Navbar";



import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          
       
          <header><Navbar /></header>
          <main className="min-h-[calc(100vh - 268px)]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
