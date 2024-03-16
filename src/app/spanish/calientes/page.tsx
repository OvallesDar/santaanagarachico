import CardProduct from "@/components/ui/CardProduct";

const calientes = [
  {
    title: "Burrito de ternera y verduras wok con aliño de soja y mostaza.",
    price: 8,
    src: "/SmBurrTern.png",
    allergens: ['G', 'L','S', 'M', 'H']
  },
  {
    title: "Burrito de pollo campero, queso curado y mahonesa de mojo rojo.",
    price: 7,
    src: "/SmBurrChick.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Hamburguesa de ternera con ensalada fresca, pepinillos y queso canario.",
    price: 10,
    src: "/SmBurger.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Pan Bao de pollo campero y queso canario.",
    price: 12,
    src: "/SmBao.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Papas arrugadas con mojo verde y rojo.",
    price: 6,
    src: "/SmPotato.png",
    allergens: ['G', 'F']
  },
]

export default  function Calientes() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Entrantes Calientes</h2>
        {
          calientes.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}