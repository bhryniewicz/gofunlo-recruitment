import { Participant } from "@/app/api/bookings/route";
import { formatDate } from "date-fns";

export const TripParticipantCard = ({
  participant,
}: {
  participant: Participant;
}) => {
  return (
    <li className="bg-white shadow-md rounded-2xl p-8 border border-gray-200">
      <p className="text-lg font-semibold text-gray-700 mb-2">
        {participant?.first_name} {participant?.last_name}
      </p>
      <p className="text-gray-600">
        Data urodzenia:{" "}
        <strong>{formatDate(participant?.birth_date, "dd-MM-yyyy")}</strong>
      </p>
      <p className="text-gray-600">
        Pesel: <strong>{participant?.pesel}</strong>
      </p>
      <p className="text-gray-600">
        Miasto:{" "}
        {participant.city && participant.province ? (
          <strong>
            {participant?.city}, {participant?.province}
          </strong>
        ) : (
          <strong>Brak informacji</strong>
        )}
      </p>
      <p className="text-gray-600">
        Ulica:{" "}
        {participant.street &&
        participant.house_number &&
        participant.postcode ? (
          <strong className="text-gray-800">
            {participant?.street}, {participant?.house_number},{" "}
            {participant?.postcode}
          </strong>
        ) : (
          <strong>Brak informacji</strong>
        )}
      </p>
    </li>
  );
};
