"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function EventsGrid() {
  return (
    <section className="py-20 bg-[#0b0b12] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Events & Community
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Where USC data scientists collaborate, innovate, and build real-world impact.
          </p>
        </div>
        <div className="h-screen py-10 w-full relative">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}

const IdeathonContent = () => {
  return (
    <div>
      <p className="font-bold text-3xl md:text-4xl text-white">Ideathon</p>
      <p className="text-neutral-200 max-w-lg mt-3 text-base">
        48-hour innovation sprint where students collaborate to prototype real-world AI and data science solutions.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img src="/images/events/ideathon2.jpg" alt="Ideathon Event 2" className="rounded-xl object-cover w-full h-32 md:h-48 shadow-[0_0_15px_rgba(123,97,255,0.2)]" />
        <img src="/images/events/ideathon3.jpg" alt="Ideathon Event 3" className="rounded-xl object-cover w-full h-32 md:h-48 shadow-[0_0_15px_rgba(123,97,255,0.2)]" />
      </div>
    </div>
  );
};

const MixerContent = () => {
  return (
    <div>
      <p className="font-bold text-3xl md:text-4xl text-white">Social Mixer</p>
      <p className="text-neutral-200 max-w-lg mt-3 text-base">
        Fun networking event bringing together GRIDS members, alumni, and industry professionals.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img src="/images/events/mixer2.jpg" alt="Mixer Event 2" className="rounded-xl object-cover w-full h-32 md:h-48 shadow-[0_0_15px_rgba(123,97,255,0.2)]" />
        <img src="/images/events/mixer3.jpg" alt="Mixer Event 3" className="rounded-xl object-cover w-full h-32 md:h-48 shadow-[0_0_15px_rgba(123,97,255,0.2)]" />
      </div>
    </div>
  );
};

const SymposiumContent = () => {
  return (
    <div>
      <p className="font-bold text-3xl md:text-4xl text-white">Symposium</p>
      <p className="text-neutral-200 max-w-lg mt-3 text-base">
        End-of-semester research and project showcase highlighting GRIDS innovation.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img src="/images/events/symposium2.jpg" alt="Symposium Event 2" className="rounded-xl object-cover w-full h-32 md:h-48 shadow-[0_0_15px_rgba(123,97,255,0.2)]" />
        <img src="/images/events/symposium3.jpg" alt="Symposium Event 3" className="rounded-xl object-cover w-full h-32 md:h-48 shadow-[0_0_15px_rgba(123,97,255,0.2)]" />
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <IdeathonContent />,
    className: "md:col-span-2",
    thumbnail: "/images/events/ideathon1.jpg",
  },
  {
    id: 2,
    content: <MixerContent />,
    className: "col-span-1",
    thumbnail: "/images/events/mixer1.jpg",
  },
  {
    id: 3,
    content: <SymposiumContent />,
    className: "col-span-1",
    thumbnail: "/images/events/symposium1.jpg",
  },
];
