interface PilarDataProps {
  id: number;
  name: string;
  image: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

const PilarMarketImage: React.FC<PilarDataProps> = ({ name, image, colors }) => {
  return (
    <div
      className="md:w-1/4 relative aspect-[3/4] rounded-lg overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`
      }}
    >
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full"
      />
      <div
        className="absolute inset-0 flex items-end p-6"
        style={{
          background: `linear-gradient(to top, ${colors.tertiary}, transparent)`
        }}
      >
        <h1 className="text-3xl font-bold text-white">{name}</h1>
      </div>
    </div>
  );
}

export default PilarMarketImage;