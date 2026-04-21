import "./globals.css";
import type { Metadata } from "next";
import { Fredoka, Happy_Monkey } from "next/font/google";

export const metadata: Metadata = {
  title: "PawFinder",
  description: "Find your perfect pet companion",
};

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const happyMonkey = Happy_Monkey({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-happy-monkey",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${happyMonkey.variable}`}>
        {children}
      </body>
    </html>
  );
}