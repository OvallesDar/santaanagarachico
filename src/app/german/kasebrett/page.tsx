import CardProduct from "@/components/ui/CardProduct"

const kasebrett = [
  {
    title: "Räucherlachsplatte mit Marmelade und verschiedenen Texturen.",
    price: 11.5,
    src: "/SmBoardSalmon.png",
    allergens: ['G', 'L', 'P', 'F']
  },
  {
    title: "50% iberische Schinkenplatte.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
  {
    title: "Gemischte Käseplatte aus Teno Alto (je nach Verfügbarkeit in der Käserei).",
    price: 13.5,
    src: "/SmBoardCheese.png",
    allergens: ['G', 'L']
  },
  {
    title: "50% iberischer Schinken und verschiedene Käsesorten aus Teno Alto.",
    price: 15.5,
    src: "/santaana.png",
    allergens: ['G', 'L']
  },
  {
    title: "Kanarische gemischte Platte mit Teno Alto-Käse, gebratener Keule und Almogrote.",
    price: 13.5,
    src: "/SmBoardMixCanary.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Brett mit Bratenkeulen.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
]

export default function Kasebrett() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Käsebrett</h2>
        {
          kasebrett.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}