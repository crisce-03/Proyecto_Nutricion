"use client"

import Link from "next/link";
import  {ArrowLeft} from 'lucide-react';


export default function Navbar(){

    return(
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
             <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors font-bold text-sm">
                <ArrowLeft size={18}/> Regresar
             </Link>
             <span className="font-bold text-slate-800">Centro de Ayuda CRG</span>
        </div>
      </nav>
    );

}