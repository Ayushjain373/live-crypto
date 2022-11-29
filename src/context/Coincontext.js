import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useContext } from "react";

import reducer from "../Reducer";

const AppContext = createContext();

const initalState = {
  isLoading: false,
  isError: false,
  allCoins: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const getCoins = async (url) => {
    try {
      dispatch({ type: "Set_Loading" });
      const coinsData = await axios.get(url);

      const coins = coinsData.data;

      dispatch({ type: "Set_Api_data", payload: coins });
    } catch (err) {
      dispatch({ type: "Set_Error" });
      console.log("error");
    }
  };

  return (
    <AppContext.Provider value={{ ...state, getCoins }}>
      {children}
    </AppContext.Provider>
  );
};

const useProduct = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProduct };
