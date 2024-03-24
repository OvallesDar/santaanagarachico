import CardProduct from "@/components/ui/CardProduct"

const tagliere = [
  {
    title: "Tagliere di salmone affumicato con marmellata e diverse consistenze.",
    price: 11.5,
    src: "/SmBoardSalmon.png",
    allergens: ['G', 'L', 'P', 'F']
  },
  {
    title: "50% di prosciutto iberico.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
  {
    title: "Tagliere di formaggi assortiti di Teno Alto (secondo la disponibilità del caseificio).",
    price: 13.5,
    src: "/SmBoardCheese.png",
    allergens: ['G', 'L']
  },
  {
    title: "50% di prosciutto iberico e tagliere di formaggi assortiti di Teno Alto.",
    price: 15.5,
    src: "/SmBoardHamAndChees.png",
    allergens: ['G', 'L']
  },
  {
    title: "Tagliere misto canario con formaggi del Teno Alto, coscia arrosto e almogrote.",
    price: 13.5,
    src: "/SmBoardMixCanary.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Tagliere di cosce arrosto.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
]

export default function Tagliere() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Tagliere</h2>
        {
          tagliere.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}