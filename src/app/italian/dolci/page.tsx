import CardProduct from "@/components/ui/CardProduct";

const dolci = [
  {
    title: "Coulant al cioccolato con gelato alla cannella e polvere di noci.",
    price: 5.5,
    src: "/SmCoulant.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Torte (fatte in casa)",
    price: 3.5,
    secondPrice: 3.75,
    src: "/SmCake.png",
    allergens: ['G','H', 'L', 'F', 'S', 'Z']
  },
]

export default function Dolci() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Dolci</h2>
        {
          dolci.map(({title, price, src, allergens, secondPrice}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} secondPrice={secondPrice} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}