import { cn } from "@/lib/utils"
import Link from "next/link"

const rutas = [
  {
    link : "Breakfasts",
    href: "/english/breakfasts"
  },
  {
    link : "Sandwich / Bagels / Toasts",
    href: "/english/sandwiches"
  },
  {
    link : "Boards",
    href: "/english/boards"
  },
  {
    link : "Salads",
    href: "/english/salads"
  },
  {
    link : "Hot Starters",
    href: "/english/hot"
  },
  {
    link : "Dip",
    href: "/english/dips"
  },
  {
    link : "Desserts",
    href: "/english/desserts"
  },
  
]

export default function English() {
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
