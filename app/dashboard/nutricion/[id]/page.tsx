import Link from "next/link";
import { ArrowLeft, Clock, Flame, ChefHat, CheckCircle2, Share2, Heart } from "lucide-react";

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  // En un caso real, usarías params.id para buscar en la base de datos.
  // Aquí hardcodeamos visualmente una receta increible.
  
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      
      {/* Navegación Interna */}
      <div className="flex justify-between items-center">
        <Link href="/dashboard/nutricion" className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors font-bold text-sm bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <ArrowLeft size={16}/> Volver al Menú
        </Link>
        <div className="flex gap-2">
            <button className="p-2 bg-white text-slate-400 hover:text-red-500 rounded-full shadow-sm border border-slate-100 transition-colors">
                <Heart size={20} />
            </button>
            <button className="p-2 bg-white text-slate-400 hover:text-blue-500 rounded-full shadow-sm border border-slate-100 transition-colors">
                <Share2 size={20} />
            </button>
        </div>
      </div>

      {/* Hero de la Receta */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Imagen Gigante */}
        <div className="h-80 lg:h-auto rounded-[2rem] overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-black/60 backdrop-blur text-white text-xs font-bold rounded-lg flex items-center gap-1"><Clock size={12}/> 15 min</span>
                <span className="px-3 py-1 bg-black/60 backdrop-blur text-white text-xs font-bold rounded-lg flex items-center gap-1"><Flame size={12}/> 450 kcal</span>
            </div>
        </div>

        {/* Info Principal */}
        <div className="flex flex-col justify-center space-y-6">
            <div>
                <span className="text-teal-600 font-bold uppercase tracking-wider text-xs bg-teal-50 px-2 py-1 rounded">Almuerzo Saludable</span>
                <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-2">Bowl de Pollo y Quinoa</h1>
                <p className="text-slate-500 text-lg leading-relaxed">
                    Un plato balanceado perfecto para recuperar energía post-entreno. Rico en proteínas magras y carbohidratos complejos de absorción lenta.
                </p>
            </div>

            {/* Macros Cards */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                    <div className="text-2xl font-bold text-slate-800">35g</div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Proteína</div>
                    <div className="h-1 w-full bg-slate-100 mt-2 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[80%]"></div></div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                    <div className="text-2xl font-bold text-slate-800">40g</div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Carbos</div>
                    <div className="h-1 w-full bg-slate-100 mt-2 rounded-full overflow-hidden"><div className="h-full bg-orange-500 w-[50%]"></div></div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                    <div className="text-2xl font-bold text-slate-800">12g</div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Grasas</div>
                    <div className="h-1 w-full bg-slate-100 mt-2 rounded-full overflow-hidden"><div className="h-full bg-yellow-500 w-[30%]"></div></div>
                </div>
            </div>

            {/* Botón conectado al Modo Cocina */}
            <Link href={`/dashboard/nutricion/${params.id}/cocinar`} className="w-full py-4 bg-[#042834] text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 hover:bg-teal-900 transition-colors flex items-center justify-center gap-2">
                <ChefHat size={20} /> Empezar a Cocinar (Modo Paso a Paso)
            </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Lista de Ingredientes */}
        <div className="lg:col-span-1 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm h-fit">
            <h3 className="font-bold text-xl text-slate-800 mb-4">Ingredientes</h3>
            <div className="space-y-3">
                {[
                    "200g Pechuga de Pollo",
                    "1/2 Taza Quinoa",
                    "1 Aguacate Maduro",
                    "10 Tomates Cherry",
                    "Aceite de Oliva",
                    "Sal y Pimienta"
                ].map((ing, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group hover:bg-slate-50 p-2 rounded-lg transition-colors">
                        <div className="relative flex items-center">
                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 transition-all checked:border-teal-500 checked:bg-teal-500" />
                            <CheckCircle2 size={14} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                        </div>
                        <span className="text-slate-600 group-hover:text-slate-900 font-medium">{ing}</span>
                    </label>
                ))}
            </div>
        </div>

        {/* Instrucciones */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-xl text-slate-800 mb-6">Instrucciones</h3>
            <div className="space-y-8 relative">
                {/* Línea conectora */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-100"></div>

                {[
                    { step: 1, text: "Lavar la quinoa y cocinarla en agua hirviendo por 15 minutos." },
                    { step: 2, text: "Cortar el pollo en cubos, salpimentar y dorar en sartén con aceite de oliva." },
                    { step: 3, text: "Cortar los tomates cherry por la mitad y el aguacate en láminas." },
                    { step: 4, text: "Servir la base de quinoa, añadir el pollo y decorar con los vegetales." }
                ].map((inst, i) => (
                    <div key={i} className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center border-4 border-white shadow-sm z-10">
                            {inst.step}
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">Paso {inst.step}</h4>
                        <p className="text-slate-500 leading-relaxed">{inst.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}