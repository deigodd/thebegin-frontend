import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import backgroundImage from '../assets/background.jpg';

const HomePage: React.FC = () => {
  return (
    <div 
      className="flex flex-col min-h-screen" 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Navbar />
      <Footer />
    </div>
  );
};

export default HomePage;