import { Heart, MessageCircle, Share2, MoreHorizontal, Award } from "lucide-react";

export default function CommunityPage() {
  
  const posts = [
    { 
        user: "Ana Martinez", 
        avatar: "AM", 
        color: "bg-purple-500", 
        time: "2h", 
        img: "https://images.unsplash.com/photo-1543362906-ac1b452601e0?auto=format&fit=crop&q=80&w=800",
        desc: "¡Primer mes completado! 🎉 -4kg y sintiéndome con más energía que nunca. Gracias a la receta de Bowl de Quinoa, ¡es mi favorita!",
        likes: 124,
        comments: 18
    },
    { 
        user: "Carlos Ruiz", 
        avatar: "CR", 
        color: "bg-blue-500", 
        time: "5h", 
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
        desc: "Entrenamiento de pierna destruido hoy 🏋️‍♂️. La rutina de alta intensidad no es broma. #NutriLife #FitnessJourney",
        likes: 89,
        comments: 42
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
      
      {/* Feed Principal */}
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white p-4 rounded-[2rem] border border-slate-100 flex gap-4 items-center shadow-sm">
            <div className="h-12 w-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">HG</div>
            <input type="text" placeholder="Comparte tu progreso o una foto de tu comida..." className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500/50 transition-all" />
        </div>

        {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full ${post.color} flex items-center justify-center text-white font-bold text-sm`}>{post.avatar}</div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">{post.user}</h4>
                            <p className="text-xs text-slate-500">hace {post.time} • Miembro Pro</p>
                        </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={20}/></button>
                </div>
                
                <div className="px-6 mb-4">
                    <p className="text-slate-700 leading-relaxed">{post.desc}</p>
                </div>

                <div className="h-80 w-full bg-slate-100 relative">
                     <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${post.img}')`}}></div>
                </div>

                <div className="p-4 flex items-center justify-between border-t border-slate-50">
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors font-bold text-sm group">
                            <Heart size={20} className="group-hover:fill-red-500"/> {post.likes}
                        </button>
                        <button className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors font-bold text-sm">
                            <MessageCircle size={20} /> {post.comments}
                        </button>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600"><Share2 size={20}/></button>
                </div>
            </div>
        ))}
      </div>

      {/* Sidebar de Comunidad */}
      <div className="hidden lg:block space-y-6">
          <div className="bg-[#042834] p-6 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                      <Award className="text-yellow-400" />
                      <h3 className="font-bold text-lg">Reto Semanal</h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-6">"Sin Azúcar por 5 días". Únete a otros 3,400 usuarios completando este reto.</p>
                  <button className="w-full py-2 bg-white text-[#042834] font-bold rounded-xl text-sm hover:bg-teal-50 transition-colors">Aceptar Reto</button>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/30 rounded-full blur-2xl"></div>
          </div>

          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm sticky top-24">
              <h3 className="font-bold text-slate-800 mb-4">Miembros Destacados</h3>
              <div className="space-y-4">
                  {[1,2,3].map((u) => (
                      <div key={u} className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-slate-200 bg-[url('https://i.pravatar.cc/150')] bg-cover"></div>
                          <div className="flex-1">
                              <p className="font-bold text-sm text-slate-800">Usuario Top {u}</p>
                              <p className="text-xs text-green-600 font-bold">-5kg este mes</p>
                          </div>
                          <button className="px-3 py-1 bg-teal-50 text-teal-600 text-xs font-bold rounded-lg hover:bg-teal-100">Seguir</button>
                      </div>
                  ))}
              </div>
          </div>
      </div>

    </div>
  );
}