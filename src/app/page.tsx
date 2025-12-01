import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { TbLayoutNavbarFilled } from "react-icons/tb";
import { GiBarefoot } from "react-icons/gi";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h3> Prueba de  <GiHamburgerMenu/> e icono de cerrar <IoMdClose /> </h3>
        <button>
          <Link href="/navbar">
            <TbLayoutNavbarFilled size={32} />
          </Link>

          <Link href="/privacidadTerminos">
            <GiBarefoot size={32} />
          </Link>
        </button>
      </main>
    </div>
  );
}