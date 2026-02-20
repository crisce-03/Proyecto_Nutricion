"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Check, X, RefreshCw, Calendar, Loader2 } from "lucide-react";

export default function GeneratorPage() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleGenerate = () => {
    setLoading(true);
    // Simular proceso de IA
    setTimeout(() => {
      setLoading(false);
      setStep(3); // Ir a resultados
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-teal-100 text-teal-600 rounded-full mb-6">
            <Sparkles size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Chef Inteligente IA</h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
           Nuestro algoritmo analizará tus gustos, alergias y metas para crear el plan semanal perfecto en segundos.
        </p>
      </div>

      {/* Paso 1: Configuración */}
      {step === 1 && (
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl max-w-2xl mx-auto w-full">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Configura tu semana</h3>
            
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Objetivo de esta semana</label>
                    <div className="grid grid-cols-3 gap-4">
                        {["Perder Grasa", "Ganar Músculo", "Mantenimiento"].map((goal, i) => (
                            <button key={i} className={`py-3 px-4 rounded-xl border-2 font-medium text-sm transition-all ${i === 0 ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-100 text-slate-500 hover:border-slate-200'}`}>
                                {goal}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Días de preparación (Meal Prep)</label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer w-full hover:bg-slate-50">
                            <input type="radio" name="prep" defaultChecked className="text-teal-600 focus:ring-teal-500" />
                            <span className="text-slate-700 font-medium">Cocinar diario (30 min)</span>
                        </label>
                        <label className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl cursor-pointer w-full hover:bg-slate-50">
                            <input type="radio" name="prep" className="text-teal-600 focus:ring-teal-500" />
                            <span className="text-slate-700 font-medium">Solo fines de semana</span>
                        </label>
                    </div>
                </div>
                
                <div className="pt-4">
                    <button onClick={() => setStep(2)} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                        Siguiente <ArrowRight size={18}/>
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* Paso 2: Confirmación y Generación */}
      {step === 2 && !loading && (
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl max-w-2xl mx-auto w-full text-center">
             <h3 className="text-xl font-bold text-slate-900 mb-2">¿Listo para la magia?</h3>
             <p className="text-slate-500 mb-8">Usaremos tus preferencias de perfil (Sin Gluten, Sin Lácteos) para filtrar las recetas.</p>
             
             <div className="flex gap-4 justify-center">
                <button onClick={() => setStep(1)} className="px-6 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl transition-colors">
                    Atrás
                </button>
                <button onClick={handleGenerate} className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/30 hover:scale-105 transition-transform flex items-center gap-2">
                    <Sparkles size={18}/> Generar Plan Ahora
                </button>
             </div>
          </div>
      )}

      {/* Estado de Carga (Loading) */}
      {loading && (
          <div className="text-center py-12">
              <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                  <Sparkles className="absolute inset-0 m-auto text-teal-500 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Diseñando tu menú...</h3>
              <p className="text-slate-500">Calculando macros y listas de compra.</p>
          </div>
      )}

      {/* Paso 3: Resultados */}
      {step === 3 && (
          <div className="bg-white p-8 rounded-[2rem] border-2 border-teal-500/20 shadow-2xl max-w-3xl mx-auto w-full relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
             
             <div className="text-center mb-8">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Check size={32} />
                 </div>
                 <h2 className="text-3xl font-bold text-slate-900">¡Tu plan está listo!</h2>
                 <p className="text-slate-500">Hemos generado 21 comidas para los próximos 7 días.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                     <div className="p-2 bg-white rounded-lg shadow-sm"><RefreshCw size={18} className="text-teal-600"/></div>
                     <div className="text-left">
                         <div className="text-sm font-bold text-slate-800">Variedad Alta</div>
                         <div className="text-xs text-slate-500">14 recetas nuevas</div>
                     </div>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
                     <div className="p-2 bg-white rounded-lg shadow-sm"><Calendar size={18} className="text-teal-600"/></div>
                     <div className="text-left">
                         <div className="text-sm font-bold text-slate-800">Sincronizado</div>
                         <div className="text-xs text-slate-500">Añadido al calendario</div>
                     </div>
                 </div>
             </div>

             <div className="flex gap-4">
                 <Link href="/dashboard/calendario" className="flex-1 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                     Ver Calendario
                 </Link>
                 <Link href="/dashboard/lista-compras" className="flex-1 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-teal-500 hover:text-teal-600 transition-colors flex items-center justify-center gap-2">
                     Ver Lista de Compras
                 </Link>
             </div>
          </div>
      )}

    </div>
  );
}