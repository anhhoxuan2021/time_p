import React, { Component } from 'react';
import {FormGroup,Radio } from 'react-bootstrap';
class ActivityDetail extends Component {
  constructor(props) {
      super(props);

      //Bind
      this.ProjectListAdd = this.ProjectListAdd.bind(this);
      this.E_project_delete_this = this.E_project_delete_this.bind(this)
    }

    // jqurey
    ProjectListAdd(){
        $('#projectcanaddtoact-modal').modal('show');
    }

    E_project_delete_this(projectid){
       this.props.E_project_delete(projectid);
    }

    render() {
      return (
        <form className="form form-horizontal">
            <input type="hidden" name="businessid" />
            <input type="hidden" name="activityid" value={this.props.info.activityid} />
            <input type="hidden" name="userid"  />
            <input type="hidden" name="token" value="123" />
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <label className="col-md-2 col-sm-2 col-xs-3 control-label text-left">Activity Name:</label>
                <div className="col-md-4 col-sm-4 col-xs-8">
                    <input type="text" className="form-control padd6_15 h28"
                     name="activityname" value ={this.props.info.activityname} onChange={(e) => this.props.E_handleInputChangePros(e)} />
                </div>
            </div>

            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 top7">
                <label className="col-md-2 col-sm-2 col-xs-3 control-label text-left">Receive Rate:</label>
                <div className="col-md-3 col-sm-3 col-xs-7 paddR">
                    <div className="col-md-12 paddRL">
                        <div className="col-md-1 col-sm-1 col-xs-1 paddRL text-left paddT7">$</div>
                        <div className="col-md-11 col-sm-11 col-xs-9 paddR paddRL-R">
                            <input type="text" className="h28 form-control padd6_15 number-require" 
                            name="receiverate"  value = {this.props.info.receiverate} onChange={this.props.E_handleInputChangePros} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 top10">
                <label className="col-md-2 col-sm-2 col-xs-3 control-label text-left">Pay Rate:</label>
                
                <div className="col-md-2 col-sm-2 col-xs-3 paddR-R">
                    <div className="mt-radio-list col-md-12">
                    <FormGroup>
                        <Radio name="payrateoption" value="1"
                        checked={this.props.info.payrateoption === '1'}                        
                        onChange={this.props.E_handleInputChangePros} >Default</Radio>

                        <Radio name="payrateoption"  value="2"
                        checked={this.props.info.payrateoption === '2'}
                        onChange={this.props.E_handleInputChangePros} >Custom </Radio>

                        <Radio name="payrateoption" value="3"
                        checked={this.props.info.payrateoption === '3'}onChange={this.props.E_handleInputChangePros} >No rates </Radio>
                    </FormGroup>

                    </div>
                </div>
                <div className="paddL col-md-1 col-sm-1 col-xs-3 paddRL">
                    <div className="col-md-12">&nbsp;</div>
                    <input className="form-control h28  paddRL text-center number-require" 
                     name="payrate" value={this.props.info.payrate} onChange={this.props.E_handleInputChangePros} />
                </div>
            
            </div>

            <div style={{clear: 'both'}}></div>

            <div className="col-md-11">
                <div className="portlet box gray top15">
                    <div className="portlet-title">
                        <div className="caption caption-md">
                            <span className="caption-subject" style={{fonSize: '13px',color:'#000000'}}>Projects</span>
                        </div> 
                        <div className="tools">
                            <label className="tool-add btn btn-transparent red-sunglo btn-outline btn-circle btn-sm" onClick = {this.ProjectListAdd} >
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
                                        <th style={{width :'25%'}}><span className="btt-line">Project Name</span></th>
                                        <th style={{width :'20%'}}><span className="btt-line">Start Date</span></th>
                                        <th style={{width :'20%'}}><span className="btt-line">End Date</span></th>
                                        <th style={{width :'20%'}}><span className="btt-line">Status</span></th>
                                        <th style={{width :'15%'}} className="text-center"><span className="btt-line">Action</span></th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                        {
                                            this.props.projects_List.map((item, i) => {
                                                return (
                                                    <tr key={item.projectid}>
                                                       
                                                        <td style={{width :'25%'}}>{item.projectname}</td>
                                                        <td style={{width :'20%'}}>{item.startdate}</td>
                                                        <td style={{width :'20%'}}>{item.enddate}</td>
                                                        <td style={{width :'20%'}}>{item.statusname}</td>
                                                        <td style={{width :'15%', cursor: 'pointer'}} className="text-center">
                                                            <label className="top5 btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                                                            onClick = {() => this.E_project_delete_this(item.projectid)}>
                                                                <i className="fa fa-trash-o fonsize10" style={{cursor: 'pointer'}} title="Delete" >
                                                                    </i>
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
            <div className="col-md-11 text-right">
                <span id="error-msg" className="msg-err" style={{paddingRight: '25px'}}></span>
                <span id="success-msg" className="msg-succ" style={{paddingRight: '25px'}}></span>
                <button className="btn btn-primary" type="Submit">Save</button> &nbsp;
                <button className="btn btn-primary" style={{display: 'none'}}>Cancel</button>
                <button className="btn btn-primary" id="delete-project">Delete</button>
            </div>
          
        </form>
      )
    }

}

export default ActivityDetail;
