import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import ProfileServiceProduct from '../components/Profile/SectionsVegan/ProfileServiceProduct';
import ProfileTrueque from '../components/Profile/SectionsVegan/ProfileTrueque';
import ProfileMarketplace from '../components/Profile/SectionsVegan/ProfileMarketplace';
import ProfileMembership from '../components/Profile/SectionsVegan/ProfileMembership';
import ProfileCalendar from '../components/Profile/SectionsVegan/ProfileCalendar';
import ProfileNews from '../components/Profile/SectionsVegan/ProfileNews';
import ProfileContact from '../components/Profile/SectionsVegan/ProfileContact';
import ProfilePresentation from '../components/Profile/SectionsVegan/ProfilePresentation';
import ProfileProjects from '../components/Profile/SectionsVegan/ProfileProjects';
import ProfileHeader from '../components/Profile/SectionsVegan/ProfileHeader';

const Profile2 = () => {

  return (
    <>
      { /* <UserOptions />  */}
      <Navbar />

      <div className="bg-white">
        {/* Encabezado */}
        <ProfileHeader />
        <ProfilePresentation />
        <ProfileServiceProduct/>
        <ProfileProjects />
        <ProfileCalendar/>
        <ProfileMembership/>
        <ProfileNews/>
        <ProfileTrueque/>
        <ProfileMarketplace/>
        <ProfileContact/>

      </div>
      
      <Footer />
    </>
  );
};

export default Profile2;