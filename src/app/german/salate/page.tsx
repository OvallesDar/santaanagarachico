import CardProduct from "@/components/ui/CardProduct";

const salate = [
  {
    title: "Warmer asiatischer Hühnersalat, Kirschtomaten und Fruchtvinaigrette.",
    price: 8,
    src: "/santaana.png",
    allergens: ['G', 'S']
  },
  {
    title: "Gemischter Salat mit Avocado und Nusspulver.",
    price: 7.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  }
]

export default function Salate() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Salate</h2>
        {
          salate.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}