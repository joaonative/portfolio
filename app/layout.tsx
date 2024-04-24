import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Kanit } from "next/font/google";
const kanit = Kanit({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Victor de Matos",
  description: "Frontend Developer Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
