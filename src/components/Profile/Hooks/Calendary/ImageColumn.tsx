const ImageColumn = () => {
  return (
    <div className="flex flex-col gap-3 sm:w-full md:w-full lg:w-64 mx-auto">
      <div className="h-56 overflow-hidden transition-transform hover:scale-105">
        <img 
          src="https://images.pexels.com/photos/12301873/pexels-photo-12301873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Decorative pots" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-48 overflow-hidden transition-transform hover:scale-105">
        <img 
          src="https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Food preparation" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-64 overflow-hidden transition-transform hover:scale-105">
        <img 
          src="https://images.pexels.com/photos/5429051/pexels-photo-5429051.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Gardening" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
export default ImageColumn;