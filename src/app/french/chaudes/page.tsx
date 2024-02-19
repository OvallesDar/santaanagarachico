import CardProduct from "@/components/ui/CardProduct";

const chaudes = [
  {
    title: "Burrito de bœuf et de légumes frits au wok avec vinaigrette au soja et à la moutarde",
    price: 8,
    src: "/santaana.png",
    allergens: ['G', 'L','S', 'M', 'H']
  },
  {
    title: "Burrito de poulet fermier, fromage salé et mayonnaise mojo rouge.",
    price: 7,
    src: "/santaana.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Hamburger de bœuf avec salade fraîche, cornichons et fromage canarien.",
    price: 10,
    src: "/santaana.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Pain Bao avec du poulet fermier et du fromage canarien.",
    price: 12,
    src: "/santaana.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Pommes de terre ridées à la sauce verte et rouge canarienne.",
    price: 6,
    src: "/santaana.png",
    allergens: ['G', 'F']
  },
]

export default  function Chaudes() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Entrées chaudes</h2>
        {
          chaudes.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}