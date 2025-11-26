/* Los componentes que usan hooks deben tener, este archivo se puede poner en una carpeta components */
'use client'

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {

    const [isClick, setisClick] = useState(false);

    /*const toggleNavbar = () => {
        setisClick(!isClick);
    }*/

    return (
        <div>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
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
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white 
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setisClick(!isClick)}
                        >
                            {isClick ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                </div>

                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

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
                )}

            </nav>
        </div>
    );
}

export default Navbar