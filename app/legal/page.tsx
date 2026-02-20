import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export default function LegalPage() {
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
         <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-slate-200 rounded-xl">
                <Scale size={32} className="text-slate-700"/>
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Aviso Legal</h1>
         </div>
         
         <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm prose prose-slate max-w-none text-slate-600">
            <p className="lead text-xl text-slate-800 font-medium">
                Información general para dar cumplimiento a la Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico.
            </p>
            
            <hr className="border-slate-100 my-8"/>

            <h3>1. Datos Identificativos</h3>
            <p>La empresa titular de dominio web es <strong>CRG Solutions</strong>, con domicilio a estos efectos en Santa Ana, El Salvador. Correo electrónico de contacto: crgsolutions2025@outlook.com.</p>

            <h3>2. Usuarios</h3>
            <p>El acceso y/o uso de este portal de CRG Solutions atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>

            <h3>3. Uso del Portal</h3>
            <p>NutriLife proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a CRG Solutions.</p>

            {/* Agrega más texto legal real si lo tienes */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded-r-lg">
                <p className="text-blue-800 text-sm m-0">
                    <strong>Nota Importante:</strong> Este es un documento de ejemplo para la estructura visual del proyecto.
                </p>
            </div>
         </div>
      </main>

      <Footer theme="light" />
    </div>
  );
}