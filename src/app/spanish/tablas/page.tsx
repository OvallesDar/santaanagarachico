import CardProduct from "@/components/ui/CardProduct"

const tablas = [
  {
    title: "Tabla de salmón ahumado con confitura y diferentes texturas.",
    price: 11.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'P', 'F']
  },
  {
    title: "Tabla de jamón 50% ibérico.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
  {
    title: "Tabla de queso variado de Teno alto (Según disponibilidad de la quesería).",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G', 'L']
  },
  {
    title: "Tabla de jamón 50% ibérico y quesos variados de Teno Alto.",
    price: 15.5,
    src: "/santaana.png",
    allergens: ['G', 'L']
  },
  {
    title: "Tabla mixta canaria con quesos, pata asada y almogrote.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Tabla de pata asada.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
]

export default function Tablas() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Tablas</h2>
        {
          tablas.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}