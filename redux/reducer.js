import {GET_DOGS} from "./actions"

const initialState = {
    dogs: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DOGS:
        return {
          ...state,
          dogs: state.dogs.concat(action.payload),
        };
      case 'CHAU':
        return {
          ...state,
          count: "Chau!"
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;