'use client'

import { useState } from 'react'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import TicketPopup from './TicketPopup'

const TicketCard: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <div className="rounded-xl shadow-md max-w-2xl mx-auto bg-tbc-primaryred-100 text-tbc-primaryred-600">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-4">Pase al Festival</h3>
          <p className="mb-4">¡No te pierdas la oportunidad de reunirte con miles de mujeres!</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsPopupOpen(true)} className="w-full bg-tbc-pilarbrown-500 hover:bg-tbc-pilarbrown-600">
            Ver detalles y comprar
          </Button>
        </CardFooter>
      </div>
      <TicketPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

export default TicketCard;