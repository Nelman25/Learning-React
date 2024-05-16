//  useContext() = React hook that allows you to share values
//                 between multiple levels of components
//                 without passing props through each level

//  PROVIDER COMPONENT
//  1. import {createContext} from 'react';
//  2. export const MyContext = createContext();
//  3. <MyContext.Provider value={value}>
//          <Child/>
//     </MyContext.Provider value={value}>


//  CONSUMER COMPONENTS 
//  1. import React, { userContext } from 'react';
//  2. import { MyContext } from './ComponentA.jsx'
//  3. const value = useContext(MyContext);

import ComponentA from "./ComponentA";
import React from 'react';

function App(){
  return(
    <ComponentA/>
  );
}export default App