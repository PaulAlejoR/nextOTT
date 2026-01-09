"use client";

import { useState } from "react";
import Image from "next/image";
import { FaP, FaPlay } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";
import { FiPlus } from "react-icons/fi";
import { BiSolidLike } from "react-icons/bi";
import { LuClapperboard } from "react-icons/lu";
import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";



export default function ContentView() {

    const [playState, setPlayState] = useState(0);
    // setear el estado y los estados que se van a usar son:
    // 0 - no visto (reproducir)
    // 1 - viendo (pausar)
    // 2 - mirar de nuevo (reproducir desde el inicio)

    const handlePlayClick = () => {
        if (playState === 0) setPlayState(1);
        else if (playState === 1) setPlayState(2);
        else setPlayState(0);
    };

  return (
    <div className="bg-black text-white min-h-screen">

    {/* Poster principal */}
    <div className="relative w-full h-[500px]">
        <Image
        src="/l4d2.png" // Cambiar la imagen
        alt="La Gran Muralla"
        layout="fill"
        objectFit="cover"
        className="opacity-80"
        />

        {/* Contenedor para el desvanecido */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-t from-black via-gray-900/70 to-transparent"></div>

        
        <div className="absolute bottom-10 left-10 space-y-4">
            
            {/* Sección para la imagen del titulo */}
            <div>
                <Image
                src="/l4d2-logo.png"
                alt="Titulo"
                width={200}
                height={100}
                />

                {/* Pequeño contenedor con la edad para ver la pelicula, duración y el año de estreno */}
                <div>
                    <span className="border border-white px-2 py-1 text-sm mr-2">13+</span>
                    <span className="mr-2">1h 44min</span>
                    <span>2023</span>
                </div>
            </div>


            <p className="max-w-lg text-gray-200">
                Descripción del contenido, puede ser una serie o pelicula original como una transmision en vivo.
            </p>


            {/* Botón principal según estado */}
            {playState === 0 && (
            <div className="flex space-x-4">
              <button
                onClick={handlePlayClick}
                className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 flex items-center"
              >
                <FaPlay className="mr-2" /> Reproducir
              </button>
              <button className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center">
                <FiPlus className="mr-2" /> Mi Lista
              </button>
              <button className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center">
                <BiSolidLike className="mr-2" /> Me gusta
              </button>
              <button className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center">
                <LuClapperboard className="mr-2" /> Tráiler
              </button>
            </div>
          )}

          {playState === 1 && (
            <>
              <button
                onClick={handlePlayClick}
                className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 flex items-center"
              >
                <FaPlay className="mr-2 text-xl" /> Continuar viendo
              </button>
              <div className="flex space-x-4 mt-4">
                <button className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center">
                  <FiPlus className="mr-2" /> Mi Lista
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center">
                  <BiSolidLike className="mr-2" /> Me gusta
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center">
                  <LuClapperboard className="mr-2" /> Tráiler
                </button>
              </div>
            </>
          )}

          {playState === 2 && (
            <>
              <button
                onClick={handlePlayClick}
                className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 flex items-center"
              >
                <VscDebugRestart className="mr-2 text-xl" /> Mirar de nuevo
              </button>
              <div className="flex space-x-4 mt-4">
                <button className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center">
                  <FiPlus className="mr-2" /> Mi Lista
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center">
                  <BiSolidLike className="mr-2" /> Me gusta
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center">
                  <LuClapperboard className="mr-2" /> Tráiler
                </button>
              </div>
            </>
          )}

        </div>
    </div>

    {/* Contenido recomendado */}
    <section className="px-10 py-8">
        <h2 className="text-2xl font-bold mb-4">Quizá también te guste</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"> 
        {[
            "steam.png",
            "menu-l4d2.png",
            "l4d2.png",
            "l4d2-logo.png",
            "steam.png",
            "menu-l4d2.png",
            "l4d2.png",
            "l4d2-logo.png",
            // Se agregan mas imagenes para los contenidos
        ].map((poster, idx) => (
            <div key={idx} className="relative w-full h-48">
            <Image
                src={`/recommended/${poster}`} // Cambiar la ruta a la carpeta con imagenes
                alt="Poster recomendado"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-105 transition-transform"
            />
            </div>
        ))}
        </div>
    </section>

    {/* Información */}
    <section className="px-10 py-8 border-t border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Información</h2>
        <ul className="space-y-2 text-gray-300">
        <li><span className="font-semibold">Clasificación:</span> 13+</li>
        <li><span className="font-semibold">Duración:</span> 1h 44min</li>
        <li><span className="font-semibold">Idiomas:</span> Inglés, Español (Latinoamérica)</li>
        <li><span className="font-semibold">Protagonistas:</span> Actor 1, Actor 2, Actor 3</li>
        <li><span className="font-semibold">Director:</span> Nombre Director</li>
        <li><span className="font-semibold">Guionistas:</span> Guinosta 1, Guionista 2, Guionista 3</li>
        <li><span className="font-semibold">Productores:</span> Productor 1, Productor 2, Productor 3</li>
        </ul>
    </section>
    </div>
  );
}
