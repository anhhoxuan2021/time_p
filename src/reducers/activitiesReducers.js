import * as actTypes  from '../actions/actionTypes';
export const activitiesListReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.ACTIVITYLIST:  
    return action.activities;

    default:
      return state;
  }
};

export const activityInfoReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.ACTIVITYINFO:  
    return Object.assign({}, state, {
      activity_Info: action.activityInfo, activity_Info_enable:1
    });

    default:
      return state;
  }
};

export const activityProjectListReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.ACTIVITYPROJECTLIST:  
    return Object.assign({}, state, {
      projects_list: action.activityProjectList, activityProjectList_enable:1
    });

    default:
      return state;
  }
};

export const activityProjectListCanJoinReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.ACTIVITYPROJECTLISTCANJOIN:  
    return Object.assign({}, state, {
      projects_belong: action.activityProjectListCanJoin, activityProjectListCanJoin_enable:1
    });

    default:
      return state;
  }
};


