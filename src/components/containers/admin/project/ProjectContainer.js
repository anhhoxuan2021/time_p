// ./src/components/book/BookDetailsPage.js
import PropTypes from 'prop-types'
import React, { Component } from 'react';
//import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import {Form, FormGroup,Radio } from 'react-bootstrap';

//import '../../../../../node_modules/elemental/less/elemental.less';

//import { Button, Alert, Spinner } from 'elemental' ;

import '../../../../../public/css/components.css';
//import '../../../../../public/css/font-awesome/css/font-awesome.css';
//import '../../../../../public/css/custom.css';
import '../../../../../public/css/custom-admin.css';
import '../../../../../public/css/projectdetail.css';

import * as projectActions from '../../../../actions/admin/projectActions';
import * as actTypes from '../../../../actions/actionTypes';

import Activity from '../../../views/admin/project/Activity';
import ProjectList from '../../../views/admin/project/ProjectList';
import Detail from '../../../views/admin/project/Detail';
import EmployeesList from '../../../views/admin/project/EmployeesList';
import EmployeesNotBelong from '../../../views/admin/project/EmployeesNotBelong';



var isDisplayDetail =0;


const mapStateToProps = (state) => {
  return {
    projects: state.projectReducers,
    messageReturn: state.projectSave.EDIT
  };
} //

const mapDispatchToProps = (dispatch) => {
    return {
      onLoadDataForPoject: (data) => {
      dispatch({ type: actTypes.PROJECTLISTS, projects: data})
      },

      DispatchSave: (data) => {
        dispatch({ type: actTypes.EDIT_PROJECT, savemessage: data})
      }

      //detailProjectById : (id,userid,businessid)=>dispatch(projectActions.detail_Project(id,userid,businessid))
  }
};


