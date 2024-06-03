import React, { createContext, useContext, useReducer } from 'react';
import style from './GenshinSearchFunctionality.module.css'


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
    <>

    <div className={style.searchFieldContainer}>
      <input
        className={style.searchField}
        type="search"
        value={state.searchTerm}
        onChange={handleChange}
        placeholder="Search..."

      />
      <button className={style.searchButton} onClick={handleSearch}>Search</button>
    </div>
    </>
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






// import React, { useReducer } from 'react';

// // Define initial state
// const initialState = {
//   searchText: '',
//   searchResults: [],
// };

// // Define reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_SEARCH_TEXT':
//       return { ...state, searchText: action.payload };
//     case 'SET_SEARCH_RESULTS':
//       return { ...state, searchResults: action.payload };
//     default:
//       return state;
//   }
// };

// const SearchComponent = () => {
//   // Initialize state using useReducer
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Function to handle search text change
//   const handleSearchChange = (event) => {
//     dispatch({ type: 'SET_SEARCH_TEXT', payload: event.target.value });
//     // Perform search here and update searchResults
//     // For simplicity, let's assume you have a search function that returns results
//     const results = performSearch(event.target.value);
//     dispatch({ type: 'SET_SEARCH_RESULTS', payload: results });
//   };

//   // Function to simulate search
//   const performSearch = (searchText) => {
//     // Simulated search logic, replace it with actual search logic
//     // For demonstration, let's just return an array of strings containing search text
//     return [
//       `Result 1 for "${searchText}"`,
//       `Result 2 for "${searchText}"`,
//       `Result 3 for "${searchText}"`,
//     ];
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={state.searchText}
//         onChange={handleSearchChange}
//         placeholder="Search..."
//       />
//       <ul>
//         {state.searchResults.map((result, index) => (
//           <li key={index}>{result}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchComponent;