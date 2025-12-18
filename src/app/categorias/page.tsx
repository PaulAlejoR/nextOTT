import Link from "next/link";
import { categoriasData } from "@/data/categoriasData";

export default function CategoriasPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-white">Explorar categorias</h1>

            {/* Grid responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoriasData.map( (categoria) => (
                    <Link
                        key={categoria.id}
                        href={`/categorias/${categoria.slug}`}
                        className="group"
                    >
                        <div className="bg-zinc-800 rounded-xl overflow-hidden hover:bg-zinc-700 transition duration-300 border border-zinc-700 h-full flex flex-col">
                            {/* Se pueden poner imagenes cuando se tengan */}
                            <div className="h-32 bg-gradient-to-r from-blue-900 to-zinc-900 flex items-center justify-center">
                                <span className="text-3xl">Imagen</span>
                            </div>

                            <div className="p-6 flex-1">
                                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
                                    {categoria.name}
                                </h2>

                                <p className="text-gray-400 text-sm line-clamp-3">
                                    {categoria.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}