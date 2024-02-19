import { cn } from "@/lib/utils"
import Link from "next/link"

const rutas = [
  {
    link : "Petits déjeuners",
    href: "/french/dejeuners"
  },
  {
    link : "Sandwichs / Bagels / Toasts",
    href: "/french/sandwichs"
  },
  {
    link : "Plateau",
    href: "/french/plateau"
  },
  {
    link : "Salades",
    href: "/french/salades"
  },
  {
    link : "Entrées chaudes",
    href: "/french/chaudes"
  },
  {
    link : "Trempette",
    href: "/french/trempette"
  },
  {
    link : "Desserts",
    href: "/french/desserts"
  },
  
]

export default function French() {
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
