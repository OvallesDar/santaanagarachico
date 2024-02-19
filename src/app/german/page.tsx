import { cn } from "@/lib/utils"
import Link from "next/link"

const rutas = [
  {
    link : "Frühstück",
    href: "/german/fruhstuck"
  },
  {
    link : "Sandwich / Bagels / Toasts",
    href: "/german/sandwichs"
  },
  {
    link : "Käsebrett",
    href: "/german/kasebrett"
  },
  {
    link : "Salate",
    href: "/german/salate"
  },
  {
    link : "Heiße Vorspeisen",
    href: "/german/vorspeisen"
  },
  {
    link : "Dippen",
    href: "/german/dippen"
  },
  {
    link : "Nachspeisen",
    href: "/german/nachspeisen"
  },
  
]

export default function German() {
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
