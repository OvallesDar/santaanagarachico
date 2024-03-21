"use client";
import Transtition from "@/components/ui/Transtition";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LayoutMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return pathname === "/english" ? (
    <>{children}</>
  ) : (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-2/3">
        <Link href="/english" className="flex justify-center">
          <ArrowBigLeft className="text-[#613527]" />
          Go Back
        </Link>
        <Transtition>{children}</Transtition>
      </div>
    </div>
  );
}
