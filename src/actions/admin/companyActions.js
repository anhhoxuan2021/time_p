import * as actTypes from '../actionTypes';

import * as apiAdmin from '../apiAdmin';

export const get_listCompany = (findtext,pagelength,pageno) => {

  let para ={token:'123',findtext: findtext,pagelength:pagelength,pageno:pageno}
  return apiAdmin.listCompany(para).then(response =>response

  ).catch(error => {
  throw(error);
  });
};


export const listCompanyData =(companies) => {
  return {
    type: actTypes.COMPANYLISTS,
    companies
  };
}

export const totalComRecords =(total) => {
  return {
    type: actTypes.COMPANYLISTS,
    total
  };
}
