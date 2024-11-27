import React from 'react'

type Props = {}

const ProfileTrueque = (props: Props) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-500 p-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Trueque</h2>
            <p>Sección para mostrar productos que estarán en el trueque, con enlace a información completa.</p>
          </div>
    </section>
  )
}

export default ProfileTrueque