import { Button } from "flowbite-react"

interface ButtonTruequeProps {
  onClick?: () => void
}

export default function ButtonTrueque({ onClick }: ButtonTruequeProps) {
  return (
    <Button 
      className="bg-[#D4C4B5] text-[#594A3C] hover:bg-[#C0B0A1] px-8 py-2 rounded-full"
      onClick={onClick}
    >
      <span className="font-medium">VER MÁS</span>
      <span className="font-handwriting ml-2 text-lg">Aquí</span>
    </Button>
  )
}