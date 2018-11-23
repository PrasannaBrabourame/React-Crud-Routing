import * as actionTypes from './actionType';

  export const createNewuser = (userdetails) => {
    return {
      type: actionTypes.CREATE_NEW_USER,
      userdetails: userdetails
    }
  };

  export const deleteuser = (id) => {
    return {
        type: actionTypes.DELETE_USER,
        id: id
    }
};

export const editUser = (userdetails,id) => {
    return {
      type: actionTypes.EDIT_USERS,
      userdetails: userdetails,
      id: id
    }
  };