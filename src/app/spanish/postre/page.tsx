import CardProduct from "@/components/ui/CardProduct";

const postres = [
  {
    title: "Coulant de chocolate con helado de canela y polvo de nueces.",
    price: 5.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Tartas. (Elaboración propia.)",
    price: 3.5,
    secondPrice: 3.75,
    src: "/SmCake.png",
    allergens: ['G','H', 'L', 'F', 'S', 'Z']
  },
]

export default function Postre() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Postres</h2>
        {
          postres.map(({title, price, src, allergens, secondPrice}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} secondPrice={secondPrice} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}
