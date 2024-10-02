import * as actTypes from '../actionTypes';

import * as apiEmployee from '../apiEmployee';

//import store from '../../store/configureStore';

export const GetEmployeeList = (userid,businessid) => {
  
    let para ={token:'123',userid: userid, businessid:businessid}
    return apiEmployee.Get_Employee_List(para).then(response =>response
  
    ).catch(error => {
    throw(error);
    });
  };

  export const EmployeeDetailID = (userid,businessid) => {
    
      let para ={token:'123',userid: userid, businessid:businessid}
      return apiEmployee.Employee_DetailID(para).then(response =>response
    
      ).catch(error => {
      throw(error);
      });
    };

   

      export const GetProjects = (userid,businessid,employeeid) => {
        
        let para ={token:'123',userid: userid, businessid:businessid,employeeid:employeeid}
          return apiEmployee.Get_Projects(para).then(response =>response
        
          ).catch(error => {
          throw(error);
          });
        };

        export const GetAvailableProjects = (userid,businessid, employeeid) => {
          
          let para ={token:'123',userid: userid, businessid:businessid,employeeid:employeeid}
            return apiEmployee.Get_Available_Projects(para).then(response =>response
          
            ).catch(error => {
            throw(error);
            });
          };

          export const GetState = (userid,businessid) => {
            
            let para ={token:'123',userid: userid, businessid:businessid}
              return apiEmployee.Get_State(para).then(response =>response
            
              ).catch(error => {
              throw(error);
              });
            };

            
          export const GetStyleList = (userid,businessid) => {
            
            let para ={token:'123',userid: userid, businessid:businessid}
              return apiEmployee.Get_StyleList(para).then(response =>response
            
              ).catch(error => {
              throw(error);
              });
            };

            /******** Dispatch */

         


