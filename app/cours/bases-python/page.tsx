'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, BookOpen, Trophy } from 'lucide-react';
import { useGamificationStore } from '../../../store/useGamificationStore';


const quizData = [
  {
    question: "Comment déclare-t-on une variable en Python ?",
    options: ["let x = 5", "x = 5", "int x = 5", "variable x = 5"],
    correctAnswer: 1
  },
  {
    question: "Quelle fonction est utilisée pour afficher du texte dans la console ?",
    options: ["console.log()", "echo()", "print()", "display()"],
    correctAnswer: 2
  }
];

export default function BasesPythonCourse() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  
  
  const addXP = useGamificationStore((state) => state.addXP);

  const handleAnswer = (selectedIndex: number) => {
    let currentScore = score;
    if (selectedIndex === quizData[currentQuestion].correctAnswer) {
      currentScore += 1;
      setScore(currentScore);
    }
    
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
      addXP(currentScore * 50); 
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      <header className="border-b border-slate-100 py-4 px-6 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <Link href="/cours" className="flex items-center gap-2 text-slate-500 hover:text-cyan-500 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold text-sm">Retour à la feuille de route</span>
        </Link>
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-500" />
          <span className="font-bold text-slate-800">Étape 1</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        
        <div className="mb-12">
          <div className="text-cyan-500 font-bold text-sm tracking-wider uppercase mb-3">Module Python</div>
          <h1 className="text-4xl font-black text-slate-900 mb-6">Les bases de Python</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Python est un langage de programmation puissant, facile à apprendre et très populaire. 
            Dans cette première leçon, nous allons voir comment déclarer des variables et afficher des messages.
          </p>
        </div>

        
        <div className="prose prose-slate max-w-none mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">1. Les Variables</h2>
          <p className="text-slate-600 mb-4">
            Contrairement à d'autres langages, Python n'a pas besoin de mots-clés spéciaux (comme <code>let</code> ou <code>var</code>) pour créer une variable. Il suffit de lui assigner une valeur.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-sm text-slate-800 mb-8">
            <span className="text-slate-400"># Ceci est un commentaire</span><br />
            age = <span className="text-cyan-600">20</span><br />
            nom = <span className="text-orange-500">"Utilisateur"</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">2. Afficher du texte</h2>
          <p className="text-slate-600 mb-4">
            Pour communiquer avec l'utilisateur, Python utilise la fonction intégrée <code>print()</code>.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-sm text-slate-800 mb-8">
            <span className="text-blue-600">print</span>(<span className="text-orange-500">"Bonjour tout le monde !"</span>)
          </div>
        </div>

        
        <div className="border-t border-slate-200 pt-12">
          {!showQuiz ? (
            <div className="text-center bg-cyan-50 rounded-2xl p-8 border border-cyan-100">
              <Trophy className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Prêt à valider vos acquis ?</h3>
              <p className="text-slate-600 mb-6">Passez le quiz pour gagner de l'XP et terminer cette étape.</p>
              <button 
                onClick={() => setShowQuiz(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Démarrer le Quiz
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <AnimatePresence mode="wait">
                {!quizFinished ? (
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="text-sm font-bold text-cyan-500 mb-4">Question {currentQuestion + 1} / {quizData.length}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-6">{quizData[currentQuestion].question}</h3>
                    <div className="space-y-3">
                      {quizData[currentQuestion].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswer(i)}
                          className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 transition-colors font-medium text-slate-700"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="text-center py-6"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-black text-slate-900 mb-2">Module Terminé !</h2>
                    <p className="text-lg text-slate-600 mb-6">Score : {score} / {quizData.length}</p>
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full font-bold text-lg mb-8">
                      +{score * 50} XP gagnés
                    </div>
                    <div>
                      <Link href="/cours" className="text-cyan-500 font-bold hover:underline">
                        Retourner à la feuille de route
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}