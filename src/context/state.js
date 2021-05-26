import { useReducer } from "react";
import AppReducer from "./reducer";
import AppContext from "./context";
const initialState = {
  currentUser : null
};

const AppState = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;