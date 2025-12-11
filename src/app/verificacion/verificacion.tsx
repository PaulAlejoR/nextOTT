'use client';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

export default function VerificacionPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg text-center">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto" />
        <h2 className="text-2xl font-bold">Email Verificado</h2>
        <p className="text-sm text-gray-300">
          Tu correo electrónico ha sido verificado exitosamente.
        </p>
        <button
          onClick={() => router.push('/login')}
          className="mt-4 bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded font-semibold"
        >
          Ir a Inicio de Sesión
        </button>
      </div>
    </div>
  );
}