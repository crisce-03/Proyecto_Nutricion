import Link from "next/link";
import { ArrowLeft, Calendar, TrendingDown, TrendingUp, Minus } from "lucide-react";

export default function HistoryPage() {
  const history = [
    { date: "Hoy, 18 Feb", type: "Peso", val: "78.5 kg", change: "-0.5", status: "good" },
    { date: "Ayer, 17 Feb", type: "Agua", val: "2,100 ml", change: "-400", status: "bad" },
    { date: "Ayer, 17 Feb", type: "Sueño", val: "7h 15m", change: "+30m", status: "good" },
    { date: "16 Feb 2026", type: "Peso", val: "79.0 kg", change: "0", status: "neutral" },
    { date: "16 Feb 2026", type: "Agua", val: "2,500 ml", change: "Meta", status: "good" },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
       <div className="flex items-center gap-4">
        <Link href="/dashboard/metas" className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-500">
            <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Historial de Registros</h1>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
              <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-xs uppercase tracking-wider text-slate-500 font-bold">
                      <th className="p-6">Fecha</th>
                      <th className="p-6">Categoría</th>
                      <th className="p-6">Valor</th>
                      <th className="p-6 text-right">Cambio</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                  {history.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-6 font-medium text-slate-700 flex items-center gap-2">
                              <Calendar size={16} className="text-slate-400"/> {item.date}
                          </td>
                          <td className="p-6">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold 
                                ${item.type === 'Peso' ? 'bg-teal-50 text-teal-700' : 
                                  item.type === 'Agua' ? 'bg-blue-50 text-blue-700' : 'bg-indigo-50 text-indigo-700'}`}>
                                {item.type}
                              </span>
                          </td>
                          <td className="p-6 font-bold text-slate-900">{item.val}</td>
                          <td className="p-6 text-right">
                              <div className={`inline-flex items-center gap-1 text-sm font-bold
                                ${item.status === 'good' ? 'text-green-600' : 
                                  item.status === 'bad' ? 'text-red-500' : 'text-slate-400'}`}>
                                  {item.status === 'good' && <TrendingUp size={14}/>}
                                  {item.status === 'bad' && <TrendingDown size={14}/>}
                                  {item.status === 'neutral' && <Minus size={14}/>}
                                  {item.change}
                              </div>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  );
}