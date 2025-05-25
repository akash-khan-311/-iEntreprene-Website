// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Nav/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// export const metadata = {
//   title: "Enterprene - Learn and Master IT Skills",
//   description:
//     "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",
//   keywords:
//     "AS Programming, IT courses, web development, data science, cybersecurity, cloud computing, full-stack development, programming courses, online learning",
//   author: "Md Akash Khan",
//   openGraph: {
//     type: "website",
//     url: "https://as-programming-next.netlify.app",
//     title: "AS Programming - Learn and Master IT Skills",
//     description:
//       "AS Programming offers a wide range of IT-related courses, including web development, data science, cybersecurity, cloud computing, and full-stack JavaScript development. Start your learning journey with us and achieve your career goals.",

//     site_name: "AS Programming",
//   },
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-500 dark:bg-gray-300 bg-gray-800`}
      >
        <header>

        <Navbar/>
        </header>
        <main className="min-h-[calc(100vh - 268px)]">
        {children}

        </main>
        
      </body>
    </html>
  );
}
