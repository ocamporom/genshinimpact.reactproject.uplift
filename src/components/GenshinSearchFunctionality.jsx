import React, { createContext, useContext, useReducer } from 'react';


// Step 1: Define your context
const SearchContext = createContext();

// Step 2: Implement a reducer function
function searchReducer(state, action){
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

// Step 3: Create a provider
function SearchProvider({ children }) {
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
function SearchComponent(){
  const { state, dispatch } = useContext(SearchContext);

function handleSearch(){
    // Perform search based on state.searchTerm
  };

function handleChange(event){
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
function GenshinSearchFunctionality() {
  return (
    <SearchProvider>
      <SearchComponent />
    </SearchProvider>
  );
};

export default GenshinSearchFunctionality;