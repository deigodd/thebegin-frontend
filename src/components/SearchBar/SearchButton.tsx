import {Search} from 'lucide-react';

const SearchButton:React.FC = () => {
  return (
    <div className='bg-tbc-primarybrown-600 w-16 rounded-r-2xl text-tbc-secondarygreen-100 hover:scale-105'>
        <Search className='mt-2 ml-2 sm:ml-4'/>
    </div>
  );
};

export default SearchButton;