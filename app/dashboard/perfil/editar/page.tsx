import Link from "next/link";
import { ArrowLeft, Camera, Lock, Save } from "lucide-react";

export default function EditProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      
      {/* Nav */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/perfil" className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-500">
            <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Editar Perfil</h1>
      </div>

      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
        
        {/* Avatar Upload */}
        <div className="flex flex-col items-center mb-8">
            <div className="relative group cursor-pointer">
                <div className="h-28 w-28 rounded-full bg-slate-200 flex items-center justify-center text-3xl font-bold text-slate-500 overflow-hidden border-4 border-white shadow-lg">
                    {/* <img src="..." /> aquí iría la foto real */}
                    HG
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" />
                </div>
            </div>
            <p className="text-sm text-slate-400 mt-2">Click para cambiar foto</p>
        </div>

        <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
                    <input type="text" defaultValue="Hector" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Apellido</label>
                    <input type="text" defaultValue="Garcia" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Bio / Estado</label>
                <textarea rows={3} defaultValue="Entusiasta del fitness y la comida saludable. 🥑" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
            </div>

            <div className="pt-6 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><Lock size={18}/> Seguridad</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Contraseña Actual</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Nueva Contraseña</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" />
                    </div>
                </div>
            </div>

            <div className="pt-6 flex justify-end gap-4">
                <Link href="/dashboard/perfil" className="px-6 py-3 text-slate-500 font-bold hover:bg-slate-50 rounded-xl transition-colors">
                    Cancelar
                </Link>
                <button type="button" className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/20">
                    <Save size={18} /> Guardar Cambios
                </button>
            </div>
        </form>

      </div>
    </div>
  );
}