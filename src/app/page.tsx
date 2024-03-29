import { cn } from "@/lib/utils"
import Link from "next/link"

const rutas = [
  {
    link : "Desayunos",
    href: "/spanish/desayunos"
  },
  {
    link : "Bocadillos / Bagels / Tostas",
    href: "/spanish/bocadillos"
  },
  {
    link : "Tablas",
    href: "/spanish/tablas"
  },
  {
    link : "Ensaladas",
    href: "/spanish/ensaladas"
  },
  {
    link : "Entrantes Calientes",
    href: "/spanish/calientes"
  },
  {
    link : "Dipear",
    href: "/spanish/dipear"
  },
  {
    link : "Postre",
    href: "/spanish/postre"
  },
  
]

export default function Spanish() {
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