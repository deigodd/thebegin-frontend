import TruequeData from '../../../data/Profile2/TruequeData.json'
import BackgroundTrueque from '../Hooks/Trueque/BackgroundTrueque';
import TruequeCard from '../Hooks/Trueque/TruequeCard';
import TruequeButton from '../Hooks/Trueque/ButtonTrueque';

const ProfileTrueque = () => {
    const { mainImage, infoBox } = TruequeData;

  return (
    <div className="min-h-screen bg-[#FBF4EC] py-12 relative">
      <div className="container mx-auto px-4">

        <div className="absolute inset-0 max-y-2/3 -bottom-8 w-2/3 left-1/2 transform -translate-x-1/2">
            <BackgroundTrueque />
          </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Background Card */}
          

          {/* Trueque Title Card */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform z-20">
            <TruequeCard />
          </div>

          {/* Main Content */}
          <div className="relative pt-24 pb-32">
          <img
              src={mainImage.src}
              alt={mainImage.alt}
              className={`w-${mainImage.width} h-[${mainImage.height}] object-cover shadow-lg`}
            />

            {/* Green Info Box */}
        {/* Green Info Box */}
          <div className="absolute top-[calc(730px-120px)] sm:top-[calc(730px-90px)] left-16 right-16 z-10">
            <div className="bg-tbc-pilargreen-600 text-white p-8 rounded-3xl shadow-lg">
              <p className="text-xl md:text-xl text-center font-light">
                {infoBox.text}
              </p>
            </div>
          </div>

            {/* Call to Action Button */}
            <div className="absolute bottom-[calc(120px-80px)] left-1/2 -translate-x-1/2 z-20">
              <TruequeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTrueque;