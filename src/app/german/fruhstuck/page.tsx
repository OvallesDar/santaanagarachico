import CardProduct from "@/components/ui/CardProduct";

const fruhstuck = [
  {
    title: "Ziegenjoghurt, Müsli und Obst der Saison.",
    price: 5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Haferflocken, Zimt und Früchtebrei.",
    price: 3.9,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
]

export default function Fruhstuck() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Frühstück</h2>
        {
          fruhstuck.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}