import React, { useEffect, useRef, useState } from 'react';
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
import useIntersectionObserver from '../components/Profile/Hooks/useIntersectionObserver';




const Profile = () => {
  const sectionRefs = {
    presentation: useRef(null),
    projects: useRef(null),
    serviceProduct: useRef(null),
    workshops: useRef(null),
    trueque: useRef(null),
    marketplace: useRef(null),
    membership: useRef(null),
    calendar: useRef(null),
    news: useRef(null),
    contact: useRef(null),
  };

  const sections = Object.values(sectionRefs).map((ref) => ref.current);
  const visibleSections = useIntersectionObserver(sections, { threshold: 0.5 });


  return (
    <>
      <UserOptions />
      <Navbar />

      <div className="bg-white">
        {/* Encabezado */}
        
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
