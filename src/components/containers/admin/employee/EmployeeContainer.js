import PropTypes from 'prop-types'
import React, { Component } from 'react';
//import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import {Form, FormGroup,Radio } from 'react-bootstrap';

import '../../../../../public/css/components.css';
import '../../../../../public/css/custom-admin.css';
import '../../../../../public/css/projectdetail.css';

import * as employeeActions from '../../../../actions/admin/employeeActions';
import * as actTypes from '../../../../actions/actionTypes';

import EmployeeList from '../../../views/admin/employee/EmployeeList';
import EmplDetail from '../../../views/admin/employee/EmplDetail';
import EmplProjects from '../../../views/admin/employee/EmplProjects';
import EmployeesAvailable from '../../../views/admin/employee/EmployeesAvailable';

var isDisplayDetail =0;


const mapStateToProps = (state) => {
  return {
    employee_list : state.employeesReducers,
    info: state.emplInfoReducers.empl_info,
    emplprojects : state.emplProjectReducers.empl_projects,
    availableprojects : state.emplProjectReducers.a_projects

    //client_projects: state.clientProjectReducers.client_projects, 
    //client_projects_enable: state.clientProjectReducers.client_projects_enable,
  };
} 

const mapDispatchToProps = (dispatch) => {
    return {
      onLoadGetEmployeeList: (data) => {
      dispatch({ type: actTypes.EMPLOYEESLIST, employees: data})
      }, 

    onLoadEmplDetail :(data) => {
        dispatch({type: actTypes.EMPLOYEEINFO, emplinfo: data})
      },
  
      onLoadGetProjects : (data) => {
        dispatch({type : actTypes.EMPLOYEEPROJECTLIST, projects : data})
      }, 

      onLoadAvailableProjects : (data) => {
        dispatch({type : actTypes.EMPLOYEEPROJECTSAVAILABLE, available_projects : data})
      } ,

      onLoadEmplDetail_item :(data) => {
        dispatch({type: actTypes.EMPLOYEEINFO_ITEM, dataitem: data})
      },

      onLoadProjectJoin : (data)=>{
        dispatch({type:actTypes.EMPPROJECT_JOIN, listItems: data})
      },

      onLoadProjectSlice : (data) => {
        dispatch({type:actTypes.EMPPROJECT_SPLICE, projectid: data})
      }

  }
};


class EmployeeContainer extends Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
          info:"",
          info_enable:0,
          showModal: false,  
          project_av:[], 
          re:""  
        };

        let userid =7;
        let businessid=2;

        //event
        this.TrClick = this.TrClick.bind(this)
        this.E_handleInputChange = this.E_handleInputChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal =this.openModal.bind(this);
        this.Project_Av_Checked = this.Project_Av_Checked.bind(this);
        this.E_Project_Add_Empls = this.E_Project_Add_Empls.bind(this)
        this.DeletePoject = this.E_DeletePoject.bind(this);
        //install data
        this.country_state=[];
        this.style_list=[];
        employeeActions.GetState(userid,businessid).then(
          (data) =>{
            this.country_state = data;
          }
        ).catch (error => {
          throw(error)
        });


        employeeActions.GetStyleList(userid,businessid).then(
          (data) => {
            this.style_list= data;
          }
        ).catch(error => {
          throw(error)
        });


    }

    componentWillReceiveProps(newProps){
      //console.log("====="+newProps.info)
        
    }

    shouldComponentUpdate(nextprops){
      //console.log(nextprops);
       return true
    }

    componentWillMount(){
      //console.log("test test");
    }

    /*componentWillReceiveProps(newProps) {  
      if(newProps.info_enable==1){
        this.setState({info: newProps.info})
      }  
     
    } */


  componentDidMount(){
      let userid =7;
      let businessid=2;
      /********** */
      employeeActions.GetEmployeeList(userid,businessid).then(
        (data) => {
      this.props.onLoadGetEmployeeList(data);
      }
      ) ;
      /********** */
    }

    /********** Handle Event   ********* */

    E_handleInputChange(name, value) {
      //console.log("name=="+name +"===val="+value)     
      let data = {name:name,value:value}
      ///console.log("name====="+detailInfo[name])
      this.props.onLoadEmplDetail_item(data);
    } 

    E_Project_Add_Empls(){
      let data = this.state.project_av
  
      if(data.length>0){
        this.props.onLoadProjectJoin(data);
       // this.props.onLoadSliceProject(data);
        this.setState({project_av:[]})
      }
      
    }

    E_DeletePoject(data){
      this.props.onLoadProjectSlice(data);
    }
  
    TrClick(employeeid){
      this.setState({
        row_selected : employeeid
      })

      let userid =7;
      let businessid=2;
      employeeActions.EmployeeDetailID(employeeid, businessid).then(
        (data) => {       
          this.props.onLoadEmplDetail(data[0]);
        }
      ) ;     

      employeeActions.GetProjects(userid, businessid, employeeid).then(
        (data) => {       
          this.props.onLoadGetProjects(data);
        }
      ) ;  

      employeeActions.GetAvailableProjects(userid, businessid, employeeid).then(
        (data) => {       
          this.props.onLoadAvailableProjects(data);
        }
      ) ;  
   
    } 

    closeModal() {
      this.setState({ showModal: false });
     }
   
     openModal() {
       this.setState({ showModal: true });
     }

     Project_Av_Checked(projectid,flag){
      let temp = this.state.project_av;
      if(flag){        
        temp.push(projectid);
        
     
      }else{
      let i = temp.indexOf(projectid);
      temp.splice(i,1);
      }

      this.setState({project_av:temp})
      
    }

    render() {   
      return (
          <div className="page-content">
          <div className="container">
              <div className="row">
              <EmployeeList 
                  employee_list = {this.props.employee_list}
                  row_selected = {this.state.row_selected}
                  TrClick = {this.TrClick}
              />  

              <div className="col-md-9 col-sm-9 col-xs-12 form-horizontal paddT20"> 
                  <EmplDetail
                    info = {this.props.info}
                    country_state = {this.country_state}
                    style_list = {this.style_list}
                    E_handleInputChangeChild = {this.E_handleInputChange}
                   />

                   <EmplProjects
                   emplprojects = {this.props.emplprojects}
                   openModal = {this.openModal}
                   DeletePoject = {this.E_DeletePoject}
                   />
              </div>

              <EmployeesAvailable showModal={this.state.showModal}
                    closeModal = {this.closeModal}  
                    Project_Av_Checked = {this.Project_Av_Checked}
                    availableprojects = {this.props.availableprojects} 
                    project_av = {this.state.project_av}
                    E_Project_Add_Empls= {this.E_Project_Add_Empls}
              />
                
              </div>
          </div>
        </div>
      );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeContainer);
