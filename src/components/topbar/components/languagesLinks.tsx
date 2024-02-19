"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  {
    language: "spanish"
  },
  {
    language: "english"
  },
  {
    language: "german"
  },
  {
    language: "french"
  },
  {
    language: "italian"
  },
];

function LanguagesLinks() {
  const pathname = usePathname()
    return languages.map(({ language }) => (
    <div key={language}>
      <Link href={language === "spanish" ? "/" : `/${language}`}>
        <Image
          src={`/icons/${language}.png`}
          alt={language}
          width={30}
          height={30}
          className={cn("opacity-50", pathname.includes(language) && "opacity-100")}
        />
      </Link>
    </div>
  ));
}

export default LanguagesLinks;
