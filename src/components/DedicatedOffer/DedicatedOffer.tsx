import Image from "next/image";
import Logo from "@/assets/logo.png";
import { BriefcaseBusiness, Calendar, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";
import { ProductData } from "@/app/api/products/route";

export const DedicatedOffer = ({ trip }: { trip: ProductData }) => {
  const {
    media,
    name,
    location,
    country_name,
    min_trip_start_date,
    max_trip_end_date,
    min_price,
    max_price,
    currency,
    company,
  } = trip;

  return (
    <Link href="/bookings">
      <div className="flex gap-8 shadow-lg rounded-md  h-[200px]">
        <div className="w-[400px] relative">
          <Image
            src={media && media.length > 0 ? media[0].url : Logo}
            alt="trip image"
            fill={true}
          />
        </div>
        <ul className="flex flex-col space-y-2 p-4">
          <h1 className="text-xl font-bold mb-2">
            {name.trim() === "" ? "Nazwa wycieczki" : name}
          </h1>
          <li className="flex items-center gap-2">
            <MapPin className="text-gray-500" size={16} />
            <span>
              {location?.city}, {location?.province}, {country_name}
            </span>
          </li>

          <li className="flex items-center gap-2">
            <Calendar className="text-gray-500" size={16} />
            <span>
              {min_trip_start_date || "TBD"} - {max_trip_end_date || "TBD"}
            </span>
          </li>

          <li className="flex items-center gap-2">
            <DollarSign className="text-gray-500" size={16} />
            <span>
              {min_price
                ? `${min_price} - ${max_price} ${currency}`
                : "Not specified"}
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BriefcaseBusiness className="text-gray-500" size={16} />
            {company.name}
          </li>
        </ul>
      </div>
    </Link>
  );
};
