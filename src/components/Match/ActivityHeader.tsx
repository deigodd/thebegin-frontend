interface ActivityHeaderProps {
    matchCount: number;
  }
  
  export const ActivityHeader = ({ matchCount }: ActivityHeaderProps) => {
    return (
      <div className="mb-6 mt-6 px-4">
        <h2 className="text-[#D4B595] text-7xl font-semibold font-serif mb-2">ACTIVIDADES</h2>
        <p className="text-lg">¡Felicitaciones, tienes {matchCount} Match!</p>
        <p className="text-sm text-gray-600">
          Visita el perfil de tus match y comienza a disfrutar de todas las oportunidades que te brindan
        </p>
      </div>
    );
  };