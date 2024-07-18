import { createContext } from "react";

const defaultValue = {
 characters : [],
 weapons : [], 
 artifacts : [],
 videos: []
 
}

const GenshinAuthContext = createContext(defaultValue);

export default GenshinAuthContext;