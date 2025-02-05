"use client";

import { Calendar, Library, LogOut, User } from "lucide-react";
import { FC, ReactNode } from "react";

interface OptionsProps {
  setIsRecommendations: (value: boolean) => void;
}

export const Options: FC<OptionsProps> = ({ setIsRecommendations }) => {
  const options = [
    { text: "Moje dane", icon: <User /> },
    { text: "Rezerwacje", icon: <Calendar /> },
    {
      text: "Dedykowane oferty",
      icon: <Library />,
      onClick: () => setIsRecommendations(true),
    },
    { text: "Wyloguj się", icon: <LogOut /> },
  ];

  return (
    <div className="flex flex-col w-[20vw]">
      <h1 className="text-primary text-4xl font-semibold mb-12">
        Moje konto
      </h1>
      <nav>
        <ul className="flex flex-col gap-8">
          {options.map(({ text, onClick, icon }) => {
            return (
              <OptionItem
                key={text}
                onClick={onClick}
                text={text}
                icon={icon}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

type OptiopnItemProps = {
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
  text: string;
  icon: ReactNode;
};

const OptionItem: FC<OptiopnItemProps> = ({ onClick, text, icon }) => {
  return (
    <li className="flex items-center gap-2 p-4 hover:bg-option_background text-option hover:text-option_hover group">
      {icon}
      <p
        onClick={onClick}
        className="font-semibold text-xl pl-4 pr-8 group-hover:text-option_hover"
      >
        {text}
      </p>
    </li>
  );
};
