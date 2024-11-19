import React, { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SendIcon, SmileIcon, PlusIcon, ClockIcon } from 'lucide-react'

type Chat = {
  id: string;
  name: string;
  lastMessage: string;
  startTime: number;
}

const HippieChat: React.FC = () => {
  const [currentChat, setCurrentChat] = useState<string | null>(null)
  const [chats, setChats] = useState<Chat[]>([
    { id: '1', name: 'Nature Lovers', lastMessage: 'Wow que buena idea!', startTime: Date.now() },
    { id: '2', name: 'Peace', lastMessage: 'NOOO JAJAJ', startTime: Date.now() - 1000000 },
    { id: '3', name: 'Junta de divas', lastMessage: 'Super, nos vemos!', startTime: Date.now() - 2000000 },
    { id: '4', name: 'Actualidad', lastMessage: 'Que tal?', startTime: Date.now() - 5000000 },
    { id: '5', name: 'Free Spirits', lastMessage: 'Latest message...', startTime: Date.now() - 8000000 },
  ])
  const [searchTerm, setSearchTerm] = useState('')
  const [newChatName, setNewChatName] = useState('')
  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  useEffect(() => {
    if (currentChat) {
      const chat = chats.find(c => c.id === currentChat)
      if (chat) {
        const interval = setInterval(() => {
          const elapsed = Date.now() - chat.startTime
          const left = Math.max(0, 10800000 - elapsed) // 3 hours in milliseconds
          setTimeLeft(left)
        }, 1000)
        return () => clearInterval(interval)
      }
    }
  }, [currentChat, chats])

  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const createNewChat = () => {
    if (newChatName.trim()) {
      const newChat: Chat = {
        id: (chats.length + 1).toString(),
        name: newChatName.trim(),
        lastMessage: 'Nuevo chat creado',
        startTime: Date.now()
      }
      setChats([newChat, ...chats])
      setNewChatName('')
      setCurrentChat(newChat.id)
    }
  }

  const formatTimeLeft = (ms: number) => {
    const hours = Math.floor(ms / 3600000)
    const minutes = Math.floor((ms % 3600000) / 60000)
    return `${hours}h ${minutes}m left`
  }

  return (
    <div className="flex h-screen bg-[#FFF5E6] text-[#5D4037] font-['Caveat',_cursive]">
      {/* Left Panel - Groups */}
      <div className="w-80 border-r border-[#F0E4D7] bg-[#FCF3E3] flex flex-col">
        <div className="p-4 bg-[#F7D6E0] text-2xl font-bold text-center">
          Mesas de Té
        </div>
        <div className="p-2 flex space-x-2">
          <Input 
            placeholder="Buscar una mesita..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-white border-[#D7E6E0] focus:ring-[#F7D6E0] focus:border-[#F7D6E0]"
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" className="bg-[#F7D6E0] hover:bg-[#F5C6D6] text-[#5D4037]">
                <PlusIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#FFF5E6] border-[#F7D6E0]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Create New Chat</DialogTitle>
              </DialogHeader>
              <Input 
                placeholder="Enter chat name" 
                value={newChatName}
                onChange={(e) => setNewChatName(e.target.value)}
                className="bg-white border-[#D7E6E0] focus:ring-[#F7D6E0] focus:border-[#F7D6E0]"
              />
              <Button onClick={createNewChat} className="bg-[#F7D6E0] hover:bg-[#F5C6D6] text-[#5D4037]">
                Crear Mesa
              </Button>
            </DialogContent>
          </Dialog>
        </div>
        <ScrollArea className="flex-1">
          {filteredChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setCurrentChat(chat.id)}
              className={`w-full p-4 text-left hover:bg-[#F0E4D7] transition-colors ${
                currentChat === chat.id ? 'bg-[#F0E4D7]' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/thumbs/svg?seed=${chat.name}`} />
                  <AvatarFallback>{chat.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-lg">{chat.name}</div>
                  <div className="text-sm text-[#8D6E63]">{chat.lastMessage}</div>
                </div>
              </div>
            </button>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Display */}
      <div className="flex-1 flex flex-col">
        {currentChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-[#E6F3EC] border-b border-[#D7E6E0] flex items-center justify-between">
              <div className="text-2xl font-bold">{chats.find(c => c.id === currentChat)?.name}</div>
              <div className="flex items-center space-x-2 text-[#8D6E63]">
                <ClockIcon className="w-5 h-5" />
                <span>{timeLeft !== null ? formatTimeLeft(timeLeft) : ''}</span>
              </div>
            </div>

            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4 space-y-4 bg-[url('/floral-bg.png')] bg-repeat">
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-3 max-w-[70%] shadow-md">
                  <p className="text-lg">Hey qué tal? como están! 🌸</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#E1F5FE] rounded-lg p-3 max-w-[70%] shadow-md">
                  <p className="text-lg">Holaaa! Todo bien!!</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-3 max-w-[70%] shadow-md">
                  <p className="text-lg">¿Y si planeamos un nuevo viaje?! 🏕️</p>
                </div>
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 bg-[#E6F3EC] border-t border-[#D7E6E0] flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-[#8D6E63]">
                <SmileIcon />
              </Button>
              <Input 
                placeholder="Qué cuentas..." 
                className="flex-1 bg-white border-[#D7E6E0] focus:ring-[#F7D6E0] focus:border-[#F7D6E0] text-lg"
              />
              <Button size="icon" className="bg-[#F7D6E0] hover:bg-[#F5C6D6] text-[#5D4037]">
                <SendIcon />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-2xl text-[#8D6E63]">
            Selecciona una mesa de Té o empieza una...
          </div>
        )}
      </div>
    </div>
  )
}
export default  HippieChat;