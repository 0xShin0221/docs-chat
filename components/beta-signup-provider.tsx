"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useBetaSignup } from "@/hooks/use-beta-signup"
import { BetaSignupModal } from "@/components/beta-signup-modal"

type BetaSignupContextType = {
  openBetaSignup: (source?: string) => void
}

const BetaSignupContext = createContext<BetaSignupContextType | undefined>(undefined)

export function useBetaSignupContext() {
  const context = useContext(BetaSignupContext)
  if (context === undefined) {
    throw new Error("useBetaSignupContext must be used within a BetaSignupProvider")
  }
  return context
}

export function BetaSignupProvider({ children }: { children: ReactNode }) {
  const { isModalOpen, source, openModal, closeModal } = useBetaSignup()

  return (
    <BetaSignupContext.Provider value={{ openBetaSignup: openModal }}>
      {children}
      <BetaSignupModal isOpen={isModalOpen} onClose={closeModal} source={source} />
    </BetaSignupContext.Provider>
  )
}

