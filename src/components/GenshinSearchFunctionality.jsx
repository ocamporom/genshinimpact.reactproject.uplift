import React, { createContext, useContext, useReducer } from 'react';


// Step 1: Define your context
const SearchContext = createContext();

// Step 2: Implement a reducer function
const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

// Step 3: Create a provider
const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    searchTerm: '',
  });

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

// Step 4: Use useContext and useReducer
const SearchComponent = () => {
  const { state, dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    // Perform search based on state.searchTerm
  };

  const handleChange = (event) => {
    event.preventDefault()
    dispatch({ type: 'SET_SEARCH_TERM', payload: event.target.value });
  };

  return (
    <div>
      <input
        type="search"
        value={state.searchTerm}
        onChange={handleChange}
        placeholder="Search..."

      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

// Usage
const GenshinSearchFunctionality = () => {
  return (
    <SearchProvider>
      <SearchComponent />
    </SearchProvider>
  );
};

export default GenshinSearchFunctionality;