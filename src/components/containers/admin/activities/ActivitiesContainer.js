import PropTypes from 'prop-types'
import React, { Component } from 'react';
//import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import {Form, FormGroup,Radio } from 'react-bootstrap';

import '../../../../../public/css/components.css';
//import '../../../../../public/css/font-awesome/css/font-awesome.css';
//import '../../../../../public/css/custom.css';
import '../../../../../public/css/custom-admin.css';
import '../../../../../public/css/projectdetail.css';

import * as activitiesActions from '../../../../actions/admin/activitiesActions';
import * as actTypes from '../../../../actions/actionTypes';

import ActivityList from '../../../views/admin/activities/ActivityList';
import ActivityDetail from '../../../views/admin/activities/ActivityDetail';
import ProjectCanAddToAct from '../../../views/admin/activities/ProjectCanAddToAct';

var isDisplayDetail =0;


const mapStateToProps = (state) => {
  return {
    activity_list : state.activitiesListReducers,

    info : state.activityInfoReducers.activity_Info,
    activity_Info_enable : state.activityInfoReducers.activity_Info_enable,

    projects_list : state.activityProjectListReducers.projects_list,
    activityProjectList_enable : state.activityProjectListReducers.activityProjectList_enable,

    projects_belong : state.activityProjectListCanJoinReducers.projects_belong,
    activityProjectListCanJoin_enable : state.activityProjectListCanJoinReducers.activityProjectListCanJoin_enable
   // messageReturn: state.projectSave.EDIT
  };
} 

const mapDispatchToProps = (dispatch) => {
    return {
      onLoadDataActivitiesList: (data) => {
      dispatch({ type: actTypes.ACTIVITYLIST, activities: data})
      }, 

      onLoadDataActivityDetailID: (data) => {
        dispatch({ type: actTypes.ACTIVITYINFO, activityInfo: data})
        }, 

      onLoadDataGetProjectAct: (data) => {
        dispatch({ type: actTypes.ACTIVITYPROJECTLIST, activityProjectList: data})
      },

      onLoadDataGetProjectBelongAct: (data) => {
        dispatch({ type: actTypes.ACTIVITYPROJECTLISTCANJOIN, activityProjectListCanJoin: data})
      },

  }
};


class ActivitiesContainer extends Component {
    constructor(props, context) {

        super(props, context);

        this.state = {
          projects_belong_checked:[],
          projects_belong:[],
          projects_list:[]
           /*
          showModal: false,        
          info:{},
          activity_list:[],
          projects_list:[],
          projects_belong:[],    
          activity_Info_enable:0,
          activityProjectList_enable:0,
          activityProjectListCanJoin_enable:0*/
        };

        let userid =7;
        let businessid=2;

        //event

        this.TrClick = this.TrClick.bind(this);
        this.E_handleInputChange = this.E_handleInputChange.bind(this);
        this.E_projectCanAddToAct = this.E_projectCanAddToAct.bind(this)
        this.E_project_to_act = this.E_project_to_act.bind(this)
        this.Eproject_delete = this.Eproject_delete.bind(this)
    }

  /********** Handle Event   ********* */

    E_handleInputChange(e) {
      //console.log("name=="+e.target.name +"===val"+e.target.value)
      this.setState({
        info: Object.assign(
        {},
        this.state.info,
        { [e.target.name]: e.target.value }
      )
      });

    }

    E_projectCanAddToAct(projectid,flag){
      let temp = this.state.projects_belong_checked;
      if(flag){        
        temp.push(projectid);
        
      //emplyees_not_belong.push(employeeid)
      }else{
      let i = temp.indexOf(projectid);
      temp.splice(i,1);
      }

      this.setState({projects_belong_checked:temp})
      
    }

