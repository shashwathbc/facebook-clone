export const initialState = {
  user: null,                                              //datalayer initially will be like this
};

export const actionTypes = {
  SET_USER: 'SET_USER',                                    //dispatch actions into the datalayer
};

const reducer = (state, action) => {
  console.log(action);                                     //lisnts n provided requered data
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;