import * as actTypes  from '../actions/actionTypes';
export const clientsReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.CLIENTLIST:  
    return action.clients;

    default:
      return state;
  }
};


export const clientsInfoReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.CLIENTINFO:  
    return Object.assign({}, state, {
      client_info: action.clientinfo, info_enable:1
    });

    default:
      return state;
  }
};

export const clientProjectReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.CLIENTPROJECTS:  
    return Object.assign({}, state, {
      client_projects: action.clientprojects, client_projects_enable:1
    });

    default:
      return state;
  }
};



