import CardProduct from "@/components/ui/CardProduct";
import Image from "next/image";

const desayunos = [
  {
    title: "Yogurt de cabra, granola y fruta de temporada.",
    price: 5,
    src: "/SmDesYog.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Porridge de avena, canela y frutas.",
    price: 3.9,
    src: "/SmDesPorridge.png",
    allergens: ['G', 'L', 'F']
  },
]

export default function Desayunos() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Desayunos</h2>
        {
          desayunos.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}