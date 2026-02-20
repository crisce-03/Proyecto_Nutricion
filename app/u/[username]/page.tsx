import React from "react";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { UserPlus, Trophy, Flame, Calendar, ArrowLeft } from "lucide-react";

export default function PublicProfilePage({ params }: { params: { username: string } }) {
  // En app real, usarías params.username para buscar datos
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Nav simple */}
      <nav className="bg-white border-b border-slate-200 p-4">
          <div className="container mx-auto flex justify-between items-center">
              <Link href="/" className="font-bold text-xl text-teal-700">NutriLife</Link>
              <Link href="/auth" className="text-sm font-bold text-slate-600 hover:text-teal-600">Iniciar Sesión</Link>
          </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/dashboard/perfil" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 mb-8 transition-colors">
              <ArrowLeft size={18} /> Volver a mi Dashboard
          </Link>

          {/* Profile Header */}
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl relative overflow-hidden mb-8">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-teal-500 to-emerald-600"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-end gap-6 mt-16">
                  <div className="h-32 w-32 rounded-full border-4 border-white bg-slate-200 shadow-lg flex items-center justify-center text-4xl font-bold text-slate-500">
                      HG
                  </div>
                  <div className="flex-1 mb-2 text-center md:text-left">
                      <h1 className="text-3xl font-bold text-slate-900">Hector Garcia</h1>
                      <p className="text-slate-500">Miembro desde 2026 • Entusiasta Fitness</p>
                  </div>
                  <div className="mb-2">
                      <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg">
                          <UserPlus size={18} /> Seguir
                      </button>
                  </div>
              </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                  <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Flame size={24} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">14</div>
                  <div className="text-sm text-slate-500">Racha de Días</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy size={24} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">5</div>
                  <div className="text-sm text-slate-500">Retos Completados</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar size={24} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">42</div>
                  <div className="text-sm text-slate-500">Entrenamientos</div>
              </div>
          </div>

          {/* Actividad Reciente */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Actividad Reciente</h2>
          <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4 items-center">
                      <div className="h-16 w-24 bg-slate-200 rounded-xl bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1543362906-ac1b452601e0?auto=format&fit=crop&q=80&w=200')`}}></div>
                      <div>
                          <h3 className="font-bold text-slate-900">Completó el reto "Sin Azúcar"</h3>
                          <p className="text-sm text-slate-500">Hace 2 días • Nutrición</p>
                      </div>
                  </div>
              ))}
          </div>

      </main>
      <Footer theme="light" />
    </div>
  );
}