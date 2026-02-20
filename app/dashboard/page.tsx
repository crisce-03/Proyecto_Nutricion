"use client"; // Necesario para que los botones funcionen

import React, { useState } from "react";
import Link from "next/link";
import { 
  TrendingDown, Flame, Apple, ArrowRight, 
  Dumbbell, Droplets, Plus, Calendar, 
  CheckCircle2, ShoppingCart, Clock, ChevronRight 
} from "lucide-react";

export default function DashboardOverview() {
  // Estado para la Hidratación
  const [waterLevel, setWaterLevel] = useState(1200);
  const waterGoal = 2500;
  
  // Calcular porcentaje para la animación de la ola (tope 100%)
  const waterPercentage = Math.min((waterLevel / waterGoal) * 100, 100);

  const addWater = (amount: number) => {
    setWaterLevel(prev => Math.min(prev + amount, waterGoal + 500)); // Permite pasarse un poco
  };

  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500 pb-12">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Hola, Hector 👋</h1>
          <p className="text-slate-500">Martes, 18 de Febrero • <span className="text-teal-600 font-bold">Día 14 de tu plan</span></p>
        </div>
        <div className="flex gap-2">
            <Link href="/dashboard/nutricion/generar" className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl text-sm hover:bg-slate-50 transition-colors">
                Generar Menú
            </Link>
            <Link href="/dashboard/metas/registrar" className="px-4 py-2 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                Registrar Progreso
            </Link>
        </div>
      </div>

      {/* --- STATS PRINCIPALES (MACROS & PESO) --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Card Peso (Principal) */}
        <div className="md:col-span-2 bg-[#042834] p-6 rounded-[2rem] text-white shadow-xl shadow-teal-900/20 relative overflow-hidden group">
             <div className="relative z-10 flex justify-between h-full flex-col">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 text-teal-300 mb-2 font-medium bg-white/10 w-fit px-3 py-1 rounded-full text-xs">
                        <TrendingDown size={14} /> Peso Corporal
                    </div>
                    <span className="text-green-400 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">-0.5kg esta semana</span>
                </div>
                <div>
                    <div className="flex items-end gap-2">
                        <div className="text-5xl font-bold mb-1">78.5</div>
                        <div className="text-lg text-slate-400 mb-2 font-medium">kg</div>
                    </div>
                    <div className="w-full bg-slate-700/50 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-teal-400 h-full w-[65%] shadow-[0_0_10px_currentColor]"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-400">
                        <span>Inicio: 85kg</span>
                        <span className="text-teal-300 font-bold">Meta: 75kg</span>
                    </div>
                </div>
             </div>
             <div className="absolute -right-10 -bottom-10 h-48 w-48 bg-teal-500/20 rounded-full blur-3xl group-hover:bg-teal-500/30 transition-all" />
        </div>

        {/* Card Calorías */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-orange-500 mb-2 font-bold text-sm"><Flame size={18} /> Calorías</div>
            <div className="relative flex items-center justify-center py-2">
                <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
                    <circle cx="48" cy="48" r="40" stroke="#f97316" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * 0.48} strokeLinecap="round" />
                </svg>
                <div className="absolute text-center">
                    <span className="text-xl font-bold text-slate-800 block">1,250</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Restantes</span>
                </div>
            </div>
            <div className="text-center text-xs text-slate-500">Meta: 2,400 kcal</div>
        </div>

        {/* Card Macros */}
        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-green-500 mb-2 font-bold text-sm"><Apple size={18} /> Macros</div>
            <div className="space-y-3 mt-2">
                <div>
                    <div className="flex justify-between text-xs mb-1 font-bold text-slate-600"><span>Proteína</span> <span>120g / 180g</span></div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="bg-blue-500 h-full w-[60%]"></div></div>
                </div>
                <div>
                    <div className="flex justify-between text-xs mb-1 font-bold text-slate-600"><span>Carbos</span> <span>200g / 250g</span></div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="bg-orange-500 h-full w-[80%]"></div></div>
                </div>
                <div>
                    <div className="flex justify-between text-xs mb-1 font-bold text-slate-600"><span>Grasas</span> <span>40g / 60g</span></div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="bg-yellow-500 h-full w-[65%]"></div></div>
                </div>
            </div>
        </div>
      </div>

      {/* --- GRID CENTRAL (AGENDA Y ACCIONES) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMNA IZQUIERDA: AGENDA DEL DÍA (Timeline) */}
          <div className="lg:col-span-2 space-y-6">
              
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                          <Calendar className="text-teal-600" size={20}/> Agenda de Hoy
                      </h3>
                      <Link href="/dashboard/calendario" className="text-sm font-bold text-teal-600 hover:underline">Ver Calendario</Link>
                  </div>

                  <div className="space-y-0 relative">
                      {/* Línea vertical */}
                      <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-100"></div>

                      {/* Evento Pasado */}
                      <div className="flex gap-4 relative group">
                          <div className="w-14 text-right text-xs font-bold text-slate-400 pt-1">08:00 AM</div>
                          <div className="w-4 h-4 rounded-full bg-slate-200 border-4 border-white shadow-sm z-10 mt-1"></div>
                          <div className="flex-1 bg-slate-50 p-3 rounded-xl mb-4 opacity-60">
                              <div className="flex justify-between">
                                  <span className="font-bold text-slate-600 line-through">Desayuno: Avena y Frutas</span>
                                  <CheckCircle2 size={16} className="text-slate-400"/>
                              </div>
                          </div>
                      </div>

                      {/* Evento Actual/Próximo (Destacado) */}
                      <div className="flex gap-4 relative">
                          <div className="w-14 text-right text-xs font-bold text-teal-600 pt-3">02:00 PM</div>
                          <div className="w-4 h-4 rounded-full bg-teal-500 border-4 border-teal-100 shadow-sm z-10 mt-3 animate-pulse"></div>
                          <div className="flex-1 bg-gradient-to-r from-[#042834] to-[#0a455a] text-white p-5 rounded-2xl shadow-lg mb-4 relative overflow-hidden">
                              <div className="relative z-10">
                                  <div className="flex justify-between items-start mb-2">
                                      <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded text-teal-100 uppercase tracking-wider">Próxima Comida</span>
                                      <span className="text-xs font-bold text-slate-300 flex items-center gap-1"><Clock size={12}/> En 30 min</span>
                                  </div>
                                  <h4 className="font-bold text-lg mb-1">Bowl de Pollo y Quinoa</h4>
                                  <p className="text-slate-300 text-sm mb-4">450 kcal • Alto en Proteína</p>
                                  <Link href="/dashboard/nutricion/1" className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-teal-400 transition-colors">
                                      Ver Receta <ArrowRight size={14}/>
                                  </Link>
                              </div>
                              <div className="absolute right-0 bottom-0 opacity-10">
                                  <Apple size={120} />
                              </div>
                          </div>
                      </div>

                      {/* Evento Futuro */}
                      <div className="flex gap-4 relative">
                          <div className="w-14 text-right text-xs font-bold text-slate-500 pt-1">06:00 PM</div>
                          <div className="w-4 h-4 rounded-full bg-slate-100 border-4 border-white shadow-sm z-10 mt-1"></div>
                          <Link href="/dashboard/entrenamiento" className="flex-1 bg-white border border-slate-100 p-4 rounded-xl mb-4 hover:border-teal-200 transition-colors flex justify-between items-center group">
                              <div className="flex items-center gap-3">
                                  <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Dumbbell size={18}/></div>
                                  <div>
                                      <span className="font-bold text-slate-800 block group-hover:text-teal-700 transition-colors">Entrenamiento: Pierna</span>
                                      <span className="text-xs text-slate-500">45 min • Alta Intensidad</span>
                                  </div>
                              </div>
                              <ChevronRight size={18} className="text-slate-300 group-hover:text-teal-500"/>
                          </Link>
                      </div>
                  </div>
              </div>

              {/* Banner Entrenamiento Recomendado */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                  <div className="relative p-8 text-white flex justify-between items-center">
                      <div>
                          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Para hoy</span>
                          <h3 className="text-2xl font-bold mb-1">Reto Cardio HIIT</h3>
                          <p className="text-slate-300 text-sm">Quema 300 kcal en 20 minutos.</p>
                      </div>
                      <Link href="/dashboard/entrenamiento/1/play" className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-teal-400 hover:text-white transition-all shadow-lg">
                          <ArrowRight size={20} />
                      </Link>
                  </div>
              </div>

          </div>

          {/* COLUMNA DERECHA: WIDGETS RÁPIDOS */}
          <div className="space-y-6">
              
              {/* Tracker Agua Rápido (AHORA FUNCIONAL) */}
              <div className="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100 text-center">
                  <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-blue-900 flex items-center gap-2"><Droplets size={18} className="text-blue-500"/> Hidratación</h4>
                      <span className="text-xs font-bold bg-white px-2 py-1 rounded text-blue-500 border border-blue-100">{waterLevel}ml / {waterGoal}ml</span>
                  </div>
                  
                  {/* Gráfico de Ola Dinámico */}
                  <div className="h-32 w-full bg-white rounded-2xl border border-blue-100 relative overflow-hidden flex items-end justify-center mb-4 group cursor-pointer hover:border-blue-300 transition-colors">
                      <div 
                        className="absolute bottom-0 w-full bg-blue-400 opacity-20 transition-all duration-700 ease-in-out" 
                        style={{ height: `${waterPercentage}%` }}
                      ></div>
                      <div 
                        className="absolute bottom-0 w-full bg-blue-500 opacity-20 animate-pulse transition-all duration-1000 ease-in-out delay-75"
                        style={{ height: `${Math.max(0, waterPercentage - 5)}%` }}
                      ></div>
                      
                      <span className="relative z-10 text-3xl font-bold text-blue-600 mb-8 drop-shadow-sm">
                        {Math.round(waterPercentage)}%
                      </span>
                  </div>

                  <div className="flex gap-2">
                      <button 
                        onClick={() => addWater(250)}
                        className="flex-1 py-2 bg-white border border-blue-200 rounded-xl text-blue-600 font-bold text-xs hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all active:scale-95"
                      >
                        +250ml
                      </button>
                      <button 
                        onClick={() => addWater(500)}
                        className="flex-1 py-2 bg-white border border-blue-200 rounded-xl text-blue-600 font-bold text-xs hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all active:scale-95"
                      >
                        +500ml
                      </button>
                  </div>
              </div>

              {/* Lista de Compras Widget */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-slate-800 flex items-center gap-2"><ShoppingCart size={18} className="text-teal-600"/> Lista Compra</h4>
                      <Link href="/dashboard/lista-compras" className="p-1 bg-slate-50 rounded-lg hover:bg-teal-50 text-slate-400 hover:text-teal-600"><Plus size={16}/></Link>
                  </div>
                  <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                          <div className="h-2 w-2 rounded-full bg-red-400"></div>
                          <span className="text-sm font-medium text-slate-700 flex-1">Aceite de Oliva</span>
                          <span className="text-xs text-slate-400 font-bold">Agotado</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                          <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                          <span className="text-sm font-medium text-slate-700 flex-1">Huevos</span>
                          <span className="text-xs text-slate-400 font-bold">Quedan 2</span>
                      </div>
                  </div>
                  <Link href="/dashboard/lista-compras" className="block text-center mt-4 text-xs font-bold text-teal-600 hover:underline">Ver lista completa (5 items)</Link>
              </div>

              {/* Widget Comunidad */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-[2rem] text-white shadow-lg relative overflow-hidden">
                  <div className="relative z-10">
                      <h4 className="font-bold text-lg mb-1">Comunidad</h4>
                      <p className="text-indigo-100 text-xs mb-4">¡Estás en el top 10% esta semana!</p>
                      <div className="flex items-center gap-2 mb-4">
                          <div className="flex -space-x-2">
                              {[1,2,3].map(i => <div key={i} className="h-8 w-8 rounded-full border-2 border-indigo-600 bg-slate-200 bg-[url('https://i.pravatar.cc/150')] bg-cover"></div>)}
                          </div>
                          <span className="text-xs font-bold">+12 amigos activos</span>
                      </div>
                      <Link href="/dashboard/comunidad" className="block w-full py-2 bg-white/20 backdrop-blur border border-white/20 rounded-xl text-center text-sm font-bold hover:bg-white hover:text-indigo-600 transition-all">
                          Ver Feed
                      </Link>
                  </div>
              </div>

          </div>
      </div>
    </div>
  );
}