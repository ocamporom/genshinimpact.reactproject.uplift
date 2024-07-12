import { createContext } from "react";

const defaultValue = {
 characters : [],
 weapons : [], 
 artifacts : []  
 
}

const GenshinAuthContext = createContext(defaultValue);

export default GenshinAuthContext;