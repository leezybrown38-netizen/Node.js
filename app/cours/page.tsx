'use client';

import React, { useEffect, useState } from 'react';
import { useGamificationStore } from '../../store/useGamificationStore';;
import { 
  Search, BookOpen, Clock, BarChart, Award, MessageSquare, 
  Check, RefreshCw, Lock, Trophy, Play 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    status: 'completed',
    title: 'Étape 1: Bases de Python',
    description: 'Syntaxe, variables et types de données de base. Configuration de votre environnement.',
    meta: '4 Leçons • 1 Quiz',
    badge: 'TERMINÉ',
    badgeColor: 'bg-green-100 text-green-700',
    iconColor: 'bg-teal-400 text-white border-teal-400',
    Icon: Check
  },
  {
    id: 2,
    status: 'in-progress',
    title: 'Étape 2: Structures de contrôle et boucles',
    description: 'Maîtriser les instructions if, les boucles for et les boucles while pour la gestion de la logique.',
    tags: ['If/Else', 'Itérateurs', 'Range'],
    badge: 'EN COURS',
    badgeColor: 'bg-blue-100 text-blue-700',
    iconColor: 'bg-white text-blue-500 border-blue-200 shadow-sm',
    Icon: RefreshCw
  },
  {
    id: 3,
    status: 'locked',
    title: 'Étape 3: Fonctions et modules',
    description: 'Apprenez à écrire du code réutilisable et à organiser votre projet avec des bibliothèques externes.',
    prerequisite: 'Prérequis : Terminer l\'étape 2',
    badge: 'VERROUILLÉ',
    badgeColor: 'bg-gray-100 text-gray-500',
    iconColor: 'bg-gray-50 text-gray-400 border-gray-200',
    Icon: Lock
  },
  {
    id: 4,
    status: 'locked',
    title: 'Étape 4: Structures de données',
    description: 'Plongée profonde dans les listes, dictionnaires, tuples et manipulation d\'ensembles.',
    badge: 'VERROUILLÉ',
    badgeColor: 'bg-gray-100 text-gray-500',
    iconColor: 'bg-gray-50 text-gray-400 border-gray-200',
    Icon: Lock
  },
  {
    id: 5,
    status: 'locked',
    title: 'Étape 5: Principes de l\'OOP',
    description: 'Classes, objets, héritage et le cœur de la programmation orientée objet.',
    badge: 'FINAL',
    badgeColor: 'bg-gray-100 text-gray-500',
    iconColor: 'bg-gray-50 text-gray-400 border-gray-200',
    Icon: Trophy
  }
];

export default function CourseRoadmap()
 {
    const { xp, level } = useGamificationStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
  <img src="/logo.png" alt="Logo EduPlateForme" className="h-10 w-auto" />
</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-teal-500">Bibliothèque</a>
            <a href="#" className="text-teal-500">Mon Apprentissage</a>
            <a href="#" className="hover:text-teal-500">Communauté</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Rechercher des cours..." 
              className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
            />
          </div>
          {mounted && (
  <div className="flex items-center gap-3 bg-white border border-slate-200 py-1 px-1.5 rounded-full shadow-sm">
    <div className="flex items-center gap-2 pl-2">
      <div className="bg-cyan-100 text-cyan-700 font-bold text-xs px-2 py-0.5 rounded-full">
        Niv. {level}
      </div>
      <div className="text-xs font-bold text-slate-500 pr-2">
        {xp} <span className="text-slate-400 font-normal">XP</span>
      </div>
    </div>
    <div className="w-8 h-8 rounded-full bg-orange-200 border-2 border-white flex items-center justify-center overflow-hidden">
      <span className="text-orange-600 font-bold text-xs">LE</span>
    </div>
  </div>
)}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar (Infos du cours) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-slate-100">
            <div className="text-[10px] font-bold tracking-wider text-teal-500 uppercase mb-2">Informatique</div>
            <h1 className="text-2xl font-black text-slate-900 mb-3 leading-tight">Introduction à Python</h1>
            <p className="text-sm text-slate-500 mb-6">Maîtrisez les fondamentaux de la programmation Python étape par étape.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Temps estimé</div>
                  <div className="text-sm font-semibold text-slate-700">12,5 Heures</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <BarChart className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Difficulté</div>
                  <div className="text-sm font-semibold text-slate-700">Niveau débutant</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Award className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Certificat</div>
                  <div className="text-sm font-semibold text-slate-700">Inclus</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="font-semibold text-sm text-slate-800">Progression du cours</span>
                <span className="text-teal-500 font-bold">40%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden">
                <div className="bg-teal-400 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-xs text-slate-400">2 modules sur 5 terminés</p>
            </div>

            <button className="w-full bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              Reprendre l'apprentissage
            </button>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-500 font-bold flex items-center justify-center shrink-0">
              JS
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-slate-400 mb-1">Mentor assigné</div>
              <div className="text-sm font-bold text-slate-800">Jordan Smith</div>
              <div className="text-xs text-slate-500">Expert Python • En ligne</div>
            </div>
            <MessageSquare className="w-5 h-5 text-slate-300" />
          </div>
        </aside>

        {/* Right Content (Feuille de route) */}
        <section className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-teal-500" />
            <h2 className="text-xl font-bold text-slate-800">Votre feuille de route</h2>
          </div>

          <div className="relative">
            {/* Ligne verticale de la timeline */}
            <div className="absolute left-[19px] top-6 bottom-10 w-0.5 bg-slate-200"></div>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.id} className="relative flex gap-6">
                  {/* Icône de timeline */}
                  <div className="relative z-10 shrink-0">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${step.iconColor}`}>
                      <step.Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Carte d'étape */}
                  <div className={`flex-1 bg-white rounded-2xl p-6 border ${step.status === 'in-progress' ? 'border-blue-200 shadow-md ring-1 ring-blue-50' : 'border-slate-100 shadow-sm'} ${step.status === 'locked' ? 'opacity-60' : ''}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-800">{step.title}</h3>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide ${step.badgeColor}`}>
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">{step.description}</p>
                    
                    {step.meta && <p className="text-xs text-slate-400 font-medium">{step.meta}</p>}
                    
                    {step.tags && (
                      <div className="flex gap-2 mb-4">
                        {step.tags.map(tag => (
                          <span key={tag} className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {step.prerequisite && <p className="text-xs text-slate-400 italic">{step.prerequisite}</p>}

                    {step.status === 'in-progress' && (
                      <button className="text-sm font-semibold text-blue-500 border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                        Continuer le module
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer minimaliste */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between px-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
  <img src="/logo.png" alt="Logo EduPlateForme" className="h-6 w-auto grayscale opacity-70" />
</div>
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-slate-600">Support</a>
            <a href="#" className="hover:text-slate-600">Confidentialité</a>
            <a href="#" className="hover:text-slate-600">Conditions</a>
            <a href="#" className="hover:text-slate-600">API</a>
          </div>
          <p>© 2026 EduPlateForme.  Tous droits réservés. </p>
      </footer>
    </div>
  );
}