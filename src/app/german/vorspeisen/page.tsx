import CardProduct from "@/components/ui/CardProduct";

const vorspeisen = [
  {
    title: "Im Wok gebratener Burrito aus Rindfleisch und Gemüse mit Soja- und Senfdressing.",
    price: 8,
    src: "/santaana.png",
    allergens: ['G', 'L','S', 'M', 'H']
  },
  {
    title: "Burrito mit Hähnchenfleisch, geräuchertem Käse und roter Mojo-Mayonnaise.",
    price: 7,
    src: "/santaana.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Rindfleisch-Burger mit frischem Salat, Gurken und kanarischem Käse.",
    price: 10,
    src: "/santaana.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Bao-Brot mit Huhn aus Freilandhaltung und kanarischem Käse.",
    price: 12,
    src: "/santaana.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Zerknitterte Kartoffeln mit grüner und roter Soße auf kanarische Art.",
    price: 6,
    src: "/santaana.png",
    allergens: ['G', 'F']
  },
]

export default  function Vorspeisen() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Heiße Vorspeisen</h2>
        {
          vorspeisen.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}