import CardProduct from "@/components/ui/CardProduct";

const desserts = [
  {
    title: "Chocolate coulant with cinnamon ice cream and walnut powder.",
    price: 5.5,
    src: "/SmCoulant.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Cakes (homemade)",
    price: 3.5,
    secondPrice: 3.75,
    src: "/SmCake.png",
    allergens: ['G','H', 'L', 'F', 'S', 'Z']
  },
]

export default function Postre() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Desserts</h2>
        {
          desserts.map(({title, price, src, allergens, secondPrice}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} secondPrice={secondPrice} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}