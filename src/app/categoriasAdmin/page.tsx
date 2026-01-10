'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiTrash2, FiEdit, FiPlus } from "react-icons/fi";
import { FaRegFolderOpen } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";


export default function CategoriasPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: "Tecnología", slug: "tecnologia", videos: 234, description: "Videos sobre tecnología y desarrollo", color: "#4e6a97", type: "general" },
    { id: 2, name: "Educación", slug: "educacion", videos: 156, description: "Contenido educativo y tutoriales", color: "#2563eb", type: "general" },
    { id: 3, name: "Entretenimiento", slug: "entretenimiento", videos: 189, description: "Videos de entretenimiento", color: "#9333ea", type: "general" },
    { id: 4, name: "Gaming", slug: "gaming", videos: 145, description: "Juegos y gameplays", color: "#f97316", type: "general" },
    { id: 5, name: "Música", slug: "musica", videos: 98, description: "Videos musicales y conciertos", color: "#dc2626", type: "general" },
    { id: 6, name: "Deportes", slug: "deportes", videos: 78, description: "Contenido deportivo", color: "#16a34a", type: "general" },
    { id: 7, name: "Películas Originales", slug: "peliculas-originales", videos: 50, description: "Películas producidas por la plataforma", color: "#0ea5e9", type: "original" },
    { id: 8, name: "Series Originales", slug: "series-originales", videos: 70, description: "Series producidas por la plataforma", color: "#0ea5e9", type: "original" },
    { id: 9, name: "En Vivo", slug: "en-vivo", videos: 80, description: "Programas transmitidos en vivo", color: "#facc15", type: "live" },
    { id: 10, name: "Próximos Lanzamientos", slug: "proximos", videos: 65, description: "Series y películas próximas a estrenar", color: "#a855f7", type: "upcoming" },
    { id: 11, name: "Pokémon", slug: "pokemon", videos: 40, description: "Contenido licenciado de Pokémon", color: "#22c55e", type: "licensed" },
    { id: 12, name: "El Chavo del 8", slug: "chavo", videos: 35, description: "Contenido licenciado de El Chavo", color: "#ef4444", type: "licensed" },
    { id: 13, name: "Dragon Ball", slug: "dragon-ball", videos: 55, description: "Contenido licenciado de Dragon Ball", color: "#f59e0b", type: "licensed" },
  ];

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalVideos = categories.reduce((acc, cat) => acc + cat.videos, 0);
  const promedioPorCategoria = Math.round(totalVideos / categories.length);

  const stats = {
    totalCategorias: categories.length,
    totalVideos,
    contenidoOriginal: categories.filter(c => c.type === "original").reduce((acc, c) => acc + c.videos, 0),
    proximosLanzamientos: categories.filter(c => c.type === "upcoming").reduce((acc, c) => acc + c.videos, 0),
    enVivo: categories.filter(c => c.type === "live").reduce((acc, c) => acc + c.videos, 0),
    peliculasOriginales: categories.filter(c => c.slug === "peliculas-originales").reduce((acc, c) => acc + c.videos, 0),
    seriesOriginales: categories.filter(c => c.slug === "series-originales").reduce((acc, c) => acc + c.videos, 0),
    licencias: categories.filter(c => c.type === "licensed").reduce((acc, c) => acc + c.videos, 0),
    promedioPorCategoria,
  };

  return (
    <div className="space-y-6 p-6 bg-black min-h-screen">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Categorías</h1>
          <p className="mt-1 text-zinc-400">Gestor de categorías de contenido</p>
        </div>
        <Link
          href="/categoriasAdmin/crear"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-purple-500"
        >
          <FiPlus className="h-5 w-5" /> Nueva Categoría
        </Link>
      </div>

      {/* Stats dinámicas */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatBox label="Total Categorías" value={stats.totalCategorias} />
        <StatBox label="Videos Totales" value={stats.totalVideos} />
        <StatBox label="Contenido Original" value={stats.contenidoOriginal} />
        <StatBox label="Próximos Lanzamientos" value={stats.proximosLanzamientos} />
        <StatBox label="En Vivo" value={stats.enVivo} />
        <StatBox label="Películas Originales" value={stats.peliculasOriginales} />
        <StatBox label="Series Originales" value={stats.seriesOriginales} />
        <StatBox label="Licencias" value={stats.licencias} />
        <StatBox label="Promedio por Categoría" value={stats.promedioPorCategoria} />
      </div>

      {/* Search */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <div className="relative flex items-center">
          <BsSearch className="absolute left-3 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar categorías..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 py-2 pl-10 pr-4 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((category) => (
          <div key={category.id} className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:scale-[1.02] hover:border-zinc-600">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="rounded-lg p-3"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <FaRegFolderOpen className="h-6 w-6" style={{ color: category.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-white">{category.name}</h3>
                  <p className="text-sm text-zinc-400">{category.slug}</p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-400">{category.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-zinc-500">{category.videos} videos</span>
              <div className="flex gap-2">
                <Link
                  href={`/categoriasAdmin/${category.id}`}
                  className="rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white transition-colors hover:bg-zinc-700"
                >
                  <FiEdit className="h-4 w-4" />
                </Link>
                <button className="rounded-lg border border-red-700 bg-red-600/20 p-2 text-red-400 transition-colors hover:bg-red-600/30">
                  <FiTrash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- COMPONENTE SOLUCIONADO ---
function StatBox({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 flex items-center gap-4">
      <div className="rounded-full bg-purple-500/10 p-3">
        <IoStatsChart className="h-5 w-5 text-purple-500" />
      </div>
      <div>
        <p className="text-sm text-zinc-400">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
}