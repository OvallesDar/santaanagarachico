import CardProduct from "@/components/ui/CardProduct";

const caldi = [
  {
    title: "Burrito di manzo e verdure fritto al wok con salsa di soia e senape",
    price: 8,
    src: "/SmBurrTern.png",
    allergens: ['G', 'L','S', 'M', 'H']
  },
  {
    title: "Burrito di pollo rustico, formaggio stagionato e maionese al mojo rosso.",
    price: 7,
    src: "/SmBurrChick.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Hamburger di manzo con insalata fresca, cetriolini e formaggio canario.",
    price: 10,
    src: "/SmBurger.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Pane Bao con pollo ruspante e formaggio delle Canarie.",
    price: 12,
    src: "/SmBao.png",
    allergens: ['G', 'L', 'H']
  },
  {
    title: "Patate rugose con salsa verde e rossa canaria.",
    price: 6,
    src: "/SmPotato.png",
    allergens: ['G', 'F']
  },
]

export default  function Caldi() {
  return (
    <div>
      <h2 className="mt-2 font-medium text-center">Antipasti caldi</h2>
        {
          caldi.map(({title, price, src, allergens}, index) => (
            <CardProduct key={title} title={title} price={price} src={src} allergens={allergens} index={index % 2 === 0}/>
          ))
        }
    </div>
  )
}