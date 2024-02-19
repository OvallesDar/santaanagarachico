import { cn } from "@/lib/utils"
import Link from "next/link"

const rutas = [
  {
    link : "Colazione",
    href: "/italian/colazione"
  },
  {
    link : "Panino / Bagel / Toast",
    href: "/italian/panino"
  },
  {
    link : "Tagliere",
    href: "/italian/tagliere"
  },
  {
    link : "Insalate",
    href: "/italian/insalate"
  },
  {
    link : "Antipasti caldi",
    href: "/italian/caldi"
  },
  {
    link : "Dips",
    href: "/italian/dips"
  },
  {
    link : "Dolci",
    href: "/italian/dolci"
  },
  
]

export default function Italian() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full md:w-2/3 gap-1">
        {
          rutas.map(({link, href}, index) => (
            <Link key={link} href={href} className={cn("flex justify-center items-center w-full h-32 bg-rose-100", index % 2 === 0 && "bg-rose-200")}>{link}</Link>
          ))
        }
      </div>
    </div>
  )
}
