import React from "react";
import Link from "next/link";
import { User, Mail, CreditCard, Bell, ChevronRight, Shield, LogOut, Settings, Camera, AlertCircle, Globe } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Header Profile Card */}
      <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
        {/* Background decorative */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#042834] to-teal-900 z-0"></div>
        
        <div className="relative z-10 mt-12 md:mt-8 flex flex-col items-center">
            <div className="h-32 w-32 rounded-full p-1.5 bg-white shadow-lg">
                <div className="h-full w-full rounded-full bg-slate-100 overflow-hidden flex items-center justify-center relative group cursor-pointer">
                    <span className="text-4xl font-bold text-teal-700">HG</span>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="text-white" size={24} />
                    </div>
                </div>
            </div>
        </div>

        <div className="relative z-10 md:mt-16 text-center md:text-left flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Hector Garcia</h1>
                    <p className="text-slate-500 flex items-center justify-center md:justify-start gap-2">
                        hector@crgsolutions.com 
                        <span className="w-1 h-1 bg-slate-400 rounded-full"></span> 
                        Miembro desde Enero 2026
                    </p>
                </div>
                <div className="flex gap-3">
                    <Link href="/dashboard/perfil/editar" className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors text-sm">
                        Editar Perfil
                    </Link>
                    
                    {/* --- AQUÍ ESTÁ LA CORRECCIÓN --- */}
                    {/* Antes llevaba a /about, ahora lleva a tu perfil público /u/hector */}
                    <Link href="/u/hector" className="px-5 py-2.5 bg-[#042834] hover:bg-teal-900 text-white font-bold rounded-xl transition-colors text-sm shadow-lg shadow-teal-900/20">
                        Ver Perfil Público
                    </Link>
                    
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Columna Izquierda: Formulario y Preferencias */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* Formulario Datos (Solo lectura aquí, edición en la otra página) */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                        <User size={24} /> 
                    </div>
                    Información Personal
                </h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80 pointer-events-none">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Nombre</label>
                            <input type="text" readOnly defaultValue="Hector" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white outline-none transition-all font-medium text-slate-800" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Apellido</label>
                            <input type="text" readOnly defaultValue="Garcia" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white outline-none transition-all font-medium text-slate-800" />
                        </div>
                    </div>
                    
                    <div className="space-y-2 opacity-80 pointer-events-none">
                        <label className="text-sm font-bold text-slate-700 ml-1">Correo Electrónico</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-3.5 text-slate-400" size={20} />
                            <input type="email" readOnly defaultValue="hector@crgsolutions.com" className="w-full pl-12 pr-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white outline-none transition-all font-medium text-slate-800" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-80 pointer-events-none">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Peso Actual (kg)</label>
                            <input type="number" readOnly defaultValue="78.5" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white outline-none transition-all font-medium text-slate-800" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">Altura (cm)</label>
                            <input type="number" readOnly defaultValue="180" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white outline-none transition-all font-medium text-slate-800" />
                        </div>
                    </div>
                </form>
            </div>

            {/* Preferencias Alimenticias */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-3 pb-4 border-b border-slate-100">
                    <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                        <AlertCircle size={24} /> 
                    </div>
                    Alergias & Restricciones
                </h3>
                <div className="space-y-4">
                    <p className="text-sm text-slate-500 mb-4">Selecciona los ingredientes que debemos excluir completamente de tus planes nutricionales.</p>
                    <div className="flex flex-wrap gap-3">
                        {["Gluten", "Lácteos", "Huevo", "Soja", "Frutos Secos", "Cacahuetes", "Mariscos", "Pescado", "Carne Roja", "Azúcar Añadida"].map((item) => (
                            <label key={item} className="cursor-pointer group relative">
                                <input type="checkbox" className="peer sr-only" />
                                <span className="block px-4 py-2 rounded-xl border-2 border-slate-100 text-slate-600 text-sm font-bold peer-checked:bg-teal-50 peer-checked:border-teal-500 peer-checked:text-teal-700 transition-all select-none group-hover:bg-slate-50">
                                    {item}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Columna Derecha: Menú Configuración */}
        <div className="space-y-6">
            {/* Plan Card */}
            <div className="bg-gradient-to-br from-[#042834] to-[#0D3B4C] p-6 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <span className="bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Premium</span>
                        <CreditCard className="text-teal-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">Plan Anual</h3>
                    <p className="text-slate-300 text-sm mb-6">Próxima facturación: 24 Feb 2027</p>
                    <Link href="/dashboard/suscripcion" className="block w-full text-center py-3 bg-white text-[#042834] font-bold rounded-xl hover:bg-teal-50 transition-colors">
                        Gestionar Suscripción
                    </Link>
                </div>
                {/* Decoración */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
            </div>

            {/* Ajustes Generales */}
            <div className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <h4 className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Ajustes de Cuenta</h4>
                <div className="space-y-1 mt-2">
                    
                    <Link href="/dashboard/notificaciones" className="flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer rounded-2xl transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-100 text-slate-600 rounded-xl group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors">
                                <Bell size={18}/>
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 text-sm">Notificaciones</div>
                                <div className="text-xs text-slate-500">Email & Push</div>
                            </div>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-teal-500 transition-transform group-hover:translate-x-1"/>
                    </Link>

                    <Link href="/dashboard/perfil/ajustes" className="flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer rounded-2xl transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-100 text-slate-600 rounded-xl group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors">
                                <Shield size={18}/>
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 text-sm">Seguridad</div>
                                <div className="text-xs text-slate-500">Contraseña & 2FA</div>
                            </div>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-teal-500 transition-transform group-hover:translate-x-1"/>
                    </Link>

                    <Link href="/dashboard/perfil/ajustes" className="flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer rounded-2xl transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-100 text-slate-600 rounded-xl group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors">
                                <Globe size={18}/>
                            </div>
                            <div>
                                <div className="font-bold text-slate-800 text-sm">Idioma</div>
                                <div className="text-xs text-slate-500">Español (ES)</div>
                            </div>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-teal-500 transition-transform group-hover:translate-x-1"/>
                    </Link>
                </div>
            </div>

            {/* Zona de Peligro */}
            <Link href="/auth" className="w-full p-4 rounded-[2rem] border-2 border-red-50 bg-red-50/50 text-red-600 font-bold hover:bg-red-50 hover:border-red-100 transition-all flex items-center justify-center gap-2 group">
                <LogOut size={20} className="group-hover:-translate-x-1 transition-transform"/> Cerrar Sesión
            </Link>
        </div>

      </div>
    </div>
  );
}