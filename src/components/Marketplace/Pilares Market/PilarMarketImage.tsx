interface PilarData {
  id: number;
  name: string;
  image: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}
interface PilarMarketProps {
  pilar: PilarData;
}

const PilarMarketImage: React.FC<PilarMarketProps> = ({ pilar }) => {
  const {name, image, colors} = pilar;
  return (
    <div
      className="md:w-56 h-full relative rounded-sm overflow-hidden"
      style={{
        /*background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`*/
      }}
    >
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-56 md:h-full"
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