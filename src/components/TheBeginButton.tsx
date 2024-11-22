import React from "react";
import logo from '../assets/icons/svg/tb-icon-outline-white.svg'

interface ButtonProps {
    label: string;
}

const TheBeginButton: React.FC<ButtonProps> = ({ label }) => {
    return (
        <button 
        className={`flex overflow-hidden w-48 h-8 bg-tbc-primaryred-600 text-white text-bold rounded-sm hover:bg-tbc-primarybrown-600 transition-colors duration-300 hover:scale-105`}
        >
            <img src={logo} className="w-12 h-12 -translate-x-5 -translate-y-2"/>  
            <span className="ml-8 my-auto">{label}</span>
        </button>
    );
};

export default TheBeginButton;
