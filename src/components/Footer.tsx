import React from "react";
import List from "./Footer/List";
import RightsAndConnections from "./Footer/RightsAndConnections";
//#4F2A1F FONDO
//#6B362A
//#FFFFFF texto

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#a56441] ">
      <div className="mx-auto w-full max-w-screen-xl">
        
        <List/>
        <RightsAndConnections/>
        
      </div>
    </footer>
  );
};

export default Footer;