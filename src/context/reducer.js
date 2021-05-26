import ActionTypes from './actiontypes';
const AppReducer = (state, action) => {
    const { type,payload }  = action;
    switch (type) {
      case ActionTypes.Login:
          return {
              ...state,
              currentUser : payload
          }
      case ActionTypes.Logout:
        console.log("came here");
        return {
          ...state,
          currentUser : null
      }
      default:
        return state;
    }
  };
  
  export default AppReducer;