'use client';
import Link from "next/link";
import { FiExternalLink, FiChevronRight } from "react-icons/fi";

export default function TermsCondition() {
    const items = [
    {
      title: "Política de Privacidad",
      href: "/",
      external: true,
    },
    {
      title: "Términos de Uso",
      href: "/",
      external: true,
    },
    {
      title: "Gestionar cookies",
      href: "/",
      chevron: true,
    },
    {
      title: "Accesibilidad",
      href: "/",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center pt-20 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Privacidad y Términos</h1>

      <div className="w-full max-w-3xl bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg divide-y divide-gray-700">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center justify-between px-6 py-6 hover:bg-[#222] transition-colors"
          >
            <span className="text-lg font-medium">{item.title}</span>

            {item.external && <FiExternalLink size={22} />}
            {item.chevron && <FiChevronRight size={22} />}
          </Link>
        ))}
      </div>

      <p className="text-gray-400 text-sm mt-6">Device ID: 9761a1ee-f6b0-46a3-85a2-2d1d05536c14</p>
    </div>
  );
}
