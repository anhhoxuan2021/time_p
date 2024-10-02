import React, { Component } from 'react';
import {FormGroup,Radio } from 'react-bootstrap';
class EmplProjects extends Component {
  constructor(props) {
      super(props);

      //Bind
      this.Delete_Project = this.Delete_Project.bind(this)
    }

    /*shouldComponentUpdate(nextProps, nextState){
        if(nextProps!=""){
            console.log("nextProps.clientname=="+nextProps.clientname)
        }
        
        return false;
    } */

    // jqurey
   
    Delete_Project(id){
        this.props.DeletePoject(id)
    }
    render() {
        if(this.props.emplprojects==null){
            return null;
       }
      
      return (
    <div className="col-md-10">
        <div className="portlet box gray top15">
            <div className="portlet-title">
                <div className="caption caption-md">
                    <span className="caption-subject" style={{fonSize: '13px',color:'#000000'}}>Projects</span>
                </div> 
                <div className="tools">
                    <label className="tool-add btn btn-transparent red-sunglo btn-outline btn-circle btn-sm" onClick = {() =>{this.props.openModal()}} >
                        +
                    </label>
                    <a href=""  id="expand-colapse" className="collapse" data-original-title="" title=""> </a>
                </div> 
            </div> 
            <div className="portlet-body">
                <div className="row">
                    <div className="col-md-12">
                        <table  style={{width: '100%'}} id="tbl-project">
                            <thead >
                            <tr className="line-h35 header-font">
                                <th style={{width :'22%'}}><span className="btt-line">Project Name</span></th>
                                <th style={{width :'22%'}}><span className="btt-line">Start Date</span></th>
                                <th style={{width :'22%'}}><span className="btt-line">End Date</span></th>
                                <th style={{width :'22%'}}><span className="btt-line">Status</span></th>
                                <th ><span className="btt-line">Status</span></th>
                            </tr>

                            </thead>
                            <tbody>
                                {
                                    this.props.emplprojects.map((item, i) => {
                                        return (
                                            <tr key={item.projectid}>                                               
                                                <td style={{width :'22%'}}>{item.projectname}</td>
                                                <td style={{width :'22%'}}>{item.startdate}</td>
                                                <td style={{width :'22%'}}>{item.enddate}</td>
                                                <td style={{width :'22%'}}>{item.statusname}</td>
                                                <td className="text-center" style={{cursor: "pointer"}} >
                                                <label className="top5 btn btn-transparent grey-salsa btn-outline btn-circle btn-sm ">
                                                    <i className="fa fa-trash-o fonsize10"  title="Delete" onClick={()=>this.Delete_Project(item.projectid)}></i>
                                                </label>
                                            </td>
                                            </tr>
                                        );
                                    }) 
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )
    }

}

export default EmplProjects;
