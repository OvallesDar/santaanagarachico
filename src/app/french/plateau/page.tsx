import CardProduct from "@/components/ui/CardProduct"

const plateau = [
  {
    title: "Planche de saumon fumé avec confiture et différentes textures.",
    price: 11.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'P', 'F']
  },
  {
    title: "Planche de jambon ibérique à 50 %.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
  {
    title: "Plateau de fromages assortis de Teno Alto (en fonction des disponibilités à la fromagerie).",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G', 'L']
  },
  {
    title: "Planche de jambon ibérique et d'assortiment de fromages de Teno Alto à 50 %.",
    price: 15.5,
    src: "/santaana.png",
    allergens: ['G', 'L']
  },
  {
    title: "Planche mixte canarienne avec fromages de Teno Alto, jambon rôti et almogrote.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Planche de jambon rôti.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
]

export default function Plateau() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Plateau</h2>
        {
          plateau.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}