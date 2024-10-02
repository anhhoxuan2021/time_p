import * as actTypes  from '../actions/actionTypes';


export const employeesReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.EMPLOYEESLIST:  
    return action.employees;

    default:
      return state;
  }
};


export const emplInfoReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.EMPLOYEEINFO:  
    return Object.assign({}, state, {
      empl_info: action.emplinfo
    });

    case actTypes.EMPLOYEEINFO_ITEM:  
    //const newInfo = state.empl_info
    //newInfo[action.dataitem.name] = action.dataitem.value;
  
    let name = action.dataitem.name;
    
   return Object.assign({}, state, {
      empl_info: Object.assign(
        {},
        state.empl_info,
        { [name]: action.dataitem.value }
      )
    });

    /*case actTypes.EMPLOYEEINFO_ITEM:  
    //const newInfo = state.empl_info
    //newInfo[action.dataitem.name] = action.dataitem.value;
  
    let name1 = action.dataitem.name;
    
   return Object.assign({}, state, {
      empl_info: Object.assign(
        {},
        state.empl_info,
        { [name1]: action.dataitem.value }
      )
    });*/

    default:
      return state;
  }
};

export const emplProjectReducers = (state = [], action) => {
  switch (action.type) {
    case actTypes.EMPLOYEEPROJECTLIST:  
    return Object.assign({}, state, {
      empl_projects: action.projects
    });

    case actTypes.EMPLOYEEPROJECTSAVAILABLE:  
    return Object.assign({}, state, {
      a_projects: action.available_projects
    });

    case actTypes.EMPPROJECT_JOIN:
      let listForJoin = state.empl_projects;
      let listSlice = [];
      let index = state.empl_projects.length
      action.listItems.map((projectid,i)=>{
        state.a_projects.map((item, j)=> {
              if(projectid == item.projectid){
                index = index  + i
                listForJoin.splice(index, 0, item);
              }
        });       

        listSlice = state.a_projects.filter((info)=> info.projectid !== projectid);
      });   

    return Object.assign({}, state, {
      empl_projects: listForJoin},{a_projects:listSlice}
   )

   case actTypes.EMPPROJECT_SPLICE:
   
   let listJoin = state.a_projects;
   let list_Slice = [];

   state.empl_projects.map((item, i)=>{
      if(item.projectid = action.projectid){
        listJoin.splice(-1, 0, item);
      }
   });

   list_Slice = state.empl_projects.filter((info)=> info.projectid !== action.projectid);   

   //console.log(listSlice);

    return Object.assign({}, state, {
      empl_projects: list_Slice},{a_projects:listJoin}
    )

    default:
      return state;

  }
};





