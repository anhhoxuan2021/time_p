import * as actTypes from '../actionTypes';

import * as apiAdmin from '../apiAdmin';

export const get_listProject = (userid,businessid) => {

  let para ={token:'123',userid: userid, businessid:businessid}
  return (dispatch) => {
  return apiAdmin.listProject(para)
      .then(response => {
        //console.log("test="+response);
      dispatch(listProjectData(2))
      })
      .catch(error => {
      throw(error);
      });
  };
};

export const get_listProject2 = (userid,businessid) => {

  let para ={token:'123',userid: userid, businessid:businessid}
  return apiAdmin.listProject(para).then(response =>response

  ).catch(error => {
  throw(error);
  });
};


export const listProjectData =(projects) => {
  return {
    type: actTypes.PROJECTLISTS,
    projects
  };
}

//detail projects
export const detail_Project = (projectid,userid,businessid) => {

  let para ={token:'123',userid: userid, businessid:businessid,projectid:projectid}
  return apiAdmin.detailProjectApi(para).then(function(data){
    return data[0];
  }).catch(error => {
    throw(error);
  });
};

/*
export const detail_Project = (projectid,userid,businessid) => {

  let para ={token:'123',userid: userid, businessid:businessid,projectid:projectid}
  return (dispatch) => {
  return apiAdmin.detailProjectApi(para)
      .then(response => {
        //console.log("test="+response);
        let data = response[0]; //console.log("test17="+data.clientid);
      dispatch(detailProject(data))
      })
      .catch(error => {
      throw(error);
      });
  };
};
*/
export const detailProject =(projectdetail) => {
  return {
    type: actTypes.DETAILPROJECT,
    projectdetail
  };
}

// listClients
export const get_listClients = (userid,businessid) => {

  let para ={token:'123',userid: userid, businessid:businessid}
  return apiAdmin.listClients(para).then(response =>response

  ).catch(error => {
  throw(error);
  });
};


// statusList
export const get_statusList = (userid,businessid) => {

  let para ={token:'123',userid: userid, businessid:businessid}
  return apiAdmin.statusList(para).then(response =>response

  ).catch(error => {
  throw(error);
  });
};

// get_activityRight
export const get_activityRight = (userid,businessid,projectid) => {

  let para ={token:'123',userid: userid, businessid:businessid,projectid:projectid}
  return apiAdmin.activityRight(para).then(response =>response

  ).catch(error => {
  throw(error);
  });
};

// get_activityLeft
 export const get_activityLeft = (userid,businessid,projecttypeid) => {

  let para ={token:'123',userid: userid, businessid:businessid,projecttypeid:projecttypeid}
  return apiAdmin.activityLeft(para).then(response=>response
  ).catch(error => {
    throw(error);
  });
};
 //


export const get_activity = (userid,businessid,projectid,projecttypeid) => {

  let para ={token:'123',userid: userid, businessid:businessid,projectid:projectid}
  return apiAdmin.activityRight(para).then(function(dataRight){
    let para ={token:'123',userid: userid, businessid:businessid,projecttypeid:projecttypeid}
      return apiAdmin.activityLeft(para).then(dataLeft => [dataRight,dataLeft])
  }).catch(error => {
    throw(error);
  });
};

// get_projectypetlist
export const get_projectypetlist = (userid,businessid) => {

  let para ={token:'123',userid: userid, businessid:businessid}
  return apiAdmin.projectypetlist(para).then(response =>response

  ).catch(error => {
  throw(error);
  });
};

//getEmployNotBelong action

export const getEmployNotBelong_action = (userid,businessid,projectid,fullname) => {
  let para ={token:'123',userid: userid, businessid:businessid,projectid:projectid,fullname:fullname}
  return apiAdmin.getEmployNotBelong(para).then(response=>response)
  .catch(error => {
    throw(error);
  });
};

export const getEmployeeybyproject_action = (userid,businessid,projectid,fullname) => {
  let para ={token:'123',userid: userid, businessid:businessid,projectid:projectid,fullname:fullname}
  return apiAdmin.getEmployeeybyproject(para).then(response=>response)
  .catch(error => {
    throw(error);
  });
};

export const SaveProjectAction = (prams) => {
  return apiAdmin.SaveProjectAction_api(prams).then(response=>response)
  .catch(error => {
    throw(error);
  });
};


