import React from 'react'

type Props = {}

const ProfileNews = (props: Props) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 p-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Noticias</h2>
            <p className="text-white">Sección para comunicados, pedidos y ofrecimientos con opción de respuesta.</p>
          </div>
    </section>
  )
}

export default ProfileNews