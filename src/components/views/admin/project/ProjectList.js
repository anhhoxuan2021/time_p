import React, { Component } from 'react';
class ProjectList extends Component {
  constructor(props) {
      super(props);

    }

    render() {
      return (
        <div className="col-md-3 colum-left paddT20 min-h700">
        <div className="col-md-12 top10 paddRL">
            <table className="tbl-bg scroll tblMH450 tblgeneral tblhead34 tbltr30">
                <thead className="thead">
                <tr>
                    <th style={{width:'74%'}}>Project Name</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {this.props.project_list.map(info => {
                  return(
                    <tr className="cursorStyle row-click" key={info.projectid}
                        onClick ={() => this.props.trClick(info.projectid)}
                    >
                      <td style={{width:'65%'}}>{info.projectname}</td>
                      <td>{info.statusname}</td>
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

export default ProjectList;
