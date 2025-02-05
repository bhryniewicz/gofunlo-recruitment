"use client";

import { useState } from "react";
import { Options } from "@/components/Options";
import { DedicatedOffer } from "@/components/DedicatedOffer";
import { ProductsData } from "@/types/products";

export const Home = ({ trips }: { trips: ProductsData }) => {
  const [isRecommendations, setIsRecommendations] = useState<boolean>(false);

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-12 p-6 bg-white rounded-lg px-4 md:px-32 pt-2 md:pt-16">
      <Options setIsRecommendations={setIsRecommendations} />
      {isRecommendations && (
        <div className="flex flex-col mt-16" data-testid="dedicated-offers">
          <h1 className="text-3xl text-primary font-bold mb-8">
            Dedykowane oferty
          </h1>
          <div className="flex flex-col gap-8 md:overflow-y-auto h-auto md:h-[65vh] md:no-scrollbar ">
            {trips.map((trip) => {
              return <DedicatedOffer trip={trip} key={trip.id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
