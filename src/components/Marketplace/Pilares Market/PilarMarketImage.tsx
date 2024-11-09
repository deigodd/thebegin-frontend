const PilarMarketImage: React.FC = () => {
    return(
    <div className="md:w-1/4 relative aspect-[3/4] bg-gradient-to-b from-tbc-pilarpurple-200 to-tbc-pilarpurple-100 rounded-lg overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Arte con sentido"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-tbc-pilarpurple-600 to-transparent">
          <h1 className="text-3xl font-bold text-white">Arte con sentido</h1>
        </div>
    </div>
    )
}
export default PilarMarketImage;