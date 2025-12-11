'use client';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function CrearCuentaPage() {
  const router = useRouter();

  const handleSubmit = () => {
    // Aquí iría la lógica de Firebase para crear cuenta
    router.push('/verificación');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Crear Cuenta</h2>

        <input
          type="text"
          placeholder="Nombre"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Apellido"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Teléfono (opcional)"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
        >
          Continuar →
        </button>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2">
            <FaGoogle /> Google
          </button>
          <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center gap-2">
            <FaFacebook /> Facebook
          </button>
        </div>

        <div className="text-center text-sm text-gray-400">
          ¿Ya tienes una cuenta?{' '}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => router.push('/login')}
          >
            Inicia Sesión
          </span>
        </div>
      </div>
    </div>
  );
}