import CardProduct from "@/components/ui/CardProduct";

const nachspeisen = [
  {
    title: "Schokoladen-Coulant mit Zimteis und Walnusspulver.",
    price: 5.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Kuchen (selbstgebacken)",
    price: 3.5,
    secondPrice: 3.75,
    src: "/santaana.png",
    allergens: ['G','H', 'L', 'F', 'S', 'Z']
  },
]

export default function Nachspeisen() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Nachspeisen</h2>
        {
          nachspeisen.map(({title, price, src, allergens, secondPrice}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} secondPrice={secondPrice} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}