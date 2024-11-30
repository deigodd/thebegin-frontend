'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface TicketPopupProps {
  isOpen: boolean
  onClose: () => void
}

const TicketPopup: React.FC<TicketPopupProps> = ({isOpen,onClose}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] text-tbc-primaryred-600">
        <DialogHeader>
          <DialogTitle>Pase a The Begin Fest</DialogTitle>
          <DialogDescription className='text-tbc-primarybrown-400'>
            ¡Oportunidad unica de conocer mujeres como tú, accede a ofertas y experiencias únicas!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>✨ Acceso a distintas areas durante todo el evento</p>
          <p>🎵 Música en vivo</p>
          <p>🍔 Cóctels e instancias de reunión</p>
          <p>🏕️ Meditación grupal al aire libre</p>
          <p className="text-2xl font-bold mt-4">Precio: $40</p>
        </div>
        <DialogFooter>
          <Button onClick={onClose} variant="outline">Cancelar</Button>
          <Button className='bg-tbc-pilarbrown-500 hover:bg-tbc-pilarbrown-600' onClick={() => {
            // Implement purchase logic here
            alert('¡Gracias por tu compra!')
            onClose()
          }}>
            ¡Comprar ahora!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TicketPopup;