import React, { FC, createContext } from "react";
import "./App.css";
import {   Movie } from "./components/Movie";
import { ReviewStars } from "./helper/constants/enum";
import { AppContextInterface } from "./helper/interface/appcontext.interface";



const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "satyaprem ki katha",
    budget: 25,
    country: "india",
  };

  // ============================== Type script Basic Var,Functions=============================================================
  // const name: string = "Meet";
  // const age:number = 23;

  // const getName = (name:string):void=>{ if it is not return anythings}
  // const getName = (name:string):number=>{
  //   if(name==="Meet"){
  //     return 23
  //   }else{
  //     return 0
  //   }
  // }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Movie name="SatyaPrem Ki Katha" budget={25} review={ReviewStars.four} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
