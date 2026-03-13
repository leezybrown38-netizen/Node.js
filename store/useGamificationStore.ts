import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GamificationState {
  xp: number;
  level: number;
  badges: string[];
  addXP: (amount: number) => void;
  unlockBadge: (badge: string) => void;
}

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set) => ({
      xp: 0,
      level: 1,
      badges: [],
      
      addXP: (amount) => set((state) => {
        const newXp = state.xp + amount;
        
        const newLevel = Math.floor(newXp / 100) + 1; 
        
        return { 
          xp: newXp, 
          level: newLevel 
        };
      }),

      unlockBadge: (badge) => set((state) => {
        if (state.badges.includes(badge)) return state;
        return { badges: [...state.badges, badge] };
      }),
    }),
    {
      name: 'wiki-learn-storage', 
    }
  )
);