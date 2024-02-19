import CardProduct from "@/components/ui/CardProduct"

export default function Dippen() {
  const dippen = [
    {
      title: "Nachos mit Guacamole km 0 und Cheddar-Sauce.",
      price: 6.5,
      src: "/santaana.png",
      allergens: ['G', 'L']
    },
    {
      title: "Almogrote mit getoastetem Brotaufstrich.",
      price: 6.5,
      src: "/santaana.png",
      allergens: ['G', 'L']
    },
    {
      title: "Hummus mit Fladenbrot.",
      price: 6.5,
      src: "/santaana.png",
      allergens: ['G']
    },
  ]
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Dippen</h2>
        {
          dippen.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}