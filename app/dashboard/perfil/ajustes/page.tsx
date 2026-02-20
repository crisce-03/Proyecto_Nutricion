import Link from "next/link";
import { ArrowLeft, Shield, Smartphone, Globe, Lock } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/perfil" className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-500">
            <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Configuración</h1>
      </div>

      <div className="space-y-6">
          
          {/* Seguridad */}
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
             <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"><Shield className="text-teal-600" size={20}/> Seguridad</h3>
             <div className="space-y-4">
                 <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                        <Lock size={18} className="text-slate-500"/>
                        <span className="font-medium text-slate-700">Cambiar Contraseña</span>
                    </div>
                    <button className="text-sm font-bold text-teal-600 hover:underline">Actualizar</button>
                 </div>
                 <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                        <Smartphone size={18} className="text-slate-500"/>
                        <span className="font-medium text-slate-700">Autenticación en 2 Pasos</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 cursor-pointer">
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"/>
                    </div>
                 </div>
             </div>
          </div>

          {/* Regional */}
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
             <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"><Globe className="text-teal-600" size={20}/> Idioma y Región</h3>
             <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">Idioma de la interfaz</span>
                    <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 outline-none">
                        <option>Español (Latinoamérica)</option>
                        <option>English (US)</option>
                    </select>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">Unidades de medida</span>
                    <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 outline-none">
                        <option>Métrico (kg, cm)</option>
                        <option>Imperial (lbs, ft)</option>
                    </select>
                 </div>
             </div>
          </div>

      </div>
    </div>
  );
}