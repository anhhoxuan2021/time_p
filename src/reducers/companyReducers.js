import * as prjTypes  from '../actions/actionTypes';
const initialState = {
  List1: [],
  Total:""
};

export const companyReducers = (state = initialState, action) => {
  switch (action.type) {
    case prjTypes.COMPANYLISTS:
    return Object.assign({}, state, {
        List1: action.companies.List,
        Total: action.companies.TotalCount
      });

    default:
      return state;
  }
};
