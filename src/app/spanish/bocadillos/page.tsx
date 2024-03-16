import CardProduct from "@/components/ui/CardProduct"

const bocadillos = [
  {
    title: "Jamón Ibérico 50%, AVOE y orégano.",
    price: 4.5,
    secondPrice: 2.5,
    src: "/santaana.png",
    allergens: ['G']
  },
  {
    title: "Jamón Ibérico 50% y queso manchego.",
    price: 4.9,
    secondPrice: 2.8,
    src: "/SmBocHamChees.png",
    allergens: ['G', 'L']
  },
]

const bagels = [
  {
    title: "Bagel de salmón ahumado, crema de queso y lechugitas con miel.",
    price: 6,
    src: "/SmBagSal.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Bagel de jamón ibérico y ensalada fresca con queso ahumado.",
    price: 7.5,
    src: "/SmBagHam.png",
    allergens: ['G', 'L']
  },
]

const tostas = [
  {
    title: "Tosta canaria de almogrote, pata asada y tumaca.",
    price: 7,
    src: "/SmToastCanary.png",
    allergens: ['G', 'L']
  },
  {
    title: "Tosta de atún, aguacate y queso canario.",
    price: 7.5,
    src: "/SmToastTuna.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Tosta catalana con tumaca y jamón ibérico.",
    price: 6.5,
    src: "/SmToastHam.png",
    allergens: ['G']
  },
  {
    title: "Tosta con crema de cacahuete, plátano canario, manzana roja, miel, canela y semillas de chía.",
    price: 6,
    src: "/SmToastCacah.png",
    allergens: ['G', 'F']
  },
]

export default function Bocadillos() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Bocadillos y pulguitas</h2>
      {
        bocadillos.map(({title, price, secondPrice, src, allergens}, index) => (
          <CardProduct key={title} title={title} price={price} secondPrice={secondPrice} src={src} allergens={allergens} index={index % 2 === 0}/>
        ))
      }
      <h2 className="mt-2 font-medium text-center">Bagels</h2>
      {
        bagels.map(({title, price, src, allergens}, index) => (
          <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
        ))
      }
      <h2 className="mt-2 font-medium text-center">Tostas</h2>
      {
        tostas.map(({title, price, src, allergens}, index) => (
          <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
        ))
      }
    </div>
  )
}