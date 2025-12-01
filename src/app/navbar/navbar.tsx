/* Los componentes que usan hooks deben tener, este archivo se puede poner en una carpeta components */
'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import MenuIcon from '../../../public/menu.svg'
import CloseIcon from '../../../public/crossIconCancel.svg'

const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <Link href="/">Logo</Link>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-4 flex item-center space-x-4">
                            
                            <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Inicio
                            </Link>

                            <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Películas
                            </Link>

                            <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Series
                            </Link>

                            <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Deportes
                            </Link>

                            <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                TV en directo
                            </Link>

                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={toggleNavbar} >
                            {isOpen ? (

                                <GiHamburgerMenu size={32} color="white" />
                            ) : (
                                

                                <IoMdClose size={32} color="white" />
                            )}
                        </button>
                    </div>

                </div>

                <nav>
                    {isOpen && (
                        <div className="md:hidden">
                            <Link href="/" className="block nav-item">
                                Inicio
                            </Link>

                            <Link href="/" className="block nav-item">
                                Películas
                            </Link>

                            <Link href="/" className="block nav-item">
                                Series
                            </Link>

                            <Link href="/" className="block nav-item">
                                Deportes
                            </Link>

                            <Link href="/" className="block nav-item">
                                TV en directo
                            </Link>
                        </div>
                    )}
                </nav>

            </nav>
        </div>
    );
}

export default Navbar