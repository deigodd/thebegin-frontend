import Navbar from '../components/Navbar';
import ProfileProjects from '../components/Profile/Sections/ProfileProjects';
import ProfileServiceProduct from '../components/Profile/Sections/ProfileServiceProduct';
import ProfileTrueque from '../components/Profile/Sections/ProfileTrade';
import ProfileMarketplace from '../components/Profile/Sections/ProfileMarketplace';
import ProfileMembership from '../components/Profile/Sections/ProfileMembership';
import ProfileCalendar from '../components/Profile/Sections/ProfileCalendar';
import ProfileNews from '../components/Profile/Sections/ProfileNews';
import ProfileContact from '../components/Profile/Sections/ProfileContact';
import ProfilePresentation from '../components/Profile/Sections/ProfilePresentation';
import Footer from '../components/Footer/Footer';




const Profile = () => {

  return (
    <>
      <Navbar />

      <div className="bg-white">
        {/* Encabezado */}
        
        <ProfilePresentation />
        <ProfileProjects />
        <ProfileServiceProduct />
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
