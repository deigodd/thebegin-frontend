import React from 'react'

type Props = {}

const ProfileMarketplace = (props: Props) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-600 p-10">
        <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Marketplace</h2>
            <p>Presentación de productos en el Marketplace, con enlace a la tienda online.</p>
        </div>
    </section>
  )
}

export default ProfileMarketplace