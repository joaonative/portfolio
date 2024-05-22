import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import { Kanit } from "next/font/google";
import Footer from "./components/layout/Footer";
import Link from "next/link";
const kanit = Kanit({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Victor de Matos Costa",
  description: "Desenvolvedor WEB Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/app/favicon.ico" sizes="any" />
      <body className={kanit.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
