import { BackgroundImage } from "../Hooks/ProfileHeader/BackgroundImage";
import { ProfileContentCard } from "../Hooks/ProfileHeader/ProfileContent";
import { QuoteCard } from "../Hooks/ProfileHeader/QuoteCard";
import { ProfileData } from "../../../data/profileData";
import BackgroundSettings from "../Hooks/BackgroundSectionSettings";

//saca la data para el header
interface ProfileHeaderProps {
  data: ProfileData['header'];
}

//header del perfil, integrando foto, QuoteCard y contenido de card
const ProfileHeader2: React.FC<ProfileHeaderProps> = ({ data }) => {
  return (
    <BackgroundImage imageUrl={data.backgroundImage}>
      {data.quote && <QuoteCard quote={data.quote} />}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        <ProfileContentCard
          name={data.name}
          subtitle={data.subtitle}
          description={data.description}
          profileImage={data.profileImage}
        />
      </div>
    </BackgroundImage>
  );
};

export default ProfileHeader2;