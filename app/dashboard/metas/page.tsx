import React from "react";
import Link from "next/link";
import { CheckCircle2, Target, Droplets, Moon, Scale, Plus, Trophy, TrendingUp, Calendar } from "lucide-react";

export default function GoalsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Mis Metas</h1>
            <p className="text-slate-500">Visualiza tu progreso y rompe tus propios récords.</p>
        </div>
        
        {/* BOTÓN CONECTADO AL HISTORIAL */}
        <Link href="/dashboard/metas/historial" className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors">
            <Calendar size={18} /> Ver Historial
        </Link>
      </div>

      {/* Tarjeta Principal Peso */}
      <div className="bg-[#042834] rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-teal-900/20">
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="flex items-center gap-2 text-teal-300 mb-6 font-bold tracking-wider uppercase text-xs bg-teal-500/10 w-fit px-3 py-1 rounded-full border border-teal-500/20">
                    <Target size={14}/> Objetivo Principal
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Bajar de Peso</h2>
                <p className="text-slate-300 mb-8 leading-relaxed max-w-sm">Estás a un <span className="text-white font-bold">65%</span> de llegar a tu meta saludable. ¡Sigue así, vas increíble!</p>
                
                <div className="flex items-end gap-3 mb-4">
                    <span className="text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">78.5</span>
                    <div className="flex flex-col mb-3">
                        <span className="text-xl font-bold text-slate-200">kg</span>
                        <span className="text-sm text-green-400 font-medium flex items-center gap-1 bg-green-500/10 px-1 rounded"><TrendingUp size={12} className="rotate-180"/> -0.5kg hoy</span>
                    </div>
                </div>

                <div className="relative w-full h-4 bg-slate-800 rounded-full overflow-hidden mb-4 border border-slate-700">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-300 w-[65%] rounded-full shadow-[0_0_20px_rgba(45,212,191,0.6)] animate-pulse"></div>
                </div>
                
                <div className="flex justify-between text-sm font-medium text-slate-400">
                    <span>Inicio: 85 kg</span>
                    <span className="text-teal-300">Meta: 75 kg</span>
                </div>
            </div>
            
            {/* Gráfico Barras */}
            <div className="h-full flex flex-col justify-end">
                <div className="h-64 w-full flex items-end justify-between gap-2 lg:gap-4 px-4 pb-4 border-b border-l border-slate-600/30 rounded-bl-xl bg-slate-800/20 backdrop-blur-sm">
                     {[40, 45, 30, 60, 55, 75, 65].map((val, i) => (
                        <div key={i} className="w-full bg-slate-600/30 rounded-t-lg hover:bg-teal-500/80 transition-all cursor-pointer relative" style={{height: `${val}%`}}></div>
                     ))}
                </div>
                <p className="text-center text-slate-500 text-xs mt-4">Actividad física últimos 7 días</p>
            </div>
         </div>
      </div>

      {/* Grid Metas Diarias (Botones Conectados) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-lg shadow-blue-100/50 flex flex-col items-center text-center">
            <div className="h-14 w-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-4"><Droplets size={28} /></div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">Hidratación</h3>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-6">Meta: 2,500 ml</p>
            <div className="text-4xl font-bold text-slate-900 mb-6">1,200 <span className="text-sm text-slate-400">ml</span></div>
            <Link href="/dashboard/metas/registrar" className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex justify-center items-center gap-2">
                <Plus size={18} strokeWidth={3}/> Agregar Vaso
            </Link>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-indigo-100 shadow-lg shadow-indigo-100/50 flex flex-col items-center text-center">
            <div className="h-14 w-14 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-4"><Moon size={28} /></div>
            <h3 className="font-bold text-slate-800 text-lg mb-1">Descanso</h3>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-6">Meta: 8 horas</p>
            <div className="text-4xl font-bold text-slate-900 mb-6">6h 30m</div>
            <Link href="/dashboard/metas/registrar" className="w-full py-3 bg-white border-2 border-indigo-100 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex justify-center">
                Editar Registro
            </Link>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-3xl border border-emerald-100 shadow-lg shadow-emerald-100/50 flex flex-col items-center text-center">
             <div className="h-14 w-14 bg-white text-emerald-500 rounded-2xl flex items-center justify-center mb-4"><CheckCircle2 size={28} /></div>
             <h3 className="font-bold text-emerald-900 text-lg mb-1">Hábitos</h3>
             <p className="text-emerald-600/70 text-xs font-medium uppercase tracking-wide mb-6">3 de 5 Completados</p>
             <ul className="text-left w-full space-y-3 mb-2">
                <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg"><CheckCircle2 size={12} className="text-emerald-500"/> <span className="text-sm font-medium line-through decoration-slate-400">Sin Azúcar</span></li>
                <li className="flex items-center gap-3 bg-white/60 p-2 rounded-lg"><CheckCircle2 size={12} className="text-emerald-500"/> <span className="text-sm font-medium line-through decoration-slate-400">5 Vegetales</span></li>
             </ul>
        </div>
      </div>
    </div>
  );
}