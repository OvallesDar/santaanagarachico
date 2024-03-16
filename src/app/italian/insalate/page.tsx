import CardProduct from "@/components/ui/CardProduct";

const insalate = [
  {
    title: "Insalata tiepida di pollo all'asiatica, pomodorini e vinaigrette alla frutta.",
    price: 8,
    src: "/SmSaladChick.png",
    allergens: ['G', 'S']
  },
  {
    title: "Insalata mista con avocado e polvere di noci.",
    price: 7.5,
    src: "/SmSaladAvoc.png",
    allergens: ['G', 'L', 'F']
  }
]

export default function Insalate() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Insalate</h2>
        {
          insalate.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}