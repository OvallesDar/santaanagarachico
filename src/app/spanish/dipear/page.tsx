import CardProduct from "@/components/ui/CardProduct"

export default function Dipear() {
  const dipear = [
    {
      title: "Nachos con guacamole km 0 y salsa cheddar.",
      price: 6.5,
      src: "/SmNachos.png",
      allergens: ['G', 'L']
    },
    {
      title: "Almogrote con pan tostado para untar.",
      price: 6.5,
      src: "/santaana.png",
      allergens: ['G', 'L']
    },
    {
      title: "Hummus con pan pita.",
      price: 6.5,
      src: "/SmDipHummus.png",
      allergens: ['G']
    },
  ]
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Dips</h2>
        {
          dipear.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}