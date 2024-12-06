import React, { useState } from "react";
import { motion } from "framer-motion";
import Match from "../components/Match/Match";
import Navbar from "../components/Navbar";
import Banner from "../components/Match/Banner";
import { SearchBar2 } from "../components/SearchBar/Bar2";
import { ActivityHeader } from "../components/Match/ActivityHeader";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/background-home.svg";

const Activity: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col min-h-screen bg-tbc-primarybrown-100`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      <div className="flex-1">
        <Banner />

        <div className="max-w-7xl mx-auto px-4 py-5">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <SearchBar2 onSearch={handleSearch} />
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ActivityHeader matchCount={7} />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col md:flex-row flex-1"
          >
            <div className="w-full">
              <Match searchQuery={searchQuery} />
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Activity;