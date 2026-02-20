"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Lado Izquierdo: Visual */}
      <div className="hidden md:flex flex-col justify-between bg-[#042834] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-teal-400">CRG Solutions</h2>
        </div>
        <div className="relative z-10 max-w-lg">
          <h1 className="text-5xl font-bold leading-tight mb-6">Alimenta tu cuerpo, programa tu mente.</h1>
          <p className="text-slate-300 text-lg">Únete a la plataforma de nutrición más avanzada del mercado.</p>
        </div>
        <div className="relative z-10 text-sm text-slate-500">© 2026 CRG Solutions</div>
      </div>

      {/* Lado Derecho: Formulario */}
      <div className="flex flex-col justify-center p-8 md:p-24 bg-white relative">
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors">
          <ArrowLeft size={20} /> Volver
        </Link>

        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"}</h2>
            <p className="text-slate-500">
              {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-teal-600 font-bold hover:underline">
                {isLogin ? "Regístrate gratis" : "Inicia sesión"}
              </button>
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Nombre Completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-slate-400" size={20} />
                  <input type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="Hector Garcia" />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Correo Electrónico</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-400" size={20} />
                <input type="email" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="hola@crgsolutions.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-slate-400" size={20} />
                <input type="password" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="••••••••" />
              </div>
            </div>

            <Link href="/dashboard" className="block w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg shadow-teal-600/30 text-center transition-all hover:scale-[1.02]">
              {isLogin ? "Ingresar al Panel" : "Comenzar mi Plan"}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}