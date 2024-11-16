//import React, { useEffect, useState } from 'react';
//import UserOptions from '../components/'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import ProfileServiceProduct from '../components/Profile/Sections/ProfileServiceProduct';
import ProfileWorkshops from '../components/Profile/Sections/ProfileWorkshops';
import ProfileTrueque from '../components/Profile/Sections/ProfileTrueque';
import ProfileMarketplace from '../components/Profile/Sections/ProfileMarketplace';
import ProfileMembership from '../components/Profile/Sections/ProfileMembership';
import ProfileCalendar from '../components/Profile/Sections/ProfileCalendar';
import ProfileNews from '../components/Profile/Sections/ProfileNews';
import ProfileContact from '../components/Profile/SectionsVegan/ProfileContact';
import ProfilePresentation from '../components/Profile/SectionsVegan/ProfilePresentation';
import ProfileProjects from '../components/Profile/SectionsVegan/ProfileProjects';
import ProfileHeader2 from '../components/Profile/SectionsVegan/ProfileHeader';

const Profile2 = () => {

  return (
    <>
      { /* <UserOptions />  */}
      <Navbar />

      <div className="bg-white">
        {/* Encabezado */}
        
        <ProfileHeader2 />
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

export default Profile2;