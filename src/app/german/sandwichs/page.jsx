import CardProduct from "@/components/ui/CardProduct"

const sandwichs = [
  {
    title: "Iberischer Schinken 50%, AVOE und Oregano.",
    price: 4.5,
    secondPrice: 2.5,
    src: "/santaana.png",
    allergens: ['G']
  },
  {
    title: "Iberischer Schinken 50% und Manchego-Käse.",
    price: 4.9,
    secondPrice: 2.8,
    src: "/santaana.png",
    allergens: ['G', 'L']
  },
]

const bagels = [
  {
    title: "Bagel mit geräuchertem Lachs, Frischkäse und Honig-Salat.",
    price: 6,
    src: "/santaana.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Bagel mit iberischem Schinken und frischem Salat mit geräuchertem Käse.",
    price: 7.5,
    src: "/santaana.png",
    allergens: ['G', 'L']
  },
]

const toasts = [
  {
    title: "Kanarischer Toast mit Almogrote, gebratener Keule und Tumaca.",
    price: 7,
    src: "/santaana.png",
    allergens: ['G', 'L']
  },
  {
    title: "Thunfisch, Avocado und kanarischer Käsetoast.",
    price: 7.5,
    src: "/santaana.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Katalanisches Toastbrot mit Tumaca und iberischem Schinken.",
    price: 6.5,
    src: "/santaana.png",
    allergens: ['G']
  },
  {
    title: "Toast mit Erdnussbutter, kanarischer Banane, rotem Apfel, Honig, Zimt und Chiasamen.",
    price: 6,
    src: "/santaana.png",
    allergens: ['G', 'F']
  },
]

export default function Sandwichs() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Sandwichs</h2>
      {
        sandwichs.map(({title, price, secondPrice, src, allergens}, index) => (
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