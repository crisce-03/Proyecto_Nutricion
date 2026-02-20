import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full">
        {/* Ilustración CSS Pura (Plato Vacío) */}
        <div className="w-48 h-48 bg-white rounded-full mx-auto mb-8 shadow-inner border-4 border-slate-100 flex items-center justify-center relative">
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center">
                <span className="text-6xl">🥦?</span>
            </div>
            {/* Tenedor y Cuchillo decorativos */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-4 h-32 bg-slate-300 rounded-full"></div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-4 h-32 bg-slate-300 rounded-full"></div>
        </div>

        <h1 className="text-8xl font-black text-teal-900/10 mb-2">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">¡Ups! Esta página no está en el menú.</h2>
        <p className="text-slate-500 mb-8">Parece que el enlace que buscas caducó o nunca existió. Regresemos a comer algo saludable.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <ArrowLeft size={18} /> Volver
            </Link>
            <Link href="/dashboard" className="px-6 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20">
                <Home size={18} /> Ir al Dashboard
            </Link>
        </div>
      </div>
    </div>
  );
}