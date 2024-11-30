interface BannerProps {
  text?: string;
}

const Banner = ({ text = "¡wow!" }: BannerProps) => {
  return (
    <div className="relative w-full h-32 md:h-96 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1204135/pexels-photo-1204135.jpeg?cs=srgb&dl=pexels-vladbagacian-1204135.jpg&fm=jpg"
        alt="Friends embracing"
        className="w-full object-cover -translate-y-20 lg:-translate-y-32"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-tbc-primaryyellow-500 to-transparent w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-serif mb-2">Match</h1>
        <p className="text-white text-3xl font-serif italic">{text}</p>
      </div>
    </div>
  );
};

export default Banner;