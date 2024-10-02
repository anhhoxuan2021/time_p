import * as actTypes from '../actionTypes';

import * as apiClient from '../apiClient';

export const GetClientsList = (userid,businessid) => {
  
    let para ={token:'123',userid: userid, businessid:businessid}
    return apiClient.Get_Clients_List(para).then(response =>response
  
    ).catch(error => {
    throw(error);
    });
  };

  export const ClientDetailID = (userid,businessid, clientid) => {
    
      let para ={token:'123',userid: userid, businessid:businessid, clientid:clientid}
      return apiClient.Client_DetailID(para).then(response =>response
    
      ).catch(error => {
      throw(error);
      });
    };

   

      export const GetProjects = (userid,businessid, clientid) => {
        
        let para ={token:'123',userid: userid, businessid:businessid, clientid:clientid}
          return apiClient.Get_Projects(para).then(response =>response
        
          ).catch(error => {
          throw(error);
          });
        };

        export const SaveClient = (url,paras) => {
            return apiClient.Submitform(url, paras).then(response =>response
          
            ).catch(error => {
            throw(error);
            });
          };



