"use client";
import { cn } from "@/lib/utils";
import { CircleFadingPlus } from "lucide-react";
import Image from "next/image";
import { Suspense, useState } from "react";
import Transtition from "./Transtition";

interface CardProductProps {
  title: string;
  price: number;
  secondPrice?: number;
  allergens: string[];
  src: string;
  index: boolean;
}

export default function CardProduct({
  title,
  price,
  secondPrice,
  allergens,
  src,
  index,
}: CardProductProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "initial";
  };

  return (
    <>
      <div className="flex flex-col gap-2 mt-2" onClick={handleOpenModal}>
        <div
          className={cn(
            "flex bg-rose-100 rounded-sm h-40 md:h-32",
            index === false && "bg-rose-200"
          )}
        >
          <div className="w-2/6 flex justify-center items-center cursor-pointer">
            <Image
              src={`/menuImg${src}`}
              alt="Plato"
              width={120}
              height={120}
              className="rounded-sm"
            />
          </div>
          <div className="w-3/6 flex flex-col justify-around p-2">
            <div>
              <p>{title}</p>
            </div>
            <div className="flex gap-1">
              {allergens.map((allergy) => (
                <Image
                  key={allergy}
                  src={`/allergens/${allergy}.png`}
                  alt="Alergeno"
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </div>
          <div className="w-1/6 flex flex-col justify-end items-center p-2">
            <p className="font-medium">{`${price.toFixed(2)}€`}</p>
            {secondPrice && (
              <p className="font-medium">{`${secondPrice?.toFixed(2)}€`}</p>
            )}
          </div>
        </div>
      </div>
      {openModal && (
        <div
          className="z-10 fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-rose-100"
          onClick={closeModal}
        >
          <div className="flex justify-center items-center absolute top-5 right-5 md:top-10 md:right-20 w-12 h-12 bg-rose-200 rounded-full cursor-pointer">
            <CircleFadingPlus size={36} className="-rotate-45" />
          </div>
          <Transtition>
            <Image
              src={`/menuImg${src.replace("/Sm", "/Xl")}`}
              alt={"Alternativo"}
              width={500}
              height={500}
            />
          </Transtition>
        </div>
      )}
    </>
  );
}
