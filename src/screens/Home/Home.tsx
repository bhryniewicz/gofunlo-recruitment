"use client";

import { useState } from "react";
import { Options } from "@/components/Options";
import { DedicatedOffer } from "@/components/DedicatedOffer";
import { ProductsData } from "@/app/api/products/route";

export const Home = ({ trips }: { trips: ProductsData }) => {
  const [isRecommendations, setIsRecommendations] = useState<boolean>(false);

  return (
    <div className="flex gap-12 p-6 bg-white  rounded-lg px-32 pt-16">
      <div>
        <Options setIsRecommendations={setIsRecommendations} />
      </div>

      {isRecommendations && (
        <div className="flex flex-col mt-16" data-testid="dedicated-offers">
          <h1 className="text-3xl text-primary font-bold mb-8">
            Dedykowane oferty
          </h1>
          <div className="flex flex-col gap-8 overflow-y-auto h-[65vh] no-scrollbar ">
            {trips.map((trip) => {
              return <DedicatedOffer trip={trip} key={trip.id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
