import * as actTypes from '../actionTypes';

import * as apiActivity from '../apiActivity';

export const GetActivitiesList = (userid,businessid) => {
  
    let para ={token:'123',userid: userid, businessid:businessid}
    return apiActivity.Get_Activities_List(para).then(response =>response
  
    ).catch(error => {
    throw(error);
    });
  };

  export const ActivityDetailID = (userid,businessid, activityid) => {
    
      let para ={token:'123',userid: userid, businessid:businessid, activityid:activityid}
      return apiActivity.Activity_DetailID(para).then(response =>response
    
      ).catch(error => {
      throw(error);
      });
    };

    export const GetProjectBelongAct = (userid,businessid,activityid) => {
      
      let para ={token:'123',userid: userid, businessid:businessid, activityid:activityid}
        return apiActivity.GetProject_BelongAct(para).then(response =>response
      
        ).catch(error => {
        throw(error);
        });
      };

      export const GetProjectAct = (userid,businessid, activityid) => {
        
        let para ={token:'123',userid: userid, businessid:businessid, activityid:activityid}
          return apiActivity.GetProject_Act(para).then(response =>response
        
          ).catch(error => {
          throw(error);
          });
        };



