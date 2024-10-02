import React, { Component } from 'react';

var DatePicker = require("react-bootstrap-date-picker");
class ProjectList extends Component {
  constructor(props) {
      super(props);
        this.handleInputDate = this.handleInputDate.bind(this);
    }

    handleInputDate(value){
        console.log(value);
    }

    render() {
        const  info = this.props.detailProj;
        let valueDate = new Date(info.startdate).toISOString();
      return (
      <div>
      <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
          <label className="col-md-3 col-sm-3 col-xs-3 paddRL-R control-label text-left">Project Name:</label>
          <div className="col-md-4 col-ms-4 col-xs-8">
          <fieldset>
           <input type="text" className="form-control padd6_15 h28"
            name="projectname"
            value ={info.projectname}  onChange={this.props.handleInputChangePros}/>
          </fieldset>
          </div>
      </div>

      <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
          <label className="col-md-3 col-sm-3 col-xs-3 paddRL-R control-label text-left">Project type</label>
          <div className="col-md-4 col-sm-4 col-xs-8">
              <select className="form-control-nw h28" name="projecttypeid"  value ={info.projecttypeid}
              onChange={this.props.handleSelectChangePros} >
              {this.props.projectypetlist.map((infor) => {
                    return (<option key={infor.projecttypeid} value={infor.projecttypeid}>{infor.projecttypename}</option>);
                })
                }
              </select>
          </div>
     </div>

    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
     <label className="col-md-3 col-sm-3 col-xs-3 paddRL-R control-label text-left">Client</label>
     <div className="col-md-4 col-sm-4 col-xs-8">
         <select className="form-control-nw h28" name="clientid"  value ={info.clientid}
         onChange={this.props.handleSelectChangePros} >
         {this.props.clients.map((infor) => {
               return (<option key={infor.clientid} value={infor.clientid}>{infor.clientname}</option>);
             })
           }
         </select>
     </div>
    </div>

    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
        <label className="col-md-3 col-sm-3 col-xs-3 paddRL-R control-label text-left">Start Date</label>
        <div className="col-md-4 col-sm-4 col-xs-8">
            <DatePicker 
              value ={valueDate}  onChange={this.handleInputDate}
            />
        </div>
    </div>

    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
        <label className="col-md-3 col-sm-3 col-xs-3 paddRL-R control-label text-left">From Date</label>
        <div className="col-md-4 col-sm-4 col-xs-8">
            <div className="input-group date datewidth" data-date="" data-date-format="mm/dd/yyyy" data-date-viewmode="years">
                  <fieldset>
                   <input type="text" className="form-control padd6_15 h28"
                    name="enddate"
                    value ={info.enddate}  onChange={this.props.handleInputChangePros}/>
                  </fieldset>
                <span className="input-group-btn">
                    <button className="btn default h28 btn-calendar-f" type="button">
                        <i className="fa fa-calendar"></i>
                    </button>
                </span>
          </div>
       </div>
    </div>

    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
     <label className="col-md-3 col-sm-3 col-xs-3 paddRL-R control-label text-left">Status</label>
     <div className="col-md-4 col-sm-4 col-xs-8">
         <select className="form-control-nw h28" name="statusid"  value ={info.statusid}
         onChange={this.props.handleSelectChangePros} >
         {this.props.status_pr.map((infor) => {
               return (<option key={infor.statusid} value={infor.statusid}>{infor.statusname}</option>);
            })
           }
         </select>
     </div>
    </div>
</div>
      );
    }

}

export default ProjectList;
