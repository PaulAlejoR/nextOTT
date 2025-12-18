import { categoriasData } from "@/data/categoriasData";
import Link from "next/link";

interface PageProps {
    // El nombre aquí debe coincidir con el nombre de la carpeta entre corchetes [categoria]
    params: Promise<{ categoria: string }>;
}

export default async function DetalleCategoriaPage( { params }: PageProps ) {
    const { categoria: slug } = await params;

    const categoriaEncontrada = categoriasData.find( (item) => item.slug === slug );

    if ( !categoriaEncontrada ) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-xl text-white mb-6">Categoría no encontrada</p>

                <Link href="/categorias" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-white">
                    Volver a Categorías
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Boton de volver */}
            <Link href="/categorias" className="text-gray-400 hover:text-white mb-6 inline-block">
                &larr; Volver a Categorías
            </Link>


            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to purple-500">
                    {categoriaEncontrada.name}
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                    {categoriaEncontrada.description}
                </p>

                {/* Aquí se cargarian las películas de la categoria que se de clic */}
                <div className="mt-10 p-4 border border-dashed border-gray-600 rounden-lg text-center text-gray-500">
                    Aqui se mostrarán las películas/series de {categoriaEncontrada.name}
                </div>

            </div>
        </div>
    );
}