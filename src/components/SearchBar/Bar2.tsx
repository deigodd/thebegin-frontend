interface SearchBarProps {
    onSearch: (value: string) => void;
  }
  
  export const SearchBar2 = ({ onSearch }: SearchBarProps) => {
    return (
      <div className="flex items-center gap-4 mb-6 px-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Buscador perfiles..."
            className="w-full py-2 px-4 rounded-lg bg-gray-100 border border-gray-200"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 py-2 px-4 rounded-lg bg-gray-100 hover:bg-gray-200">
          <span>Filtrar</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    );
  };