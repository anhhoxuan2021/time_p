import * as actTypes  from '../actions/actionTypes';

export function getUsersSuccess(data) {
  return {
    type: actTypes.EMPLOYEEINFO_ITEM,
    data
  };
}
