import React from 'react'

type Props = {}

const ProfileCalendar = (props: Props) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-800 p-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Calendario</h2>
            <p className="text-white">Listado de actividades por fecha, con opción de consulta mediante formulario.</p>
          </div>
    </section>
  )
}

export default ProfileCalendar