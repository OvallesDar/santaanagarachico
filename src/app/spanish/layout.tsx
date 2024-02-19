import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex items-center justify-center">
        <div className="w-full md:w-2/3">
            <Link href="/" className="flex justify-center">
                <ArrowBigLeft className="text-[#613527]"/>
                Atrás
            </Link>
            {children}
        </div>
        </div>
    );
  }