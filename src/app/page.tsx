import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { TbLayoutNavbarFilled } from "react-icons/tb";
import { GiBarefoot } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BiCategoryAlt } from "react-icons/bi";
import { FaKey } from 'react-icons/fa';
import { MdViewComfy } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";



import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h3> Prueba de  <GiHamburgerMenu/> e icono de cerrar <IoMdClose /> </h3>
        <nav>
          <div className="flex space-x-5 container mx-auto flex justify-between items-center">
            <button>
              <Link href="/navbar">
                <TbLayoutNavbarFilled size={32} />
              </Link>
            </button>

            <button>
              <Link href="/privacidadTerminos">
                <GiBarefoot size={32} />
              </Link>
            </button>

            <button>
              <Link href="/login">
                <MdOutlineLogin size={32} />
              </Link>
            </button>

            <button>
              <Link href="/crearCuenta">
                <RiAccountCircleLine size={32} />
              </Link>
            </button>

            <button>
              <Link href="/verificacion">
                <VscVerifiedFilled size={32} />
              </Link>
            </button>

            <button>
              <Link href="/categorias">
                <BiCategoryAlt size={32} />
              </Link>
            </button>

            <button>
              <Link href="/newPassword">
                <FaKey size={32} />
              </Link>
            </button>

            <button>
              <Link href="/vista">
                <MdViewComfy size={32} />
              </Link>
            </button>

            <button>
              <Link href="/categoriasAdmin">
                <GrUserAdmin size={32} />
                <MdOutlineCategory size={32} />
              </Link>
            </button>

          </div>
        </nav>
      </main>
    </div>
  );
}