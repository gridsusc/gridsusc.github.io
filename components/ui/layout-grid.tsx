"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-xl",
              "transition-all duration-300 hover:shadow-[0_0_30px_rgba(123,97,255,0.35)] cursor-pointer",
              selected?.id === card.id
                ? "rounded-xl cursor-pointer absolute inset-0 md:h-full md:w-[90%] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white/5 rounded-xl h-[300px] md:h-full w-full"
                : "bg-white/5 rounded-xl h-[300px] md:h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 h-full w-full left-0 top-0 bg-black/60 backdrop-blur-sm z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: selected?.id ? 1 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="800"
      width="1000"
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition duration-300"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-xl shadow-2xl relative z-[60]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-[60] rounded-xl" />
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="relative px-6 md:px-10 pb-8 z-[70] mt-auto w-full"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
