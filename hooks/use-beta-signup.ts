"use client"

import { useState, useCallback } from "react"

export function useBetaSignup() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [source, setSource] = useState<string>("general")

  const openModal = useCallback((buttonSource = "general") => {
    setSource(buttonSource)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return {
    isModalOpen,
    source,
    openModal,
    closeModal,
  }
}

