import React, { Component } from 'react';

class ActivityList extends Component {
  constructor(props) {
      super(props);

    }

    render() {
      return (
        <div className="col-md-3 colum-left paddT20 min-h700">
        
        <div className="input-icon right">
          <i className="icon-magnifier" style={{cursor: 'pointer'}}></i>
          <input id="searchform"  type="text" className="txtsearch form-control h28" title="Enter Activity name or rate to search" placeholder="search..." />
        </div>

        <div className="col-md-12 top10 paddRL">
            <table className="tbl-bg scroll tblMH450 tblgeneral tblhead34 tbltr30">
                <thead className="thead">
                <tr>
                    <th style={{width:'60%'}}>Activity Name</th>
                    <th>Rate</th>
                </tr>
                </thead>
                <tbody>
                {this.props.activity_list.map(info => {
                  if(info.payrate==""){
                    info.payrate = "Default";
                  }

                  //if(this.props.row_selected==)
                  return(
                    <tr className={this.props.row_selected==info.activityid ? "cursorStyle row-selectd" : "cursorStyle"} key={info.activityid}
                        onClick ={() => this.props.TrClick(info.activityid)}
                    >
                      <td style={{width:'60%'}}>{info.activityname}</td>
                      <td>{info.payrate}</td>
                    </tr>
                  )
                })
                }
                </tbody>
            </table>
        </div>
        </div>
      );
    }

}

export default ActivityList;
