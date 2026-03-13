'use client';

import React from 'react';
import { 
  Search, User, Calculator, Code, Landmark, 
  FlaskConical, Palette, Globe, Briefcase, BookOpen, Music, Sparkles 
} from 'lucide-react';
import Link from 'next/link';


const featuredSubjects = [
  {
    id: 1,
    title: 'Mathématiques',
    description: 'De l\'arithmétique de base au calcul complexe et à la théorie des groupes. Explorez le langage universel.',
    articles: '124 ARTICLES',
    icon: <Calculator className="w-16 h-16 text-cyan-200 opacity-50" />,
    smallIcon: <Calculator className="w-4 h-4 text-cyan-500" />,
    bgColor: 'bg-cyan-50/50',
  },
  {
    id: 2,
    title: 'Programmation',
    description: 'Maîtrisez la logique du monde numérique. Plongez dans Python, JavaScript et les fondamentaux de l\'IA.',
    articles: '218 ARTICLES',
    icon: <Code className="w-16 h-16 text-indigo-200 opacity-50" />,
    smallIcon: <Code className="w-4 h-4 text-indigo-500" />,
    bgColor: 'bg-indigo-50/50',
  },
  {
    id: 3,
    title: 'Histoire',
    description: 'Les récits de la civilisation humaine. Voyagez à travers les époques qui ont façonné notre monde moderne.',
    articles: '342 ARTICLES',
    icon: <Landmark className="w-16 h-16 text-orange-200 opacity-50" />,
    smallIcon: <Landmark className="w-4 h-4 text-orange-500" />,
    bgColor: 'bg-orange-50/50',
  }
];

const categories = [
  { name: 'Science', icon: <FlaskConical className="w-6 h-6 text-cyan-500 mb-3" /> },
  { name: 'Arts', icon: <Palette className="w-6 h-6 text-slate-500 mb-3" /> },
  { name: 'Langues', icon: <Globe className="w-6 h-6 text-cyan-500 mb-3" /> },
  { name: 'Affaires', icon: <Briefcase className="w-6 h-6 text-slate-500 mb-3" /> },
  { name: 'Philosophie', icon: <BookOpen className="w-6 h-6 text-cyan-500 mb-3" /> },
  { name: 'Musique', icon: <Music className="w-6 h-6 text-slate-500 mb-3" /> }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-800">
      
      
      <header className="bg-white px-8 py-5 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            
            <img src="/logo.png" alt="Logo EduPlateForme" className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-cyan-500 transition-colors">Mon Apprentissage</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Explorer</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">À propos</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Recherche rapide..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all"
            />
          </div>
          <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 cursor-pointer hover:bg-cyan-100 transition-colors">
            <User className="w-5 h-5" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        
        
        <section className="text-center max-w-3xl mx-auto mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold tracking-widest uppercase mb-8">
            <Sparkles className="w-3 h-3" />
            Découvrir le savoir
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-10 tracking-tight">
            Que voulez-vous <br />
            <span className="text-cyan-300">apprendre</span> aujourd'hui ?
          </h1>

          <div className="relative max-w-2xl mx-auto mb-6 bg-white p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center border border-slate-100">
            <Search className="w-5 h-5 text-slate-400 ml-4" />
            <input 
              type="text" 
              placeholder="Rechercher des sujets, articles ou cours..." 
              className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none text-slate-700"
            />
            <button className="bg-cyan-300 hover:bg-cyan-400 text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Rechercher
            </button>
          </div>

          <div className="text-sm font-medium text-slate-400 flex items-center justify-center gap-3">
            <span>Tendances :</span>
            <a href="#" className="text-cyan-300 hover:text-cyan-500">Informatique Quantique</a>
            <a href="#" className="text-cyan-300 hover:text-cyan-500">Architecture Moderne</a>
            <a href="#" className="text-cyan-300 hover:text-cyan-500">Art de la Renaissance</a>
          </div>
        </section>

        
        <section className="mb-24">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Sujets à la une</h2>
              <p className="text-slate-500 text-sm">Des parcours d'apprentissage curatés pour chaque curiosité</p>
            </div>
            <a href="#" className="text-cyan-400 hover:text-cyan-600 text-sm font-semibold flex items-center gap-1">
              Voir tous les sujets →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSubjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group cursor-pointer">
                
                <div className={`h-48 ${subject.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                  {subject.icon}
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                      {subject.smallIcon}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">{subject.articles}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{subject.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 h-16">
                    {subject.description}
                  </p>
                  <Link href="/cours" className="text-cyan-400 font-semibold text-sm hover:text-cyan-600 transition-colors block text-center">
  Explorer le parcours
</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Catégories populaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all cursor-pointer">
                {cat.icon}
                <span className="text-sm font-semibold text-slate-700">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      
      <footer className="bg-white border-t border-slate-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <img src="/logo.png" alt="Logo EduPlateForme" className="h-6 w-auto grayscale opacity-60" />
          </div>
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="#" className="hover:text-cyan-500">Documentation</a>
            <a href="#" className="hover:text-cyan-500">Politique de Confidentialité</a>
            <a href="#" className="hover:text-cyan-500">Conditions d'Utilisation</a>
            <a href="#" className="hover:text-cyan-500">Contribuer</a>
          </div>
          <p>© 2026 EduPlateForme. Le savoir est pour tout le monde.</p>
        </div>
      </footer>
    </div>
  );
}
