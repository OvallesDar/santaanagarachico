import CardProduct from "@/components/ui/CardProduct"

export default function Dips() {
  const dips = [
    {
      title: "Nachos con guacamole km 0 e salsa cheddar.",
      price: 6.5,
      src: "/santaana.png",
      allergens: ['G', 'L']
    },
    {
      title: "Almogrote con pane tostato spalmato.",
      price: 6.5,
      src: "/santaana.png",
      allergens: ['G', 'L']
    },
    {
      title: "Hummus con pane pita.",
      price: 6.5,
      src: "/santaana.png",
      allergens: ['G']
    },
  ]
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Dips</h2>
        {
          dips.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}