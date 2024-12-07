import React from 'react';
import { motion } from 'framer-motion';
import Info from '../components/TheBegin/InformationComponent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import PageSeparator from '../components/PageSeparator';
import DesafioLatam from '../components/TheBegin/DesafioLatam';
import backgroundImage from '../assets/background-marketplace.svg';

const TheBeginPage: React.FC = () => {
  return (
    //Animacion de entrada
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif text-tbc-primarybrown-600 text-center mb-12"
        >
          The Begin
        </motion.h1>
        
        {/* Sección de información */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden">
            <Info />
          </div>
        </motion.section>
      </div>

        <PageSeparator title='Desafío LATAM' />
      <div className='container mx-auto px-4 py-8'>
        {/* Sección del desafío LATAM */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden">
            <DesafioLatam />
          </div>
        </motion.section>
      </div>
      
      <Footer />
    </motion.div>
  );
};

export default TheBeginPage;

