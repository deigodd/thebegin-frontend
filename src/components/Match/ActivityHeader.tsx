interface ActivityHeaderProps {
    matchCount: number;
  }
  
  export const ActivityHeader = ({ matchCount }: ActivityHeaderProps) => {
    return (
      <div className="mb-6 mt-6 px-4 text-center sm:text-left">
  <h2 className="text-[#D4B595] text-4xl sm:text-6xl lg:text-7xl font-semibold font-serif mb-2 break-words">
    ACTIVIDADES
  </h2>
  <p className="text-base sm:text-lg">
    ¡Felicitaciones, tienes {matchCount} Match!
  </p>
  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
    Visita el perfil de tus match y comienza a disfrutar de todas las oportunidades que te brindan.
  </p>
</div>


    );
  };