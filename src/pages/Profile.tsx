import React, { useEffect, useState } from 'react';
import UserOptions from '../components/UserOptions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileHeader from '../components/Profile/Sections/ProfileHeader';
import ProfileProjects from '../components/Profile/Sections/ProfileProjects';
import ProfileServiceProduct from '../components/Profile/Sections/ProfileServiceProduct';
import ProfileWorkshops from '../components/Profile/Sections/ProfileWorkshops';
import ProfileTrueque from '../components/Profile/Sections/ProfileTrueque';
import ProfileMarketplace from '../components/Profile/Sections/ProfileMarketplace';
import ProfileMembership from '../components/Profile/Sections/ProfileMembership';
import ProfileCalendar from '../components/Profile/Sections/ProfileCalendar';
import ProfileNews from '../components/Profile/Sections/ProfileNews';
import ProfileContact from '../components/Profile/Sections/ProfileContact';
import ProfilePresentation from '../components/Profile/Sections/ProfilePresentation';

const Profile = () => {

  return (
    <>
      <UserOptions />
      <Navbar />

      <div className="bg-white">
        {/* Encabezado */}
        
        <ProfileHeader />
        <ProfilePresentation />
        <ProfileProjects />
        <ProfileServiceProduct />
        <ProfileWorkshops />
        <ProfileTrueque/>
        <ProfileMarketplace/>
        <ProfileMembership/>
        <ProfileCalendar/>
        <ProfileNews/>
        <ProfileContact/>

      </div>
      
      <Footer />
    </>
  );
};

export default Profile;
