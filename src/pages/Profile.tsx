import React, { useEffect, useState } from 'react';
import UserOptions from '../components/UserOptions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfilePresentation from '../components/Profile/ProfilePresentation';
import ProfileProjects from '../components/Profile/ProfileProjects';
import ProfileServiceProduct from '../components/Profile/ProfileServiceProduct';
import ProfileWorkshops from '../components/Profile/ProfileWorkshops';
import ProfileTrueque from '../components/Profile/ProfileTrueque';
import ProfileMarketplace from '../components/Profile/ProfileMarketplace';
import ProfileMembership from '../components/Profile/ProfileMembership';
import ProfileCalendar from '../components/Profile/ProfileCalendar';
import ProfileNews from '../components/Profile/ProfileNews';
import ProfileContact from '../components/Profile/ProfileContact';

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
