import React, { useState } from "react";
import Match from "../components/Match/Match";
import Navbar from "../components/Navbar";
import Banner from "../components/Match/Banner";
import  {SearchBar2} from "../components/SearchBar/Bar2";
import { ActivityHeader } from "../components/Match/ActivityHeader";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/background-home.svg";

const Activity: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-tbc-primarybrown-100"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}>

      <Navbar />

      <div className="flex-1">
        {/* Banner Section */}
        <Banner />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-5">
          {/* Search Bar */}
          <SearchBar2 onSearch={handleSearch}/>

          {/* Activity Header */}
          <ActivityHeader matchCount={7} />

          {/* Matches Grid */}
          <div className="flex flex-col md:flex-row flex-1">
            <div className="w-full">
              <Match searchQuery={searchQuery} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Activity;