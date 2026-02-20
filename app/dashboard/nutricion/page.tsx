"use client";
import React, { useState } from "react";
import Link from "next/link";
import MiniCalendar from "@/components/dashboard/MiniCalendar";
import { 
    Plus, Search, Sparkles, Flame, Trash2, X, ChefHat, 
    ArrowRight, ArrowLeft, Save, Clock
} from "lucide-react";

// Tipos de datos
type FoodItem = { id: number; name: string; cal: number; portion: string };
type MealSection = "desayuno" | "almuerzo" | "cena" | "snack";

export default function NutritionPage() {
  // --- ESTADO DEL DIARIO ---
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCreatingFood, setIsCreatingFood] = useState(false); // Nuevo estado para el modo creación
  const [activeMealToAdd, setActiveMealToAdd] = useState<MealSection | null>(null);
  
  // Estado para el formulario de nuevo alimento
  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodCal, setNewFoodCal] = useState("");
  const [newFoodPortion, setNewFoodPortion] = useState("");

  const [meals, setMeals] = useState<{ [key in MealSection]: FoodItem[] }>({
    desayuno: [
        { id: 1, name: "Huevos Revueltos", cal: 180, portion: "2 u" },
        { id: 2, name: "Pan Integral", cal: 120, portion: "2 rebanadas" }
    ],
    almuerzo: [],
    cena: [],
    snack: [{ id: 3, name: "Manzana Verde", cal: 95, portion: "1 u" }]
  });

  const CALORIE_GOAL = 2400;
  const currentCalories = Object.values(meals).flat().reduce((acc, item) => acc + item.cal, 0);
  const progressPercentage = Math.min((currentCalories / CALORIE_GOAL) * 100, 100);

  const foodDatabase = [
    { id: 101, name: "Pollo a la Plancha", cal: 220, portion: "150g" },
    { id: 102, name: "Arroz Blanco", cal: 130, portion: "100g" },
    { id: 103, name: "Ensalada César", cal: 350, portion: "1 bowl" },
    { id: 104, name: "Yogurt Griego", cal: 120, portion: "1 taza" },
    { id: 105, name: "Almendras", cal: 160, portion: "30g" },
  ];

  // --- FUNCIONES DEL DIARIO ---
  const openSearch = (meal: MealSection) => {
    setActiveMealToAdd(meal);
    setIsSearchOpen(true);
    setIsCreatingFood(false); // Resetear modo creación
  };

  const addFood = (food: any) => {
    if (activeMealToAdd) {
        setMeals({
            ...meals,
            [activeMealToAdd]: [...meals[activeMealToAdd], { ...food, id: Date.now() }]
        });
        setIsSearchOpen(false);
    }
  };

  const handleCreateFood = (e: React.FormEvent) => {
      e.preventDefault();
      if (!newFoodName || !newFoodCal || !activeMealToAdd) return;

      const customFood = {
          name: newFoodName,
          cal: parseInt(newFoodCal),
          portion: newFoodPortion || "1 porción",
          id: Date.now()
      };

      addFood(customFood);
      // Limpiar formulario
      setNewFoodName("");
      setNewFoodCal("");
      setNewFoodPortion("");
  };

  const removeFood = (meal: MealSection, id: number) => {
    setMeals({
        ...meals,
        [meal]: meals[meal].filter(item => item.id !== id)
    });
  };

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-500 pb-20">
      
      {/* ==============================================
          SECCIÓN 1: DIARIO DE COMIDAS (TRACKING)
      ============================================== */}
      
      <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Título y Botón IA */}
              <div className="flex flex-col justify-between items-start lg:col-span-1">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Diario Nutricional</h1>
                    <p className="text-slate-500">Registra y controla tu combustible diario.</p>
                </div>
                <Link href="/dashboard/nutricion/generar" className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold shadow-xl shadow-slate-900/10 transition-all active:scale-95">
                    <Sparkles size={18} className="text-yellow-400" /> Generar Menú con IA
                </Link>
              </div>

              {/* Gráfico de Calorías */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center justify-between relative overflow-hidden">
                  <div className="z-10">
                      <p className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-1">Resumen Diario</p>
                      <div className="text-4xl font-black text-slate-900">{currentCalories}</div>
                      <div className="text-sm font-medium text-slate-500">de {CALORIE_GOAL} kcal</div>
                  </div>
                  <div className="relative w-24 h-24">
                      <svg className="w-full h-full transform -rotate-90">
                          <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
                          <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" 
                            strokeDasharray={251.2} 
                            strokeDashoffset={251.2 - (251.2 * progressPercentage) / 100} 
                            className={`transition-all duration-1000 ease-out ${progressPercentage > 100 ? 'text-red-500' : 'text-teal-500'}`} 
                            strokeLinecap="round"
                          />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-teal-600">
                          <Flame fill="currentColor" size={24} />
                      </div>
                  </div>
              </div>

              {/* Mini Calendario */}
              <div><MiniCalendar /></div>
          </div>

          {/* Los 4 CRUDs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(Object.keys(meals) as MealSection[]).map((mealType) => (
                  <div key={mealType} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full min-h-[180px]">
                      <div className="bg-slate-50/50 p-6 flex justify-between items-center border-b border-slate-100">
                          <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-xl ${
                                  mealType === 'desayuno' ? 'bg-orange-100 text-orange-600' :
                                  mealType === 'almuerzo' ? 'bg-teal-100 text-teal-600' :
                                  mealType === 'cena' ? 'bg-indigo-100 text-indigo-600' : 'bg-pink-100 text-pink-600'
                              }`}>
                                  <ChefHat size={20} />
                              </div>
                              <div>
                                  <h3 className="font-bold text-slate-900 capitalize text-lg">{mealType}</h3>
                                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                      {meals[mealType].reduce((acc, i) => acc + i.cal, 0)} kcal
                                  </p>
                              </div>
                          </div>
                          <button onClick={() => openSearch(mealType)} className="h-10 w-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-500 transition-all shadow-sm">
                              <Plus size={20} />
                          </button>
                      </div>
                      <div className="p-4 space-y-2 flex-1">
                          {meals[mealType].length === 0 ? (
                              <div className="h-full flex flex-col items-center justify-center text-slate-300 py-4">
                                  <span className="text-sm font-medium">Nada registrado</span>
                              </div>
                          ) : (
                              meals[mealType].map((item) => (
                                  <div key={item.id} className="flex justify-between items-center p-3 hover:bg-slate-50 rounded-xl transition-colors group">
                                      <div>
                                          <p className="font-bold text-slate-700 text-sm">{item.name}</p>
                                          <p className="text-xs text-slate-400">{item.portion} • {item.cal} kcal</p>
                                      </div>
                                      <button onClick={() => removeFood(mealType, item.id)} className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                          <Trash2 size={16} />
                                      </button>
                                  </div>
                              ))
                          )}
                      </div>
                  </div>
              ))}
          </div>
      </div>

      <div className="border-t border-slate-200 my-12"></div>

      {/* ==============================================
          SECCIÓN 2: COCINA INTELIGENTE (RECETAS)
      ============================================== */}
      
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
                <h2 className="text-3xl font-bold text-slate-900">Cocina & Recetas</h2>
                <p className="text-slate-500">¿No sabes qué comer? Aquí tienes ideas basadas en tu nevera.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Nevera Virtual */}
            <div className="lg:col-span-1 space-y-4">
                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4">Tu Nevera Virtual</h3>
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-3 text-slate-400" size={16} />
                        <input type="text" placeholder="Agregar ingrediente..." className="w-full pl-9 pr-4 py-3 bg-slate-50 rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["Huevos", "Espinaca", "Pollo", "Arroz", "Tomate"].map((tag) => (
                            <button key={tag} className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-sm flex items-center gap-1 cursor-pointer hover:bg-teal-100">
                                {tag} <span className="text-teal-300 hover:text-teal-500">×</span>
                            </button>
                        ))}
                        <button className="px-3 py-1.5 border border-dashed border-slate-300 text-slate-400 rounded-lg text-sm hover:border-teal-500 hover:text-teal-500 flex items-center gap-1 transition-colors">
                            <Plus size={14} /> Agregar
                        </button>
                    </div>
                </div>
            </div>

            {/* Lista de Recetas */}
            <div className="lg:col-span-2">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    Recetas Recomendadas <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full">4 opciones</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { id: 1, name: "Ensalada Proteica César", cal: 450, time: "15 min", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500" },
                        { id: 2, name: "Tacos de Lechuga", cal: 320, time: "20 min", img: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=500" },
                        { id: 3, name: "Pollo al Limón", cal: 500, time: "35 min", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=500" },
                        { id: 4, name: "Bowl Vegetariano", cal: 380, time: "10 min", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500" }
                    ].map((item) => (
                        <Link key={item.id} href={`/dashboard/nutricion/${item.id}`} className="block group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-1 transition-all duration-300">
                            <div className="h-48 bg-slate-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{backgroundImage: `url('${item.img}')`}}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                <div className="absolute top-3 right-3 flex gap-2">
                                    <span className="bg-black/40 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-white flex items-center gap-1"><Flame size={10}/> {item.cal}</span>
                                    <span className="bg-black/40 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-white flex items-center gap-1"><Clock size={10}/> {item.time}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">{item.name}</h4>
                                <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Saludable</span>
                                    <div className="flex items-center gap-1 text-sm font-bold text-slate-400 group-hover:text-teal-600 transition-colors">
                                        Ver receta <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* --- MODAL BUSCADOR & CREADOR DE ALIMENTOS --- */}
      {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 p-4">
              <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-10 duration-300 relative overflow-hidden">
                  
                  {/* Header Modal */}
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white z-10">
                      <div>
                          <h3 className="text-xl font-bold text-slate-900">
                              {isCreatingFood ? "Crear Nuevo Alimento" : `Agregar a ${activeMealToAdd}`}
                          </h3>
                          {!isCreatingFood && <p className="text-sm text-slate-500">Busca ingredientes o platos recientes</p>}
                      </div>
                      <button onClick={() => setIsSearchOpen(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-500 transition-colors">
                          <X size={20} />
                      </button>
                  </div>

                  {/* CONTENIDO DEL MODAL: INTERCAMBIABLE */}
                  {isCreatingFood ? (
                      // --- MODO CREAR ALIMENTO ---
                      <form onSubmit={handleCreateFood} className="p-6 space-y-4 overflow-y-auto">
                          <div>
                              <label className="block text-sm font-bold text-slate-700 mb-2">Nombre del alimento</label>
                              <input 
                                autoFocus 
                                type="text" 
                                value={newFoodName}
                                onChange={(e) => setNewFoodName(e.target.value)}
                                placeholder="Ej. Empanada de Pollo" 
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                              />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                              <div>
                                  <label className="block text-sm font-bold text-slate-700 mb-2">Calorías (kcal)</label>
                                  <input 
                                    type="number" 
                                    value={newFoodCal}
                                    onChange={(e) => setNewFoodCal(e.target.value)}
                                    placeholder="0" 
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                                  />
                              </div>
                              <div>
                                  <label className="block text-sm font-bold text-slate-700 mb-2">Porción</label>
                                  <input 
                                    type="text" 
                                    value={newFoodPortion}
                                    onChange={(e) => setNewFoodPortion(e.target.value)}
                                    placeholder="Ej. 1 unidad" 
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                                  />
                              </div>
                          </div>
                          <div className="pt-4 flex gap-3">
                              <button 
                                type="button" 
                                onClick={() => setIsCreatingFood(false)} 
                                className="flex-1 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl border border-transparent hover:border-slate-200 transition-colors"
                              >
                                  Cancelar
                              </button>
                              <button 
                                type="submit" 
                                className="flex-1 py-3 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2"
                              >
                                  <Save size={18} /> Guardar
                              </button>
                          </div>
                      </form>
                  ) : (
                      // --- MODO BUSCADOR ---
                      <>
                        <div className="p-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                                <input 
                                    autoFocus 
                                    type="text" 
                                    placeholder="Ej. Pechuga de pollo, Manzana..." 
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none text-lg"
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Resultados frecuentes</p>
                            {foodDatabase.map((food) => (
                                <div key={food.id} className="flex justify-between items-center p-4 border border-slate-100 rounded-2xl hover:border-teal-500 hover:bg-teal-50 cursor-pointer transition-all group" onClick={() => addFood(food)}>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-slate-100">
                                            🥗
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800">{food.name}</p>
                                            <p className="text-xs text-slate-500">{food.portion} • {food.cal} kcal</p>
                                        </div>
                                    </div>
                                    <div className="h-8 w-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all">
                                        <Plus size={16} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center text-xs text-slate-500">
                            <span>¿No encuentras el alimento?</span>
                            {/* BOTÓN FUNCIONAL PARA CAMBIAR AL MODO CREAR */}
                            <button 
                                onClick={() => setIsCreatingFood(true)}
                                className="text-teal-600 font-bold hover:underline flex items-center gap-1"
                            >
                                <Plus size={14} /> Crear nuevo alimento
                            </button>
                        </div>
                      </>
                  )}
              </div>
          </div>
      )}

    </div>
  );
}