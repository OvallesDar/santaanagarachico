import CardProduct from "@/components/ui/CardProduct"

const sandwiches = [
  {
    title: "Iberian ham 50%, AVOE and oregano.",
    price: 4.5,
    secondPrice: 2.5,
    src: "/SmBocHam.png",
    allergens: ['G']
  },
  {
    title: "Iberian ham 50% and Manchego cheese.",
    price: 4.9,
    secondPrice: 2.8,
    src: "/SmBocHamChees.png",
    allergens: ['G', 'L']
  },
]

const bagels = [
  {
    title: "Smoked salmon bagel, cream cheese and honey lettuce.",
    price: 6,
    src: "/SmBagSal.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Iberian ham bagel and fresh salad with smoked cheese.",
    price: 7.5,
    src: "/SmBagHam.png",
    allergens: ['G', 'L']
  },
]

const toasts = [
  {
    title: "Canarian toast of almogrote, roasted leg and tumaca.",
    price: 7,
    src: "/SmToastCanary.png",
    allergens: ['G', 'L']
  },
  {
    title: "Tuna, avocado and Canarian cheese toast.",
    price: 7.5,
    src: "/SmToastTuna.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Catalan toast with tumaca and Iberian ham.",
    price: 6.5,
    src: "/SmToastHam.png",
    allergens: ['G']
  },
  {
    title: "Toast with peanut butter, canary banana, red apple, honey, cinnamon and chia seeds.",
    price: 6,
    src: "/SmToastCacah.png",
    allergens: ['G', 'F']
  },
]

export default function Sandwiches() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Sandwiches</h2>
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