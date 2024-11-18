import CategoriesSearchBar from "./Categories";
import Bar from "./Bar";
import SearchButton from "./SearchButton";

const SearchBar: React.FC<{ onCategorySelect: (category: string) => void }> = ({ onCategorySelect }) => {
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);  // Pasa la categoría seleccionada a `Marketplace`
  };

  return (
    <div className="flex scale-75 lg:scale-100 w-full z-20">
      <CategoriesSearchBar onSelectCategory={handleCategorySelect} />
      <Bar />
      <SearchButton />
    </div>
  );
};


export default SearchBar;
