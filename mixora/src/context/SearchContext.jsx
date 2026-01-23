import { createContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return <SearchContext.Provider value={{ isSearchOpen, setIsSearchOpen }}>{children}</SearchContext.Provider>;
}

export { SearchContext, SearchProvider };
