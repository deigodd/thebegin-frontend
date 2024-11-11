interface ActivityHeaderProps {
    matchCount: number;
  }
  
  export const ActivityHeader = ({ matchCount }: ActivityHeaderProps) => {
    return (
      <div className="mb-6 px-4">
        <h2 className="text-[#D4B595] text-2xl font-semibold mb-2">ACTIVIDADES</h2>
        <p className="text-lg">¡Felicitaciones, tienes {matchCount} Match!</p>
        <p className="text-sm text-gray-600">
          Visita el perfil de tus match y comienza a disfrutar de todas las oportunidades que te brindan
        </p>
      </div>
    );
  };