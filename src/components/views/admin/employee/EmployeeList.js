import React, { Component } from 'react';

class EmployeeList extends Component {
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
                    <th style={{width:'100%'}}> Name</th>
                </tr>
                </thead>
                <tbody>
                {this.props.employee_list.map(info => {
                  return(
                    <tr className={this.props.row_selected==info.userid ? "cursorStyle row-selectd" : "cursorStyle"} key={info.userid}
                        onClick ={() => this.props.TrClick(info.userid)}
                    >
                      <td style={{width:'100%'}}>{info.fullname}</td>
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

export default EmployeeList;
