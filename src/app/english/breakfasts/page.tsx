import CardProduct from "@/components/ui/CardProduct";

const breakfasts = [
  {
    title: "Goat yoghurt, granola and seasonal fruit.",
    price: 5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Oatmeal, cinnamon and fruit porridge.",
    price: 3.9,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
]

export default function Breakfasts() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Breakfasts</h2>
        {
          breakfasts.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}