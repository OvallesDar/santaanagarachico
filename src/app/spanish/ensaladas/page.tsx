import CardProduct from "@/components/ui/CardProduct";

const ensaladas = [
  {
    title: "Ensalada templada de pollo asiatico, tomatitos cherry y vinagreta de frutas.",
    price: 8,
    src: "/santaana.png",
    allergens: ['G', 'S']
  },
  {
    title: "Ensalada mixta con aguacate y polvo de frutos secos.",
    price: 7.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  }
]

export default function Ensaladas() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Ensaladas</h2>
        {
          ensaladas.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}