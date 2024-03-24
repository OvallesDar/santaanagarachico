import CardProduct from "@/components/ui/CardProduct"

const sandwiches = [
  {
    title: "Jambon ibérique 50%, AVOE et origan.",
    price: 4.5,
    secondPrice: 2.5,
    src: "/SmBocHam.png",
    allergens: ['G']
  },
  {
    title: "Jambon ibérique 50 % et fromage Manchego.",
    price: 4.9,
    secondPrice: 2.8,
    src: "/SmBocHamChees.png",
    allergens: ['G', 'L']
  },
]

const bagels = [
  {
    title: "Bagel au saumon fumé, fromage frais et laitue au miel.",
    price: 6,
    src: "/SmBagSal.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Bagel au jambon ibérique et salade fraîche au fromage fumé.",
    price: 7.5,
    src: "/SmBagHam.png",
    allergens: ['G', 'L']
  },
]

const toasts = [
  {
    title: "Toast canarien d'almogrote, de jambon grillé et de tumaca.",
    price: 7,
    src: "/SmToastCanary.png",
    allergens: ['G', 'L']
  },
  {
    title: "Thon, avocat et toast au fromage canarien.",
    price: 7.5,
    src: "/SmToastTuna.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Toast catalan avec tumaca et jambon ibérique.",
    price: 6.5,
    src: "/SmToastHam.png",
    allergens: ['G']
  },
  {
    title: "Toast avec beurre de cacahuètes, banane canari, pomme rouge, miel, cannelle et graines de chia.",
    price: 6,
    src: "/SmToastCacah.png",
    allergens: ['G', 'F']
  },
]

export default function Sandwichs() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Sandwichs</h2>
      {
        sandwiches.map(({title, price, secondPrice, src, allergens}, index) => (
          <CardProduct key={title} title={title} price={price} secondPrice={secondPrice} src={src} allergens={allergens} index={index % 2 === 0}/>
        ))
      }
      <h2 className="mt-2 font-medium text-center">Bagels</h2>
      {
        bagels.map(({title, price, src, allergens}, index) => (
          <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
        ))
      }
      <h2 className="mt-2 font-medium text-center">Toasts</h2>
      {
        toasts.map(({title, price, src, allergens}, index) => (
          <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
        ))
      }
    </div>
  )
}