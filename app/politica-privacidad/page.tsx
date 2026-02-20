import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
       <nav className="p-6 bg-white border-b border-slate-200">
        <div className="container mx-auto">
             <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors font-medium">
                <ArrowLeft size={20}/> Volver al Inicio
             </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
         <h1 className="text-4xl font-bold mb-8 text-slate-900">Política de Privacidad</h1>
         <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-lg">Última actualización: Febrero 2026</p>
            
            <h3 className="text-2xl font-bold text-slate-800">1. Introducción</h3>
            <p>En CRG Solutions, nos tomamos muy en serio la privacidad de tus datos. Esta política describe cómo recopilamos, usamos y protegemos tu información.</p>

            <h3 className="text-2xl font-bold text-slate-800">2. Datos que recopilamos</h3>
            <p>Recopilamos información que nos proporcionas directamente, como tu nombre, correo electrónico y datos de salud ingresados en la aplicación NutriLife.</p>

            {/* Más contenido simulado... */}
         </div>
      </main>

      <Footer theme="light" />
    </div>
  );
}