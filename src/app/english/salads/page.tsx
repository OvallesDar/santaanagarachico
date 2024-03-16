import CardProduct from "@/components/ui/CardProduct";

const salads = [
  {
    title: "Warm asian chicken salad, cherry tomatoes and fruit vinaigrette.",
    price: 8,
    src: "/SmSaladChick.png",
    allergens: ['G', 'S']
  },
  {
    title: "Mixed salad with avocado and nut powder.",
    price: 7.5,
    src: "/SmSaladAvoc.png",
    allergens: ['G', 'L', 'F']
  }
]

export default function Salads() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Salads</h2>
        {
          salads.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}