import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SendIcon, PlusIcon, MenuIcon, XIcon } from "lucide-react";

type Chat = {
  id: string;
  name: string;
  lastMessage: string;
  startTime: number;
  messages: string[];
};

const HippieChat: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentChat, setCurrentChat] = useState<string | null>(null);
  const [chats, setChats] = useState<Chat[]>([
    {
      id: "1",
      name: "Nature Lovers",
      lastMessage: "Wow que buena idea!",
      startTime: Date.now(),
      messages: ["Hola! 🌿", "¿Te gusta la naturaleza?", "Hablemos sobre árboles!"],
    },
    {
      id: "2",
      name: "Peace",
      lastMessage: "NOOO JAJAJ",
      startTime: Date.now() - 1000000,
      messages: ["La paz es lo mejor.", "¡Meditemos juntos!"],
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newChatName, setNewChatName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const createNewChat = () => {
    if (newChatName.trim()) {
      const newChat: Chat = {
        id: (chats.length + 1).toString(),
        name: newChatName.trim(),
        lastMessage: "Nuevo chat creado",
        startTime: Date.now(),
        messages: ["¡Bienvenido a este nuevo chat! 🎉"],
      };
      setChats([newChat, ...chats]);
      setNewChatName("");
      setCurrentChat(newChat.id);
    }
  };

  const sendMessage = () => {
    if (newMessage.trim() && currentChat) {
      const updatedChats = chats.map((chat) =>
        chat.id === currentChat
          ? { ...chat, messages: [...chat.messages, newMessage], lastMessage: newMessage }
          : chat
      );
      setChats(updatedChats);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#FFF5E6] text-[#5D4037] font-['Caveat',_cursive] md:flex-row">
      {/* Sidebar */}
      <div
        className={`${
          collapsed ? "h-16 md:w-20" : "h-auto md:w-80"
        } border-r md:border-b border-[#F0E4D7] bg-tbc-pilarbrown-200 overflow-hidden md:overflow-visible md:flex-row transition-all`}
      >
        <div className="p-4 bg-[#F7D6E0] flex items-center justify-between md:justify-start">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-[#5D4037] hover:bg-[#F0E4D7] rounded-full p-1"
          >
            {collapsed ? <MenuIcon /> : <XIcon />}
          </button>
          {!collapsed && <span className="ml-4 text-2xl font-bold">Mesas de Té</span>}
        </div>
        {!collapsed && (
          <div className="p-2">
            <Input
              placeholder="Buscar una mesita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-[#D7E6E0] focus:ring-[#F7D6E0] focus:border-[#F7D6E0]"
            />
          </div>
        )}
        <ScrollArea className="flex-1">
          {filteredChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setCurrentChat(chat.id)}
              className={`w-full p-4 text-left hover:bg-tbc-primarybrown-300 transition-colors ${
                currentChat === chat.id ? "bg-tbc-pilarbrown-300" : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/thumbs/svg?seed=${chat.name}`} />
                  <AvatarFallback>{chat.name[0]}</AvatarFallback>
                </Avatar>
                {!collapsed && (
                  <div>
                    <div className="text-lg">{chat.name}</div>
                    <div className="text-sm text-[#8D6E63]">{chat.lastMessage}</div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </ScrollArea>
        <div className="p-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" className="bg-[#F7D6E0] hover:bg-[#F5C6D6] text-[#5D4037]">
                <PlusIcon />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#FFF5E6] border-[#F7D6E0]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Crear nueva mesa</DialogTitle>
              </DialogHeader>
              <Input
                placeholder="Nombre de la mesa"
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
      </div>

      {/* Chat display */}
      <div className="flex flex-col flex-1">
        {currentChat ? (
          <>
            <ScrollArea className="flex-1 p-4 space-y-4 bg-[url('/floral-bg.png')] bg-repeat">
              {chats
                .find((chat) => chat.id === currentChat)
                ?.messages.map((msg, index) => (
                  <div key={index} className="flex justify-start py-1">
                    <div className="bg-white rounded-lg p-3 max-w-[70%] shadow-md">
                      <p className="text-lg">{msg}</p>
                    </div>
                  </div>
                ))}
            </ScrollArea>
            {/* Input Bar */}
            <div className="p-4 border-t border-[#F0E4D7] flex items-center space-x-2 bg-[#FFF5E6]">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-white border-[#D7E6E0] focus:ring-[#F7D6E0] focus:border-[#F7D6E0]"
              />
              <Button
                onClick={sendMessage}
                className="bg-[#F7D6E0] hover:bg-[#F5C6D6] text-[#5D4037]"
              >
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
  );
};

export default HippieChat;
