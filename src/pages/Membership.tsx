import React from 'react';
import Navbar from '../components/Navbar';
import CategoriesSidebar from '../components/CategoriesSidebar';
import Footer from '../components/Footer';
import { Card, CardHeader, CardContent, CardFooter } from '../components/Card';
import { Button } from '../components/Card';

interface MembershipTierProps {
  name: string;
  price: number;
  period: string;
  benefits: string[];
  isPopular?: boolean;
}

const MembershipTier: React.FC<MembershipTierProps> = ({
  name,
  price,
  period,
  benefits,
  isPopular
}) => {
  return (
    <Card className={`relative ${isPopular ? 'border-2 border-orange-500' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 right-4">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm">
            Popular
          </span>
        </div>
      )}
      <CardHeader>
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="mt-2">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-500">/{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-orange-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant={isPopular ? 'default' : 'outline'}
          className="w-full"
        >
          Suscribirse
        </Button>
      </CardFooter>
    </Card>
  );
};

const MembershipPage: React.FC = () => {
  const membershipTiers = [
    {
      name: "Básico",
      price: 8.990,
      period: "mes",
      benefits: [
        "Clases Personalizadas de cocina",
        "Descuentos en productos de huerta",
        "Talleres de cultivo y riego",
        "Cursos online"
      ]
    },
    {
      name: "Gold",
      price: 12.990,
      period: "mes",
      benefits: [
        "Todo lo del plan Básico",
        "Acceso a Encuentros VIP",
        "Acceso a Talleres en vivo",
        "Descuentos en stand para la feria anual",
        "Sorteos"
      ],
      isPopular: true
    },
    {
      name: "Pro",
      price: 19.990,
      period: "mes",
      benefits: [
        "Todo lo del plan Gold",
        "Mentoría mensual",
        "Acceso a red de contactos",
        "Promoción destacada",
        "Soporte 24/7",
        "Espacio en marketplace destacado"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <CategoriesSidebar />
        <main className="flex-1 bg-gray-50">
          <div className="py-12 px-4 sm:px-6 lg:px-8">

            {/* Hero Section / Barra principal*/}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-8 mb-12 text-white text-center">
              <h1 className="text-4xl font-bold mb-4">
                Membresía Exclusiva
              </h1>
              <p className="text-xl">
                Únete a nuestra comunidad y accede a beneficios exclusivos para potenciar tu crecimiento
              </p>
            </div>

            {/* Tiers de Membresias */}
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {membershipTiers.map((tier, index) => (
                  <MembershipTier key={index} {...tier} />
                ))}
              </div>

              {/* Seccion de beneficios adicionales */}

              <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-8">Beneficios adicionales para todas las miembros</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardContent>
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Comunidad Exclusiva</h3>
                      <p className="text-gray-600">Conéctate con otras emprendedoras y comparte experiencias</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Recursos Exclusivos</h3>
                      <p className="text-gray-600">Accede a materiales y herramientas para tu crecimiento</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Soporte Prioritario</h3>
                      <p className="text-gray-600">Asistencia personalizada para todas tus consultas</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MembershipPage;