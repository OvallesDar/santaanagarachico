import Image from "next/image";
import LanguagesLinks from "./components/languagesLinks";
import RRSSLinks from "./components/rrssLinks";

export default function TopBar() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full md:w-2/3">
        <div style={{backgroundImage: `url('/logobg.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="flex flex-col items-center w-full py-14">
          <Image 
            src={"/santaana.png"}
            alt="logo"
            width={150}
            height={150}
            className="bg-rose-100 rounded-full"
          />
        </div>
        
        <div className="flex flex-row w-full h-12 items-center justify-between">
          <div id="rrss" className="flex gap-2 pl-3">
            <RRSSLinks />
          </div>
          <div id="languages" className="flex gap-1 pr-3">
            <LanguagesLinks />
          </div>
        </div>
      </div>
    </div>
  )
}