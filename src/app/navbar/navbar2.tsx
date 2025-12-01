'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export const navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    function getMenuClasses() {
        let menuClases = [];

        if (isOpen) {
                menuClases = [
                    "flex",
                    "absolute",
                    "top-[60px]",
                    "bg-grey-800",
                    "w-full",
                    "p-4",
                    "left-0",
                    "gap-10",
                    "flex-col",
                ];
            } else {
                menuClases = [
                    "hidden",
                    "md:flex",
                ];
            }

        return menuClases.join(" ");
    }

	return (
		<nav className="bg-black p-4 sm:p-4 md:flex md:justify-between md:items-center">
			<div className="container mx-auto flex justify-between items-center">
				<a href="" className="container mx-auto flex justify-between items-center">
					ANESMA TV
				</a>


				<div className={`${isOpen ? "flex" : "hidden"} flex-col md:flex-row`}>

					<Link href="/" className="mx-2">
						Inicio
					</Link>


				</div>

                <div className="md:hidden flex items-center">
                        <button onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                            
                        >
                            
                        </button>
                </div>
			</div>
		</nav>	
	);
}

export default navbar2;