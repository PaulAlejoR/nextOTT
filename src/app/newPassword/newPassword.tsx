'use client';
import { FaKey } from 'react-icons/fa';

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        
        {/* Icono */}
        <div className="flex justify-center">
          <FaKey className="text-yellow-400 text-5xl" />
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-center">Nueva Contraseña</h2>
        <p className="text-center text-sm text-gray-400">
          Ingresa tu nueva contraseña
        </p>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Nueva contraseña"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Botón */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
        >
          Cambiar Contraseña
        </button>
      </div>
    </div>
  );
}