    E_project_to_act() { 
      let temp =this.state.projects_list;   
      
      this.state.projects_belong_checked.map((projectid,i) => {
         this.state.projects_belong.map((item,j) => {
            if(projectid == item.projectid){              
              temp.push(item);
              this.state.projects_belong.splice(j,1);
              return false;
            }
         })
      })

      this.setState({projects_list:temp,
        projects_belong_checked:[],
        projects_belong:this.state.projects_belong});
       
        temp=[]; 
      //console.log("how many==="+this.state.projects_belong_checked)
     }

     Eproject_delete(id){
      let temp ; let temp2 =this.state.projects_list;
      temp2.map((info,i) => {
        if(id==info.projectid){
          temp=info;
          temp2.splice(i,1);
          return false;
        }
      });

      let temp1 = this.state.projects_belong;
      temp1.push(temp);
      this.setState({projects_belong:temp1,projects_list:temp2});
     // console.log("temp te==="+this.state.employees.length);
  }
    /******************* */

   /* closeModal() {
     this.setState({ showModal: false });
    }
  
    openModal() {
      this.setState({ showModal: true });
    }  */


   
    componentWillMount(){
      //console.log("test test");
    }

    componentWillReceiveProps(newProps) {    
      if(newProps.activity_Info_enable==1){
        this.setState({
           info : newProps.info,
           activity_Info_enable : newProps.activity_Info_enable,
           projects_belong_checked:[]
        })
      }

      if(newProps.activityProjectList_enable==1){
        this.setState({
           projects_list : newProps.projects_list,
           activityProjectList_enable : newProps.activityProjectList_enable
        })
      }

      if(newProps.activityProjectListCanJoin_enable==1){
        this.setState({
          projects_belong : newProps.projects_belong,
           activityProjectListCanJoin_enable : newProps.activityProjectListCanJoin_enable
        })
      }
   }

  componentDidMount(){
      let userid =7;
      let businessid=2;
      this.GetActivitiesListComponent(userid,businessid);
    }
    GetActivitiesListComponent(userid,businessid) {
      activitiesActions.GetActivitiesList(userid,businessid).then(
        (data) => {
      this.props.onLoadDataActivitiesList(data);
      }
      ) ;
      //
    }

    TrClick(activityid){
      this.setState({
        row_selected : activityid
      })

      let userid =7;
      let businessid=2;
      activitiesActions.ActivityDetailID(userid, businessid, activityid).then(
        (data) => {          
          this.props.onLoadDataActivityDetailID(data[0]);
        }
      ) ;
      /******************* */

      activitiesActions.GetProjectAct(userid, businessid, activityid).then(
        (data) => {
          this.props.onLoadDataGetProjectAct(data);
        }
      ) ;

      /******************* */

      activitiesActions.GetProjectBelongAct(userid, businessid, activityid).then(
        (data) => {
         this.props.onLoadDataGetProjectBelongAct(data);
        }
      ) ;

      /******************* */
   
    }

    render() {        
      let formHMML ="" ;
      if((this.state.activity_Info_enable==1) && this.state.activityProjectList_enable==1  && this.state.activityProjectListCanJoin_enable==1){
       
        formHMML = <div className="col-md-9 paddT20">
              <ActivityDetail 
                   info = {this.state.info}
                   projects_List = {this.state.projects_list}

                   E_handleInputChangePros ={this.E_handleInputChange}
                   E_project_delete = {this.Eproject_delete}
              />

              <ProjectCanAddToAct 
                  projects_belong = {this.state.projects_belong}
                  projects_belong_checked = {this.state.projects_belong_checked}
                  E_projectCanAddToAct = {this.E_projectCanAddToAct}
                  E_project_to_act = {this.E_project_to_act}
              /> 
              
      </div> 
      }
      

      return (
          <div className="page-content">
          <div className="container">
              <div className="row">
                <ActivityList activity_list = {this.props.activity_list}
                row_selected = {this.state.row_selected}
                TrClick = {this.TrClick}
                />

                {formHMML}
               
              </div>
          </div>
          </div>
      );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ActivitiesContainer);
