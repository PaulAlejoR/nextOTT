'use client';

import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import Link from 'next/link';
import { useState } from 'react';

export default function EditarCategoriaPage({ params }: { params: { id: string } }) {
  const [color, setColor] = useState('#3b82f6');

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
          <h1 className="text-3xl font-bold text-white">Editar Categoría</h1>
          <p className="mt-1 text-zinc-400">ID: {params.id}</p>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h2 className="mb-6 text-xl font-bold text-white">Información de la Categoría</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Nombre</label>
            <input
              type="text"
              defaultValue="Tecnología"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Slug</label>
            <input
              type="text"
              defaultValue="tecnologia"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Descripción</label>
            <textarea
              rows={3}
              defaultValue="Videos sobre tecnología y desarrollo"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
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
              defaultValue="1"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
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
          <IoIosSave className="h-5 w-5" />
          Guardar Cambios
        </button>
      </div>
    </div>
  );
}