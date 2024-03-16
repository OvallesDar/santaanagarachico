import CardProduct from "@/components/ui/CardProduct";

const hots = [
  {
    title: "Wok-fried beef and vegetable burrito with soy and mustard dressing",
    price: 8,
    src: "/SmBurrTern.png",
    allergens: ['G', 'L','S', 'M', 'H']
  },
  {
    title: "Country chicken burrito, cured cheese and red mojo mayonnaise.",
    price: 7,
    src: "/SmBurrChick.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Beef burger with fresh salad, gherkins and canarian cheese.",
    price: 10,
    src: "/SmBurger.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Bao Bread with free-range chicken and Canarian cheese.",
    price: 12,
    src: "/SmBao.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Wrinkled potatoes with green and red sauce canarian.",
    price: 6,
    src: "/SmPotato.png",
    allergens: ['G', 'F']
  },
]

export default  function Calientes() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Hot Starters</h2>
        {
          hots.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}