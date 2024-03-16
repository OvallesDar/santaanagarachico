import CardProduct from "@/components/ui/CardProduct"

export default function Dips() {
  const dips = [
    {
      title: "Nachos with guacamole km 0 and cheddar sauce.",
      price: 6.5,
      src: "/SmNachos.png",
      allergens: ['G', 'L']
    },
    {
      title: "Almogrote with toasted bread spread.",
      price: 6.5,
      src: "/santaana.png",
      allergens: ['G', 'L']
    },
    {
      title: "Hummus with pita bread.",
      price: 6.5,
      src: "/SmDipHummus.png",
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