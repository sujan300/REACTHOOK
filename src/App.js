import logo from './logo.svg';
import './App.css';

import React from 'react';

// custom component 
import ClassCounter from './Components/ClassCounter';
import HookCounter from './Components/useStateHook/HookCounter';
import HookCounterTwo from './Components/useStateHook/HookCounterTwo';
import HookCounterThree from './Components/useStateHook/HookCounterThree';
import HookCounterFive from './Components/useStateHook/HookCounterFive';
import UseEffectHookCounterOne from './Components/useEffectHook/useEffectHookCounterOne';
import UseEffectHookMouse from './Components/useEffectHook/UseEffectHookMouse';
import UseEffectMouseContainer from './Components/useEffectHook/UseEffectMouseContainer';
import IntervalhookCounter from './Components/useEffectHook/IntervalhookCounter';
import FeatchDataApi from './Components/featchDataApi/FeatchDataApi';
import ComponentC from './Components/Context/ComponentC';





export const UserContext = React.createContext()
export const UserId = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="sujan adhikari.." >
        <UserId.Provider value={"1"} >
          <ComponentC />
        </UserId.Provider>
      </UserContext.Provider>
      {/* <FeatchDataApi /> */}
      {/* <IntervalhookCounter /> */}
      {/* <UseEffectMouseContainer /> */}
      {/* <UseEffectHookMouse /> */}
      {/* <HookCounterFive /> */}
      {/* <UseEffectHookCounterOne /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassCounter /> */}
      {/* <h1>Functional Count Value</h1> */}
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
