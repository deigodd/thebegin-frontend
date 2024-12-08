import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InfoCard from './InfoCard';
import ContentDisplay from './ContentDisplay';

const InformationComponent: React.FC = () => {
    const [selectedContent, setSelectedContent] = useState({
        title: '¿Qué es y para qué?',
        content: 'Somos una comunidad que impulsa el crecimiento y la conexión de las mujeres, fomentando redes colaborativas para apoyarnos mutuamente en nuestro desarrollo integral. \n Es un espacio virtual que conecta, empodera y promueve el bienestar, sostenibilidad, arte, habilidades y tiempo de calidad entre las socias. En el ritmo frenético actual, la mujer moderna, enfrentándose a múltiples roles y desafíos, necesita un espacio digital para priorizar su propio cuidado y bienestar. \n THE BEGIN propone una pausa para reconectar consigo misma, recordándonos que cuidarnos no es un lujo, sino una necesidad.' 
    });

    const contentData = [
        { title: '¿Qué es y para qué?', 
        content: 'Somos una comunidad que impulsa el crecimiento y la conexión de las mujeres, fomentando redes colaborativas para apoyarnos mutuamente en nuestro desarrollo integral. \n Es un espacio virtual que conecta, empodera y promueve el bienestar, sostenibilidad, arte, habilidades y tiempo de calidad entre las socias. En el ritmo frenético actual, la mujer moderna, enfrentándose a múltiples roles y desafíos, necesita un espacio digital para priorizar su propio cuidado y bienestar. \n THE BEGIN propone una pausa para reconectar consigo misma, recordándonos que cuidarnos no es un lujo, sino una necesidad.',
        image:'https://www.thebegin.org/wp-content/uploads/2023/12/mujeres_brazos.png' },
        { title: '¿Cómo funciona?', 
        content: 'Nuestra plataforma  es un match colaborativo, basado en coincidencias. Te registras en la plataforma, y según tus interés, profesión u ocupación, modelos de negocio, intereses particulares, necesidades de información, preferencias de interacción específicas. Podrás crear un perfil que te permitirá, no solo interactuar con otras mujeres, conocerse, armar redes. Si no que intercambiar, productos o necesidades, como también utilizar nuestro sistema del Trueque. Necesitas servicios y no tienes cómo acceder a ello, y quieres cambiarlos por los tuyos o por tus productos, a través de nuestra plataforma hoy es posible. En tu perfil, podrás acceder intercambiar tus productos o servicios, también promover tus productos, o actividades, cursos etc.  Basándonos en un módulo de economía colaborativa (ventas y Trueke). Podrás buscar gente a fin, ya sea a tu alrededor, como en otra ciudad o país, para promover tus servicios,  productos como para conocer gente y ampliar tu círculo. También para convocarlas a una chat y /o charla, de un tema que te interese.',
        image:'https://www.thebegin.org/wp-content/uploads/2024/01/dispositivos_mokcup-1024x684.png' },
        { title: 'Beneficios para ti', 
        content: 'Al ser parte de la comunidad de mujeres más importante, en THE BEGIN disfrutarás de los diversos beneficios y experiencias: Conectar con otras mujeres según tus intereses, intercambiar productos o servicios a través del trueque, asesorías profesionales en distintas áreas, acceder aportes para el desarrollo de tus proyectos, participar en charlas en diversos temas, obtener descuentos en productos, asistir a eventos especiales, experiencias y salidas, membresía o descuentos en centros deportivos, centros de salud integral, estética y belleza, productos de regalo, invitación a capacitaciones, entrada al CareFest, Gran Festival anual.',
        image:'https://www.thebegin.org/wp-content/uploads/2023/12/mujeres_abrazo.png' },
        { title: 'Nuestro ADN', 
        content: 'La esencia de la mujer es lo que define nuestra comunidad, una comunidad de mujeres para mujeres…, nuestro ADN es proveer el espacio para aquello que las mujeres siempre hemos querido como punto de encuentro y apoyo a todos los aspectos de nuestra vida.',
        image:'https://www.thebegin.org/wp-content/uploads/2023/12/m_16.jpg' },
        { title: 'Sobre Nosotras', 
        content: 'Somos un grupo comprometido y conscientes de la necesidad actual en torno al cuidado y bienestar de la mujer. Nuestra misión es construir comunidad, crear redes sólidas y dejar un legado duradero en base a reunir a mujeres diversas para empoderar, inspirar y apoyar. Aunque el camino no es fácil, sabemos que no estamos solas…, contamos contigo',
        image:'https://www.thebegin.org/wp-content/uploads/2023/12/m_12.jpg' },
    ];

    const handleCardClick = (title: string, content: string) => {
        setSelectedContent({ title, content });
        const marketProductsDiv = document.getElementById("InfoCard");
        if (marketProductsDiv) {
          marketProductsDiv.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 p-8">
            <div className="md:w-2/3">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedContent.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ContentDisplay title={selectedContent.title} content={selectedContent.content} />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="md:w-1/3 flex flex-col gap-4">
                {contentData.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                        <InfoCard
                            title={item.title}
                            imagePath={item.image}
                            onClick={() => handleCardClick(item.title, item.content)}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default InformationComponent;

