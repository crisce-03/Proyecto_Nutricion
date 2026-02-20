import React from "react";
import Link from "next/link";
import { Play, Clock, Zap, Flame, BarChart, ArrowRight, Heart } from "lucide-react";

export default function TrainingPage() {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Tu Entrenamiento</h1>
          <p className="text-slate-500">Hoy es día de pierna. ¡Vamos a darle con todo!</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 text-orange-700 rounded-full text-sm font-bold shadow-sm">
            <Flame size={18} className="fill-orange-500 text-orange-500" /> 
            <span>Racha: 4 Días seguidos</span>
        </div>
      </div>

      {/* Hero: Rutina del Día */}
      <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/20 group cursor-pointer transform transition-all hover:shadow-teal-900/30">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#042834] via-[#042834]/60 to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white">
            <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded uppercase tracking-wider shadow-lg shadow-teal-500/40">Recomendado hoy</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded flex items-center gap-1"><Clock size={14}/> 45 Min</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-bold rounded flex items-center gap-1"><Zap size={14}/> Alta Intensidad</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Piernas de Acero <br/>& Cardio HIIT</h2>
            <p className="text-slate-300 max-w-xl mb-8 text-lg font-light leading-relaxed">Una rutina híbrida diseñada para quemar grasa mientras fortaleces el tren inferior. No necesitas equipo especial, solo tu peso corporal y ganas.</p>
            
            {/* Botón conectado al Player */}
            <Link href="/dashboard/entrenamiento/1/play" className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-teal-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                    <Play fill="currentColor" size={14} className="ml-0.5" /> 
                </div>
                Iniciar Rutina
            </Link>
        </div>
      </div>

      {/* Categorías / Otras Rutinas */}
      <div>
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900">Explorar Rutinas</h3>
            <button className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1 text-sm">
                Ver todo <ArrowRight size={16}/>
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { title: "Yoga Matutino", time: "20 min", level: "Básico", color: "text-blue-600 bg-blue-50", img: "https://images.unsplash.com/photo-1544367563-12123d8975bd?auto=format&fit=crop&q=80&w=500" },
                { title: "Upper Body Power", time: "60 min", level: "Avanzado", color: "text-red-600 bg-red-50", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=500" },
                { title: "Core & Abs", time: "15 min", level: "Intermedio", color: "text-purple-600 bg-purple-50", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=500" },
                { title: "Cardio Box", time: "30 min", level: "Intermedio", color: "text-yellow-600 bg-yellow-50", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=500" },
                { title: "Stretching Nocturno", time: "10 min", level: "Básico", color: "text-indigo-600 bg-indigo-50", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=500" },
                { title: "Full Body Dumbbell", time: "45 min", level: "Avanzado", color: "text-emerald-600 bg-emerald-50", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=500" },
            ].map((rutina, idx) => (
                // En un caso real, cada rutina tendría su ID. Aquí apuntamos todas al 1 por demo.
                <Link href={`/dashboard/entrenamiento/${idx + 1}/play`} key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 cursor-pointer group hover:-translate-y-1 block">
                    <div className="h-48 relative overflow-hidden">
                         <div className={`absolute inset-0 bg-slate-200 bg-cover bg-center group-hover:scale-110 transition-transform duration-700`} style={{backgroundImage: `url('${rutina.img}')`}} />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                         
                         <button className="absolute top-3 right-3 h-8 w-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors z-20">
                            <Heart size={16} />
                         </button>

                         <div className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide flex items-center gap-1 ${rutina.color}`}>
                            <BarChart size={12}/> {rutina.level}
                         </div>
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-lg text-slate-800 leading-tight group-hover:text-teal-600 transition-colors">{rutina.title}</h4>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500 mt-2 border-t border-slate-100 pt-3">
                            <span className="flex items-center gap-1 font-medium"><Clock size={14} className="text-teal-500"/> {rutina.time}</span>
                            <span className="flex items-center gap-1 font-medium text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all ml-auto">Comenzar <ArrowRight size={14}/></span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
}