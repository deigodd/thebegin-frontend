const Banner = () => {
  return (
    <div className="relative w-full h-96 grid grid-cols-2">
      {/* Left section with Match text */}
      <div className="bg-[#D2A977] flex flex-col items-center justify-center">
        <h1 className="text-white text-7xl font-serif mb-2">Match</h1>
        <p className="text-[#E8D3BA] text-4xl font-serif italic ">¡Wow!</p>
      </div>
      
      {/* Right section with image */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1204135/pexels-photo-1204135.jpeg?cs=srgb&dl=pexels-vladbagacian-1204135.jpg&fm=jpg"
          alt="Friends embracing"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Banner;