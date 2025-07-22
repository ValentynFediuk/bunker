import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/Layout";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"], // бери ті, які реально треба
});

export const metadata: Metadata = {
  title: "Bunker",
  description: "Підземний барбершоп у центрі Коломиї!",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
    <body
      className={`${roboto.variable} antialiased flex flex-col min-h-screen`}
    >
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
    <div id="portal-root" />
    </body>
    </html>
  );
}
