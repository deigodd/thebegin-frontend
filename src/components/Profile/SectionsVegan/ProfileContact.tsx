import React from 'react'

type Props = {}

const ProfileContact = (props: Props) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black p-10">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Contacto</h2>
            <p className="text-white">Información de contacto para que los usuarios se comuniquen.</p>
          </div>
    </section>
  )
}

export default ProfileContact