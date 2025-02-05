import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-32">
      <div className="flex">
        <Link href="/">
          <Image src={Logo} alt="funlo logo" width={200} height={70} />
        </Link>
        <ul className="flex items-center gap-8 ml-16 text-nav">
          <li>Obozy</li>
          <li>Połkolonie</li>
          <li>Wycieczki szkolne</li>
          <li>Atrakcje</li>
          <li>Noclegi dla grup</li>
        </ul>
      </div>
      <button>Zaloguj sie</button>
    </nav>
  );
};
