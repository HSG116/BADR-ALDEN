import { createContext, useContext, useState, ReactNode } from 'react';
import { BranchId } from '../lib/branch-data';

interface BranchContextType {
  activeBranch: BranchId;
  setActiveBranch: (id: BranchId) => void;
}

const BranchContext = createContext<BranchContextType | undefined>(undefined);

export function BranchProvider({ children }: { children: ReactNode }) {
  const [activeBranch, setActiveBranch] = useState<BranchId>('maadi');

  return (
    <BranchContext.Provider value={{ activeBranch, setActiveBranch }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch() {
  const context = useContext(BranchContext);
  if (context === undefined) {
    throw new Error('useBranch must be used within a BranchProvider');
  }
  return context;
}
