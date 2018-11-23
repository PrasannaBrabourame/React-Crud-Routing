
import * as actionTypes from '../action/actionType';
const userDetails = [
      { number: 1, name: "Prasanna Brabourame", position: "Programmer" },
      { number: 2, name: "Prasi", position: "Open Source Enthusiast" },
      { number: 3, name: "Prasann", position: "MEAN Stack Developer" },
      { number: 4, name: "Brabourame Prasanna", position: "MERN Stack Developer" },
      { number: 5, name: "Prasanna Brabou", position: "Full Stack Developer" },
      { number: 6, name: "Prasi Brabourame", position: "Software Engineer" }
    ];

export default (state = userDetails, action) => {
  switch (action.type){
    case actionTypes.CREATE_NEW_USER:
    return [
      ...state,
      Object.assign({}, action.userdetails)
    ];
    case actionTypes.DELETE_USER:
    return state.filter((data, i) => i !== action.id);
    case actionTypes.EDIT_USERS:
    state[action.id] = action.userdetails
        return state;
    default:
          return state;
  }
  };