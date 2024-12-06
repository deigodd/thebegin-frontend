import CategoryItem from './CategoryItem';
import iconPath from '../../../assets/icons/svg/tb-icon-outline-brown.svg';

interface SidebarMenuProps {
  onClose?: () => void;
  onCategorySelect: (category: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ onClose, onCategorySelect }) => {

  const categories = [
    "The Begin",
    "Arte con Sentido",
    "Consumo con Sentido",
    "Bienestar",
    "Salud Mental",
    "Medio Ambiente",
    "Trueque",
    "Membresía",
  ];

  return (
    <div>
      <h2 className="bg-tbc-primarybrown-600 p-2 text-white text-lg rounded-sm font-bold">
        Categorías
      </h2>
      <ul className="space-y-1">
        {categories.map((category) => (
          <div key={category}>
            <CategoryItem
              category={category}
              iconPath={iconPath}
              onSelectCategory={onCategorySelect}
            />
            {/* Línea divisoria después de "Medio Ambiente" o "Membresía" */}
            {(category === "Medio Ambiente" || category === "Membresía") && (
              <hr className="border-4 border-tbc-primaryred-600 my-2" />
            )}
          </div>
        ))}
      </ul>
      {/* Botón de cierre, visible solo en pop-up */}
      {onClose && (
        <button
          className="mt-4 w-full bg-tbc-primaryred-600 text-white p-2 rounded-sm"
          onClick={onClose}
        >
          Cerrar
        </button>
      )}
    </div>
  );
};

export default SidebarMenu;
