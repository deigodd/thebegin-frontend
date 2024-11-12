interface ProfileContentCardProps {
    name: string;
    subtitle: string;
    description: string;
    profileImage: string;
    className?: string;
  }
  
  export const ProfileContentCard: React.FC<ProfileContentCardProps> = ({
    name,
    subtitle,
    description,
    profileImage,
    className = ''
  }) => {
    return (
      <div className={`bg-tbc-secondarygreen-600 rounded-xl shadow-2xl p-8 max-w-5xl mx-auto backdrop-blur-sm ${className}`}>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-amber-100">
            <div className="mb-6">
              <h1 className="text-5xl font-light mb-2">
                SOY{" "}
                <span className="font-serif italic font-normal">
                  {name}
                </span>
              </h1>
              <h2 className="text-xl tracking-wider font-light">
                {subtitle}
              </h2>
            </div>
            <div className="space-y-4">
              <p className="font-light leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };