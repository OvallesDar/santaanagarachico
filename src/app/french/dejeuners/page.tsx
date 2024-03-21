import CardProduct from "@/components/ui/CardProduct";

const dejeuners = [
  {
    title: "Yaourt de chèvre, granola et fruits de saison.",
    price: 5,
    src: "/SmDesYog.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Porridge aux flocons d'avoine, à la cannelle et aux fruits.",
    price: 3.9,
    src: "/SmDesPorridge.png",
    allergens: ['G', 'L', 'F']
  },
]

export default function Dejeuners() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Petits déjeuners</h2>
        {
          dejeuners.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}