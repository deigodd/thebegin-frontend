'use client'
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Mail, Phone, MapPin, Briefcase, Heart, Star, Share2, Search, Info } from 'lucide-react'
import Navbar from "@/components/Navbar"
import Footer2 from "@/components/Footer/Footer"

interface ProfileData {
  firstName: string
  lastName: string
  birthDate: string
  phone: string
  email: string
  country: string
  city: string
  profession: string
  hobbies: string[]
  abilities: string[]
  interests: string[]
  findings: string[]
  shares: string[]
  user: string
}

export default function ArtisticProfile() {
    const [data, setData] = useState<ProfileData | null>(null)
    const [error, setError] = useState<string | null>(null) 

    const username = localStorage.getItem("email")

    useEffect(() => {
      // Fetch user data from the server
      const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/getUser/${username}`)
          if (!response.ok) {
            throw new Error("Usuario no encontrado o error en el servidor")
          }
          const userData: ProfileData = await response.json()
          setData(userData)
        } catch (err: any) {
          setError(err.message)
        }
      }
  
      fetchUserData()
    }, [username])
  
    if (error) {
      return (
        <Alert className="mb-6 bg-red-100 text-red-800">
          <Info className="h-4 w-4" />
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      )
    }
  
    if (!data) {
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <p className="text-gray-600 text-lg">Cargando...</p>
        </div>
      )
    }
  
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen bg-[#f5f5f3] p-6 font-serif relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 bg-cover bg-center" />
        
        <Alert className="mb-6 bg-white/50 backdrop-blur z-10 relative">
            <Info className="h-4 w-4" />
            <AlertDescription>
            Esto solo es un mockup, podrás editar tu página WEB!
            </AlertDescription>
        </Alert>
        
        <Card className="mx-auto max-w-4xl border-none bg-white/80 backdrop-blur shadow-lg relative z-10">
            <CardContent className="p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                <div className="space-y-6 relative">
                <div className="text-center">
                    <div className="h-40 w-40 mx-auto rounded-full bg-[#e9e9e7] flex items-center justify-center text-5xl font-light border-4 border-[#d4d4d0] shadow-inner">
                    {data.firstName[0]}{data.lastName[0]}
                    </div>
                    <h1 className="mt-4 text-3xl font-light capitalize tracking-wide">
                    {data.firstName} {data.lastName}
                    </h1>
                    <p className="text-sm text-muted-foreground italic">@{data.user}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#a0a09e]" />
                    <span className="font-light">{data.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#a0a09e]" />
                    <span className="font-light">{data.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#a0a09e]" />
                    <span className="font-light">{data.city}, {data.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-[#a0a09e]" />
                    <span className="font-light capitalize">{data.profession}</span>
                    </div>
                </div>
                </div>

                <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-10">
                    {[
                    { title: "Improvisación", icon: Heart, items: data.hobbies },
                    { title: "Magia", icon: Star, items: data.abilities },
                    { title: "Pasión", icon: Search, items: data.interests },
                    { title: "Mis Obras", icon: Info, items: data.findings },
                    { title: "Comparto", icon: Share2, items: data.shares }
                    ].map((section, index) => (
                    <section key={index}>
                        <h2 className="flex items-center gap-2 text-2xl font-light mb-4">
                        <section.icon className="h-6 w-6 text-[#a0a09e]" />
                        {section.title}
                        </h2>
                        <Separator className="my-2 bg-[#e9e9e7]" />
                        <div className="flex flex-wrap gap-2 mt-4">
                        {section.items.map((item, itemIndex) => (
                            <Badge 
                            key={itemIndex} 
                            variant="secondary" 
                            className="bg-[#e9e9e7] text-[#6c6c6a] font-light px-3 py-1 rounded-full"
                            >
                            {item}
                            </Badge>
                        ))}
                        </div>
                    </section>
                    ))}
                </div>
                </ScrollArea>
            </div>
            </CardContent>
        </Card>
        
        </div>
        <Footer2/>
    </div>
  )
}

