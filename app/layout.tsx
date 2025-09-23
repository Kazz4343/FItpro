import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitPro || Transform Your Body, Transform Your Life",
  description:
    "Join our fitness programs and achieve your goals with expert trainers and personalized plans. Start your transformation today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>

          {children}

      </body>
    </html>
  );
}