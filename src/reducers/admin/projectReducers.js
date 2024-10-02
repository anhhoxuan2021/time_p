import * as prjTypes  from '../../actions/actionTypes';

export const projectReducers = (state = [], action) => {
  switch (action.type) {
    case prjTypes.PROJECT_LIST:
    return Object.assign({}, state, {
      projects: action.projects
    });

    default:
      return state;
  }
};


