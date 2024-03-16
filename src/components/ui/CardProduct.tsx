"use client"
/* Check use client */
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProductProps {
    title: string
    price: number
    secondPrice?: number
    allergens: string[]
    src: string
    index: boolean
}

export default function CardProduct({title, price, secondPrice, allergens, src, index}: CardProductProps) {
  return (
    <div className="flex flex-col gap-2 mt-2">
    <div className={cn("flex bg-rose-100 rounded-sm h-40 md:h-32", index === false && "bg-rose-200")}>
        <div onClick={()=>{console.log("object")}} className="w-2/6 flex justify-center items-center cursor-pointer">
            <Image src={`/menuImg${src}`} alt="Plato" width={120} height={120} className="rounded-sm"/>
        </div>
        <div className="w-3/6 flex flex-col justify-around p-2">
            <div><p>{title}</p></div>
            <div className="flex gap-1">
                {
                    allergens.map(allergy => (
                        <Image key={allergy} src={`/allergens/${allergy}.png`} alt="Alergeno" width={30} height={30}/>
                    ))
                }    
            </div>
        </div>
        <div className="w-1/6 flex flex-col justify-end items-center p-2">
            <p className="font-medium">{`${price.toFixed(2)}€`}</p>
            {
                secondPrice && <p className="font-medium">{`${secondPrice?.toFixed(2)}€`}</p>
            }
        </div>
    </div>
    </div>
  )
}