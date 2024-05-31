import { createContext } from "react";

const defaultValue = {
 characters : [],
 weapons : [], //kunin mo lahat ng state variable dito na gusto mong maging global
 artifacts : []  
}

const GenshinAuthContext = createContext(defaultValue);

export default GenshinAuthContext;