class ProjectContainer extends Component {
    constructor(props, context) {

        super(props, context);

        this.state = {
          isDisplayDetail:0,
          showModal: false,
          emplyees_not_belong:[],
          //projectname:  ''
          detailProj:{
            clientid:"",enddate:"",projectid:"",projectname:"",
            projecttypeid:"",startdate:"",statusid:"",
           statusname:""
          }
        };

        let userid =7;
        let businessid=2;

        projectActions.get_listClients(userid,businessid).then(
          (data) => {
            let state = this.state;
            let newState = Object.assign({}, state, { clients: data});
            this.setState(newState);
        }
        ) ;

        projectActions.get_statusList(userid,businessid).then(
          (data) => {
            let state = this.state;
            let newState = Object.assign({}, state, { status_pr: data});
            this.setState(newState);
        }
        ) ;


         projectActions.get_projectypetlist(userid,businessid).then(
           (data) => {
             let state = this.state;
             let newState = Object.assign({}, state, { projectypetlist: data});
             this.setState(newState);
             }
         ) ;

         //event function

        this.handleInputChange  = this.handleInputChange .bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.changeReceiveRate = this.changeReceiveRate.bind(this);
        this.changePayRateOption = this.changePayRateOption.bind(this);
        this.changeActivityOption =this.changeActivityOption.bind(this);
        this.trClick = this.trClick.bind(this);
        this.addEplToProject = this.addEplToProject.bind(this);
        //this.empListAdd = this.empListAdd.bind(this);

        this.openModal =this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this);
        this.employeesNotBelong_Checked = this.employeesNotBelong_Checked.bind(this)
        this.DeleteEmplyee = this.DeleteEmplyee.bind(this);
        this.Save = this.Save.bind(this);
    }

    componentWillMount(){
      //console.log("test test");
    }

    trClick(id){
      let userid =7;
      let businessid=2;
      isDisplayDetail =1;

      projectActions.detail_Project(id,userid,businessid).then((data) => {
         if(isDisplayDetail==1){
             let clientid = data.clientid || "";
             let enddate = data.enddate || "";
             let projectid = data.projectid || "";
             let projectname = data.projectname || "";
             let projecttypeid = data.projecttypeid || "";
             let startdate = data.startdate || "";
             let statusid = data.statusid || "";
             let statusname = data.statusname || "";

             let userid =7;
             let businessid=2;

             projectActions.getEmployNotBelong_action(userid,businessid,projectid,"").then(
              ((data)=>{
                this.setState({
                 employeesNotBelong:data
                })
              })
            )

            projectActions.getEmployeeybyproject_action(userid,businessid,projectid,"").then(
              ((data)=>{
               this.setState({
                 employees:data
                });
               
              })
            )

             projectActions.get_activity(userid,businessid,projectid,projecttypeid).then(
               (res) => {
                 var activity_let=[];
                 if((res[1].length>0)&&(res[0].length>0)){
                   let k=-1;
                   for(let i=0;i<res[1].length;i++){
                      let removeFlag= false;
                      let L_Info = res[1][i];
                      for(let j=0; j<res[0].length;j++){
                          let R_Info = res[0][j];
                          if(L_Info.activityid==R_Info.activityid){
                              removeFlag=true;
                         }
                      }
                      if(!removeFlag){
                        if(typeof L_Info.businessid !='undefined'){

                        }else{
                          L_Info.businessid = "";
                        }
                        activity_let.push({activityid:L_Info.activityid,
                        businessid:L_Info.businessid,
                        activityname:L_Info.activityname,
                        payrate:L_Info.payrate,
                        receiverate:L_Info.receiverate,
                        payrateoption:L_Info.payrateoption
                      });
                      }
                   }

                 }
                 //console.log("test11");

                 if(activity_let.length>0){
                   this.setState({
                     activityRight : res[0],
                     activityLeft : activity_let,
                     detailProj : {
                       clientid:clientid || "",
                       enddate:enddate || "",
                       projectid:projectid || "",
                       projectname:projectname || "",
                       projecttypeid:projecttypeid || "",
                       startdate:startdate || "",
                       statusid:statusid || "",
                       statusname:statusname || ""
                     },
                     isDisplayDetail: 1,
                     project_id:id
                     }) ;

                 }else{
                   this.setState({
                     activityRight : res[0],
                     activityLeft : res[1],
                     detailProj : {
                       clientid:clientid || "",
                       enddate:enddate || "",
                       projectid:projectid || "",
                       projectname:projectname || "",
                       projecttypeid:projecttypeid || "",
                       startdate:startdate || "",
                       statusid:statusid || "",
                       statusname:statusname || ""
                     },
                     isDisplayDetail: 1,
                     project_id:id
                     }) ;
                 }

               }
             )     
             

             //
         }
       })

    }

    Save(id){
      let activitylist='';
      this.state.activityRight.map((info) => {
        if(activitylist!=''){
          activitylist = activitylist +','+ info.activityid ;
        }else{
          activitylist = info.activityid
        }
        
      });

      let employeelist='';
      this.state.employees.map((info) => {
        if(employeelist!=''){
          employeelist = employeelist +','+ info.employeeid ;
        }else{
          employeelist = info.employeeid
        }
        
      })

      let prams ={
        userid:7,
        token:'123',
        businessid:2,
        projectid:id,
        projectname:this.state.detailProj.projectname,
        projecttypeid:this.state.detailProj.projecttypeid,
        clientid:this.state.detailProj.clientid,
        startdate:this.state.detailProj.startdate,
        enddate:this.state.detailProj.enddate,
        statusid:this.state.detailProj.statusid,
        employeelist:employeelist,
        activitylist:activitylist
      }

      projectActions.SaveProjectAction(prams).then(
        (data) => {          
          this.props.DispatchSave(data);
      }
      ) ;

    }


    handleInputChange(e) {
      //console.log(e.target.value)
      this.setState({
      detailProj: Object.assign(
        {},
        this.state.detailProj,
        { [e.target.name]: e.target.value }
      )
      });

    }

    changeActivityOption(value,id,keyName){
      //console.log("test="+value);
      let activityLeft = this.state.activityLeft;
      activityLeft[id][keyName] = value;
        this.setState({activityLeft:activityLeft});

    }

    changeReceiveRate(value,id){
      //console.log("test="+value);
      let activityLeft = this.state.activityLeft;
      activityLeft[id]["receiverate"] = value;
        this.setState({activityLeft:activityLeft});

    }

    changePayRateOption(value,i){
      let activityLeft = this.state.activityLeft;
      activityLeft[i]["payrateoption"] = value;
      this.setState({activityLeft:activityLeft});
    }

    handleSelectChange(e){
      let name = e.target.name ;
      let value = e.target.value ;
      this.setState({
      detailProj: Object.assign(
        {},
        this.state.detailProj,
        { [e.target.name]: e.target.value }
      )
      });
    }

    ActRightClickHandle(activityid,businessid,activityname,payrate,
      receiverate,availbleselectd,i){
          //console.log("test="+activityid);
    }

    moveRight(datamove){
      datamove.sort(); //
      let activityRight = this.state.activityRight;
      let activityLeft = this.state.activityLeft;
      datamove.map((pos) => {
          let dataForMove =  activityLeft[pos];
          activityRight.push(dataForMove);
        });

        datamove.map((pos,i) => {
            let j= pos-i;
            activityLeft.splice(j,1); //remove item at j
          });

          this.setState({
            activityLeft: activityLeft,
            activityRight: activityRight
          });
    }

    closeModal() {
     this.setState({ showModal: false });
    }
  
    openModal() {
      this.setState({ showModal: true });
    }

    addEplToProject() {
      let temp =this.state.employees;  
      
      this.state.emplyees_not_belong.map((info,i) => {
         this.state.employeesNotBelong.map((item,j) => {
            if(info == item.employeeid){
              temp.push(item);
              this.state.employeesNotBelong.splice(j,1);
             // this.state.emplyees_not_belong.splice(i,1);
            }
         })
      })


     this.setState({employees:temp,emplyees_not_belong:[]});
     temp=[]; 
    }

    employeesNotBelong_Checked(employeeid,flag){
      let temp = this.state.emplyees_not_belong;
      if(flag){        
        temp.push(employeeid);
        
      //emplyees_not_belong.push(employeeid)
      }else{
      let i = temp.indexOf(employeeid);
      temp.splice(i,1);
      }

      this.setState({emplyees_not_belong:temp})
      
    }

    DeleteEmplyee(id){
        let temp ; let temp2 =this.state.employees;
        temp2.map((info,i) => {
          if(id==info.employeeid){
            temp=info;
            temp2.splice(i,1);
            return false;
          }
        });

        let temp1 = this.state.employeesNotBelong;
        temp1.push(temp);
        this.setState({employeesNotBelong:temp1,employees:temp2});
       // console.log("temp te==="+this.state.employees.length);
    }

    /* jqurey

     empListAdd(){
      $('#myModal').modal('show');
    }*/

  componentDidMount(){
      let userid =7;
      let businessid=2;
      this.getDataForProject(userid,businessid);
    }
    getDataForProject(userid,businessid) {
      projectActions.get_listProject2(userid,businessid).then(
        (data) => {
        //let data1 ="11"; console.log("test2="+data[1].projectid);
      this.props.onLoadDataForPoject(data);
      }
      ) ;
      //
    }

    render() {
     //S console.log("render")
      let ProjectDOM ="";
      {
        if(this.state.isDisplayDetail==1){
          ProjectDOM =
          <div className="col-md-9 paddT20">
          <form id="form-project">
                <input type="hidden" name="businessid" id="businessid" />
                <input type="hidden" name="projectid" id="projectid" />
                <input type="hidden" name="userid" id="userid_login" />
                <input type="hidden" name="token" value="123" />

                <Detail detailProj ={this.state.detailProj}
                projectypetlist ={this.state.projectypetlist}
                clients ={this.state.clients}
                status_pr ={this.state.status_pr}
                handleInputChangePros ={this.handleInputChange}
                handleSelectChangePros = {this.handleSelectChange} />

                <Activity activityLeft ={this.state.activityLeft} activityRight ={this.state.activityRight}
                    moveDataToR = {this.moveRight}
                    OnchangeReceiveRate = {this.changeReceiveRate}
                    OnchangPayRateOpion = {this.changePayRateOption}
                    OnchangeActivityOption ={this.changeActivityOption}
                />
          </form>

          {/*Employees list*/}

          <div className="col-md-11">
            <div className="portlet box gray top15">
              <div className="portlet-title">
                <div className="caption caption-md">
                  <span className="caption-subject" style={{fontSize: "13px",color:"#000000"}}>Employees</span>
                </div> {/*<!-- caption -->*/}
                <div className="tools">
                  <label  className="tool-add btn btn-transparent red-sunglo btn-outline btn-circle btn-sm"  onClick={()=>this.openModal()}>
                    +
                  </label>
                  <a href=""  className="collapse" data-original-title="" title=""> </a>
                </div>{/* <!-- tools -->*/}
              </div> {/*<!-- porlet-title -->*/}
              <div className="portlet-body">
                <div className="row">
                  <div className="col-md-12">
                    <table style={{width:"100%"}} >
                      <thead >
                      <tr className="line-h35 header-font">
                        <th><span className="btt-line">Employee Name</span></th>
                        <th><span className="btt-line">Phone Number</span></th>
                        <th><span className="btt-line">Email</span></th>
                        <th className="text-center"><span className="btt-line">Action</span></th>
                      </tr>

                      </thead>
                      <tbody>
                        {this.state.employees.map(info => {
                          return(
                            <EmployeesList  key={info.employeeid} info={info} DeleteEmplyee ={()=>this.DeleteEmplyee(info.employeeid)} />
                          )
                        })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Modal*/}

          <EmployeesNotBelong showModal={this.state.showModal}
                    closeModal = {this.closeModal}  
                    addEployeeToProject = {this.addEplToProject}
                    employeesNotBelong_Checked = {this.employeesNotBelong_Checked}
                    employeesNotBelong = {this.state.employeesNotBelong} 
                    emplyees_not_belong ={this.state.emplyees_not_belong}
                    />

          <div className="col-md-11 text-right">
              <span className="msg-err" style={{paddingRight: '25px'}}></span>
              <span className="msg-succ" style={{paddingRight: '25px'}}>{this.props.messageReturn}</span>
              <button className="btn btn-primary" onClick={()=>this.Save(this.state.project_id)}>Save</button>
              <button className="btn btn-primary" style={{display: 'none',marginLeft: '5px'}} >Cancel&nbsp;</button>
              <button className="btn btn-primary" style={{marginLeft: '5px'}}>Delete</button>
          </div>
          
          </div>
        }
      }
        return (
          <div className="page-content">
          <div className="container">
              <div className="row">
                <ProjectList project_list = {this.props.projects}
                  trClick = {this.trClick}
                />
                
                    {ProjectDOM}

                    
                
              </div>
          </div>
          </div>
      );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectContainer);
