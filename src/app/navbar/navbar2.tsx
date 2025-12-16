'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-black text-white relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Contenedor Principal: Usa justify-between para empujar cosas a los extremos */}
                <div className="flex items-center justify-between h-16">

                    {/* --- IZQUIERDA: Botón Menú (Móvil) y Logo --- */}
                    <div className="flex items-center gap-4">
                        {/* Botón Hamburguesa: Visible solo en móvil (md:hidden) */}
                        <div className="md:hidden">
                            <button onClick={toggleNavbar} className="text-white focus:outline-none">
                                {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
                            </button>
                        </div>

                        {/* Logo: Siempre visible */}
                        <div className="shrink-0 font-bold text-xl">
                            <Link href="/">
                                <Image src="/icons_navbar/anesma-logo.jpg" alt="Logo" width={65} height={65}  />
                            </Link>
                        </div>

                        {/* --- CENTRO: Enlaces de Navegación (Desktop) --- */}
                        {/* Hidden en móvil, Flex en desktop (md:flex) */}
                        <div className="hidden md:flex ml-8 space-x-4">
                            <Link href="/" className="hover:bg-white hover:text-black rounded-lg p-2 transition">Inicio</Link>
                            <Link href="/" className="hover:bg-white hover:text-black rounded-lg p-2 transition">Películas</Link>
                            <Link href="/" className="hover:bg-white hover:text-black rounded-lg p-2 transition">Series</Link>
                            <Link href="/" className="hover:bg-white hover:text-black rounded-lg p-2 transition">Deportes</Link>
                            <Link href="/" className="hover:bg-white hover:text-black rounded-lg p-2 transition">En vivo</Link>
                        </div>
                    </div>

                    {/* --- DERECHA: Iconos --- */}
                    {/* Este div SIEMPRE es visible (flex), no tiene 'hidden' */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        
                        {/* 1. Lupa: Siempre visible */}
                        <Link href="/" className="hover:bg-white hover:text-black rounded-full p-2 transition">
                            <AiOutlineSearch size={24} />
                        </Link>

                        {/* 2. Lista/Bookmark: EL TRUCO ESTÁ AQUÍ */}
                        {/* 'hidden': Oculto en móviles extra pequeños */}
                        {/* 'sm:block' o 'md:block': Aparece cuando la pantalla crece */}
                        <Link href="/" className="hidden sm:block hover:bg-white hover:text-black rounded-full p-2 transition">
                            <FaRegBookmark size={20} />
                        </Link>

                        {/* 3. Perfil: Siempre visible */}
                        <Link href="/login" className="hover:bg-white hover:text-black rounded-full p-2 transition">
                            <CgProfile size={24} />
                        </Link>
                    </div>

                </div>
            </div>

            {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
            {/* Solo se muestra si isOpen es true */}
            {isOpen && (
                <div className="md:hidden bg-zinc-900 px-2 pt-2 pb-3 space-y-1 sm:px-3 absolute w-full left-0 top-16 border-t border-zinc-700">
                    <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-700">Inicio</Link>
                    <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-700">Películas</Link>
                    <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-700">Series</Link>
                    <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-700">Deportes</Link>
                    {/* Agregamos la opción de 'Mi Lista' aquí dentro porque arriba la ocultamos en móvil */}
                    <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:bg-zinc-700">Mi Lista (Ver todo)</Link>
                </div>
            )}
        </nav>
        
    );
}

export default Navbar;