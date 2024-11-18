import React, { useState } from "react";
import Match from "../components/Match/Match";
import Navbar from "../components/Navbar";
import Banner from "../components/Match/Banner";
import { ActivityHeader } from "../components/Match/ActivityHeader";
import Footer from "../components/Footer/Footer";

const Activity: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f4f0]">
      <Navbar />

      <div className="flex-1">
        {/* Banner Section */}
        <Banner />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-5">
          {/* Search Bar */}

          {/* Activity Header */}
          <ActivityHeader matchCount={850} />

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
