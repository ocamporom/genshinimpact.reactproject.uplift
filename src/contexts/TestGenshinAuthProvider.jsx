const GenshinDataContext = useContext({
  state,
  dispatch,
});

const genshinDataReducer = (state, action) => {
  // const action = {
  //     type: 'FILTER_CHARACTERS', // type action
  //     payload: characterName // payload that will be used by the action
  //   }

  if (action.type === "ADD_CHARACTERS") {
    return {
      ...state,
      fetchedCharacters: action.payload, //pag magtype, temporary storage si fetchedCharacters. example is amber
      characters: action.payload,
    };
  }

  if (action.type === "FILTER_CHARACTERS") {
    const filteredCharacters = state.fetchedCharacters.filter((character) => {
      return character.name.includes(action.payload);
    });

    return {
      ...state,
      characters: filteredCharacters,
      // nestedObject: {
      //   ...state.nestedObject,
      //   anotherObject: 'new'
      // }
    };
  }

  return state;
};

const GenshinDataContextProvider = (props) => {
  const [state, dispatch] = useReducer(genshinDataReducer, {
    fetchedCharacters: null,
    characters: [],
    weapons: [],
    artifacts: [],
  });

  return (
    <GenshinDataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GenshinDataContext.Provider>
  );
};

const CharactersList = () => {
  const {
    state: { characters },
  } = useContext(GenshinDataContext);

  return <Fragment />;
};

const SearchBar = () => {
  const { dispatch } = useContext(GenshinDataContext); // from the big container, dispatch na ung kukuha ng gusto mo from the search bar
  const [characterName, setCharacterName] = useState("");

  const handleOnChange = (e) => {
    setCharacterName(e.target.value); // amber
  };

  const handleOnClick = () => {
    dispatch({
      type: "FILTER_CHARACTERS", // type action
      payload: characterName, // payload that will be used by the action
    });
  };

  return (
    <div>
      <input onChange={handleOnChange} />
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
};
