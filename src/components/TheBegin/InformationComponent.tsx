// pages/Home.tsx
import React, { useState } from 'react';
import InfoCard from './InfoCard';
import ContentDisplay from './ContentDisplay';

const InformationComponent: React.FC = () => {
    const [selectedContent, setSelectedContent] = useState({
        title: '¿Qué es y para qué?',
        content: 'Somos una comunidad que impulsa el crecimiento y la conexión de las mujeres, fomentando redes colaborativas para apoyarnos mutuamente en nuestro desarrollo integral. \n Es un espacio virtual que conecta, empodera y promueve el bienestar, sostenibilidad, arte, habilidades y tiempo de calidad entre las socias. En el ritmo frenético actual, la mujer moderna, enfrentándose a múltiples roles y desafíos, necesita un espacio digital para priorizar su propio cuidado y bienestar. \n THE BEGIN propone una pausa para reconectar consigo misma, recordándonos que cuidarnos no es un lujo, sino una necesidad.' 
    });

    const contentData = [
        { title: '¿Qué es y para qué?', content: 'Somos una comunidad que impulsa el crecimiento y la conexión de las mujeres, fomentando redes colaborativas para apoyarnos mutuamente en nuestro desarrollo integral. \n Es un espacio virtual que conecta, empodera y promueve el bienestar, sostenibilidad, arte, habilidades y tiempo de calidad entre las socias. En el ritmo frenético actual, la mujer moderna, enfrentándose a múltiples roles y desafíos, necesita un espacio digital para priorizar su propio cuidado y bienestar. \n THE BEGIN propone una pausa para reconectar consigo misma, recordándonos que cuidarnos no es un lujo, sino una necesidad.' },
        { title: '¿Cómo funciona?', content: 'Nuestra plataforma  es un match colaborativo, basado en coincidencias. Te registras en la plataforma, y según tus interés, profesión u ocupación, modelos de negocio, intereses particulares, necesidades de información, preferencias de interacción específicas. Podrás crear un perfil que te permitirá, no solo interactuar con otras mujeres, conocerse, armar redes. Si no que intercambiar, productos o necesidades, como también utilizar nuestro sistema del Trueque. Necesitas servicios y no tienes cómo acceder a ello, y quieres cambiarlos por los tuyos o por tus productos, a través de nuestra plataforma hoy es posible. En tu perfil, podrás acceder intercambiar tus productos o servicios, también promover tus productos, o actividades, cursos etc.  Basándonos en un módulo de economía colaborativa (ventas y Trueke). Podrás buscar gente a fin, ya sea a tu alrededor, como en otra ciudad o país, para promover tus servicios,  productos como para conocer gente y ampliar tu círculo. También para convocarlas a una chat y /o charla, de un tema que te interese.' },
        { title: 'Beneficios para ti', content: 'Detalles de los beneficios...' },
        { title: 'Nuestro ADN', content: 'Información sobre el ADN de la comunidad...' },
        { title: 'Sobre Nosotras', content: 'Descripción sobre el equipo...' },
    ];

    const handleCardClick = (title: string, content: string) => {
        setSelectedContent({ title, content });
    };

    return (
        <div className="flex gap-4 w-full">
            <div className="w-2/3 h-fill">
                <ContentDisplay title={selectedContent.title} content={selectedContent.content} />
            </div>
            <div className="grid gap-y-2 py-8 w-1/3">
                {contentData.map((item, index) => (
                    <InfoCard
                        key={index}
                        title={item.title}
                        onClick={() => handleCardClick(item.title, item.content)}
                    />
                ))}
            </div>
        </div>
    );
};

export default InformationComponent;
