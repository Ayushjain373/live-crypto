import React from "react";

const coinReducer = (state, action) => {
  switch (action.type) {
    case "Set_Loading":
      return {
        ...state,
        isLoading: true,
      };
    case "Set_Error":
      return {
        ...state,
        isError: true,
      };
    case "Set_Api_data":
      return {
        ...state,
        allCoins: action.payload,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default coinReducer;
