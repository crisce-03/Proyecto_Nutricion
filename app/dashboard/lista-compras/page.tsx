import { ShoppingCart, Check, Trash2, Plus, GripVertical } from "lucide-react";

export default function ShoppingListPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
           <h1 className="text-3xl font-bold text-slate-900">Lista de Compras</h1>
           <p className="text-slate-500">Organizada automáticamente por pasillos para que no pierdas tiempo.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm text-sm font-bold text-slate-700">
            Total estimado: <span className="text-teal-600 text-lg">$45.50</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Input Area (Sticky en Desktop) */}
        <div className="lg:col-span-1">
            <div className="bg-[#042834] p-6 rounded-[2rem] text-white shadow-xl sticky top-24">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <ShoppingCart size={20} className="text-teal-400"/> Agregar Producto
                </h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Producto</label>
                        <input type="text" placeholder="Ej. Leche de Almendras" className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none text-white placeholder:text-white/30 transition-all" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Categoría</label>
                        <select className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-teal-400 outline-none text-white appearance-none cursor-pointer">
                            <option className="text-slate-900">Frutas y Verduras</option>
                            <option className="text-slate-900">Lácteos</option>
                            <option className="text-slate-900">Proteínas</option>
                            <option className="text-slate-900">Despensa</option>
                        </select>
                    </div>
                    <button className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl transition-colors shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2">
                        <Plus size={18} /> Agregar a la lista
                    </button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs text-slate-400 text-center">Tip: Puedes agregar recetas completas desde el menú de nutrición.</p>
                </div>
            </div>
        </div>

        {/* Listado por Categorías */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* Categoría 1 */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h4 className="font-bold text-slate-800">Frutas y Verduras</h4>
                    <span className="text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">3 items</span>
                </div>
                <div className="p-2">
                    {[
                        { name: "Bananas", detail: "1 racimo", checked: false },
                        { name: "Espinaca Baby", detail: "2 bolsas", checked: true },
                        { name: "Aguacates", detail: "3 unidades (maduros)", checked: false },
                    ].map((item, i) => (
                        <div key={i} className={`flex items-center gap-4 p-3 rounded-xl transition-all group ${item.checked ? 'bg-slate-50' : 'hover:bg-teal-50/50'}`}>
                            <button className="text-slate-300 hover:text-slate-500 cursor-grab active:cursor-grabbing">
                                <GripVertical size={16} />
                            </button>
                            <div 
                                className={`h-6 w-6 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-colors ${item.checked ? 'bg-teal-500 border-teal-500' : 'border-slate-300 group-hover:border-teal-400'}`}
                            >
                                {item.checked && <Check size={14} className="text-white" />}
                            </div>
                            <div className="flex-1">
                                <p className={`font-medium ${item.checked ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{item.name}</p>
                                <p className="text-xs text-slate-500">{item.detail}</p>
                            </div>
                            <button className="text-slate-300 hover:text-red-500 transition-colors p-2">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categoría 2 */}
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h4 className="font-bold text-slate-800">Proteínas</h4>
                    <span className="text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">2 items</span>
                </div>
                <div className="p-2">
                    {[
                        { name: "Pechuga de Pollo", detail: "1 kg (sin hueso)", checked: false },
                        { name: "Salmón Fresco", detail: "2 filetes", checked: false },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-teal-50/50 transition-all group">
                             <button className="text-slate-300 hover:text-slate-500 cursor-grab">
                                <GripVertical size={16} />
                            </button>
                            <div className="h-6 w-6 rounded-lg border-2 border-slate-300 group-hover:border-teal-400 cursor-pointer"></div>
                            <div className="flex-1">
                                <p className="font-medium text-slate-800">{item.name}</p>
                                <p className="text-xs text-slate-500">{item.detail}</p>
                            </div>
                            <button className="text-slate-300 hover:text-red-500 transition-colors p-2">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}