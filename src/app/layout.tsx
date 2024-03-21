import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/topbar/topbar";
import Footer from "@/components/footer/footer";
import Transtition from "@/components/ui/Transtition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santa Ana Garachico",
  description: "Store & Street Goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Transtition>
          <TopBar />
          {children}
          <Footer />
        </Transtition>
      </body>
    </html>
  );
}
