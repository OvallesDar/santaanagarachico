import CardProduct from "@/components/ui/CardProduct";

const colazione = [
  {
    title: "Yogurt di capra, granola e frutta di stagione.",
    price: 5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Porridge di farina d'avena, cannella e frutta.",
    price: 3.9,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
]

export default function Colazione() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Colazione</h2>
        {
          colazione.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}