import CardProduct from "@/components/ui/CardProduct"

const boards = [
  {
    title: "Smoked salmon board with jam and different textures.",
    price: 11.5,
    src: "/SmBoardSalmon.png",
    allergens: ['G', 'L', 'P', 'F']
  },
  {
    title: "50% Iberian ham board.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
  {
    title: "Assorted cheese board from Teno Alto (depending on availability at the cheese factory).",
    price: 13.5,
    src: "/SmBoardCheese.png",
    allergens: ['G', 'L']
  },
  {
    title: "50% Iberian ham and assorted cheeses board from Teno Alto.",
    price: 15.5,
    src: "/SmBoardHamAndChees.png",
    allergens: ['G', 'L']
  },
  {
    title: "Canarian mixed board with Teno Alto cheeses, roast leg and almogrote.",
    price: 13.5,
    src: "/SmBoardMixCanary.png",
    allergens: ['G', 'L', 'F']
  },
  {
    title: "Roast leg board.",
    price: 13.5,
    src: "/santaana.png",
    allergens: ['G']
  },
]

export default function Boards() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Boards</h2>
        {
          boards.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}