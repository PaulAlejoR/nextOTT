'use client';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Bienvenido</h2>
        <p className="text-center text-sm">Inicia sesión en tu cuenta</p>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />

        <div className="text-right text-sm text-blue-400 cursor-pointer hover:underline">
          ¿Olvidaste tu contraseña?
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">
          Iniciar Sesión
        </button>

        <div className="text-center text-sm text-gray-400">o continúa con</div>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2">
            <FaGoogle /> Google
          </button>
          <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center gap-2">
            <FaFacebook /> Facebook
          </button>
        </div>

        <div className="text-center text-sm text-gray-400">
          ¿No tienes una cuenta?{' '}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => router.push('/crearCuenta')}
          >
            Regístrate
          </span>
        </div>
      </div>
    </div>
  );
}