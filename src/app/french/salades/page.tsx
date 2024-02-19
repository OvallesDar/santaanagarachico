import CardProduct from "@/components/ui/CardProduct";

const salades = [
  {
    title: "Salade tiède de poulet à l'asiatique, tomates cerises et vinaigrette aux fruits.",
    price: 8,
    src: "/santaana.png",
    allergens: ['G', 'S']
  },
  {
    title: "Salade mixte avec avocat et poudre de noix.",
    price: 7.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  }
]

export default function Salades() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Salades</h2>
        {
          salades.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}