import * as prjTypes  from '../actions/actionTypes';
//import * as prjTypes  from '../../actions/actionTypes';
export const projectReducers = (state = [], action) => {
  switch (action.type) {
    case prjTypes.PROJECTLISTS:  
    return action.projects;

    default:
      return state;
  }
};

export const projectReducer = (state = [], action) => {
  switch (action.type) {
    case prjTypes.DETAILPROJECT:
    return action.projectdetail;

    default:
      return state;
  }
};

export const projectSave = (state = [], action) => {  
  switch (action.type) {
    case prjTypes.EDIT_PROJECT:
    return action.savemessage;

    default:
      return state;
  }
};
/*
//clients
export const projectClientReducer = (state = [], action) => {
  switch (action.type) {
    case prjTypes.CLIENTLISTS:
    return action.clients;

    default:
      return state;
  }
};

//status
export const projectStatusReducer = (state = [], action) => {
  switch (action.type) {
    case prjTypes.PRO_STATUSLIST:
    return action.statusLists;

    default:
      return state;
  }
}; */
