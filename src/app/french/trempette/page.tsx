import CardProduct from "@/components/ui/CardProduct"

export default function Trempette() {
  const trempette = [
    {
      title: "Nachos avec sauce guacamole km 0 et cheddar.",
      price: 6.5,
      src: "/SmNachos.png",
      allergens: ['G', 'L']
    },
    {
      title: "Almogrote avec tartinade de pain grillé.",
      price: 6.5,
      src: "/SmAlmogrote.png",
      allergens: ['G', 'L']
    },
    {
      title: "Houmous avec pain pita.",
      price: 6.5,
      src: "/SmDipHummus.png",
      allergens: ['G']
    },
  ]
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Trempette</h2>
        {
          trempette.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}