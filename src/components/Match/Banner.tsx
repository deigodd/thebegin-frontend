interface BannerProps {
  text?: string;
}

const Banner = ({ text = "¡wow!" }: BannerProps) => {
  return (
    <div className="relative w-full h-[400px] grid grid-cols-2">
      {/* Left section with Match text */}
      <div className="bg-[#D4B595] flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-serif mb-2">Match</h1>
        <p className="text-white text-3xl font-serif italic">{text}</p>
      </div>
      
      {/* Right section with image */}
      <div className="relative overflow-hidden">
        <img
          src="/api/placeholder/600/400"
          alt="Friends embracing"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;