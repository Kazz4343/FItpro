import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const oswald = Oswald({
    subsets: ['latin'],
    variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: "FitPro || Transform your life",
  description: "Join our fitness programs and achieve your goals with expert trainers and personalized plans. Start your transformation today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-poppins antialiased`}>

        {children}
      </body>
    </html>
  );
}
