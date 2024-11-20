import React from 'react'

interface BackgroundTruequeProps {
  children: React.ReactNode
}

export default function BackgroundTrueque({ children }: BackgroundTruequeProps) {
  return (
    <div className="bg-[#8B7355] rounded-3xl p-8 relative overflow-hidden">
      {children}
    </div>
  )
}