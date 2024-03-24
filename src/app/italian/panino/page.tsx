import CardProduct from "@/components/ui/CardProduct"

const panino = [
  {
    title: "Prosciutto iberico 50%, AVOE e origano.",
    price: 4.5,
    secondPrice: 2.5,
    src: "/SmBocHam.png",
    allergens: ['G']
  },
  {
    title: "Prosciutto iberico 50% e formaggio Manchego.",
    price: 4.9,
    secondPrice: 2.8,
    src: "/SmBocHamChees.png",
    allergens: ['G', 'L']
  },
]

const bagels = [
  {
    title: "Bagel al salmone affumicato, crema di formaggio e lattuga al miele.",
    price: 6,
    src: "/SmBagSal.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Bagel al prosciutto iberico e insalata fresca con formaggio affumicato.",
    price: 7.5,
    src: "/SmBagHam.png",
    allergens: ['G', 'L']
  },
]

const toasts = [
  {
    title: "Toast canario di almogrote, coscia arrostita e tumaca.",
    price: 7,
    src: "/SmToastCanary.png",
    allergens: ['G', 'L']
  },
  {
    title: "Toast al tonno, avocado e formaggio delle Canarie.",
    price: 7.5,
    src: "/SmToastTuna.png",
    allergens: ['G', 'L', 'P']
  },
  {
    title: "Toast catalano con tumaca e prosciutto iberico.",
    price: 6.5,
    src: "/SmToastHam.png",
    allergens: ['G']
  },
  {
    title: "Toast con burro di arachidi, banana, mela rossa, miele, cannella e semi di chia.",
    price: 6,
    src: "/SmToastCacah.png",
    allergens: ['G', 'F']
  },
]

export default function Panino() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Panino</h2>
      {
        panino.map(({title, price, secondPrice, src, allergens}, index) => (
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