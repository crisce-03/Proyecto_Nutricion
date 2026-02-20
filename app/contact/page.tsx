import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar  from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#042834] text-slate-100">
      <Navbar />

      <main className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Info Text */}
        <div className="flex-1 space-y-8">
            <div>
                <h1 className="text-5xl font-bold mb-4 text-white">Hablemos de tu Proyecto</h1>
                <p className="text-slate-300 text-lg">¿Tienes una idea? En CRG Solutions la hacemos realidad. Contáctanos hoy mismo.</p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-teal-400">
                        <Mail />
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Correo Electrónico</p>
                        <p className="text-lg font-bold">crgsolutions2025@outlook.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-teal-400">
                        <MapPin />
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Ubicación</p>
                        <p className="text-lg font-bold">Santa Ana, El Salvador</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Form Visual */}
        <div className="flex-1 w-full max-w-md bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Correo</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" placeholder="tucorreo@ejemplo.com" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Mensaje</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none" placeholder="¿Cómo podemos ayudarte?" />
                </div>
                <button type="button" className="w-full py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-600/20">
                    Enviar Mensaje <Send size={18} />
                </button>
            </form>
        </div>

      </main>

      <div className="mt-12 border-t border-white/10">
         <Footer theme="dark" />
      </div>
    </div>
  );
}