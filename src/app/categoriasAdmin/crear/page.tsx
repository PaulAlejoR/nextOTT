'use client';

import { IoArrowBackOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import Link from 'next/link';
import { useState } from 'react';

export default function CrearCategoriaPage() {
  const [color, setColor] = useState('#a855f7');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/categoriasAdmin"
          className="rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-white transition-colors hover:bg-zinc-700"
        >
          <IoArrowBackOutline className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">Nueva Categoría</h1>
          <p className="mt-1 text-zinc-400">Crea una nueva categoría de contenido</p>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">Información de la Categoría</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Nombre *</label>
            <input
              type="text"
              placeholder="Ej: Ciencia y Tecnología"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Slug *</label>
            <input
              type="text"
              placeholder="ciencia-tecnologia"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
            <p className="mt-1 text-xs text-zinc-500">Se generará automáticamente si se deja vacío</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Descripción</label>
            <textarea
              rows={3}
              placeholder="Descripción de la categoría..."
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-12 w-24 rounded border border-zinc-700 bg-zinc-800"
                />
                <span className="font-mono text-white">{color}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Orden</label>
              <input
                type="number"
                defaultValue="0"
                placeholder="0"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
            <input
              type="checkbox"
              id="featured"
              className="h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-purple-600 focus:ring-2 focus:ring-purple-500/20"
            />
            <label htmlFor="featured" className="text-sm text-white">
              Destacar categoría en la página principal
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Link
          href="/admin/contenido/categorias"
          className="rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-2 font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Cancelar
        </Link>
        <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-purple-500">
          <FiPlus className="h-5 w-5" />
          Crear Categoría
        </button>
      </div>
    </div>
  );
}