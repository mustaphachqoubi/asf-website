import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amis sans frontieres",
  description:
    "a non-profit association that carries out material and relational actions to promote human relationships in solidarity actions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
