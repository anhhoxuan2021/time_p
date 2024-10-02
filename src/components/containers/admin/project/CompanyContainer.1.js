import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Pagination from './Pagination';
import range from 'lodash';
//import PropTypes from 'prop-types';
import * as companyActions from '../../../../actions/admin/companyActions';
import * as actTypes from '../../../../actions/actionTypes';

const mapStateToProps = (state) => {
  //console.log(state.companyReducers.List1.length);
  return {
    listdata: state.companyReducers.List1,
    TotalCount1: state.companyReducers.Total,
  };
} //

const mapDispatchToProps = (dispatch) => {
    return {
      onLoadDataCompany: (data) => {
      dispatch({ type: actTypes.COMPANYLISTS, companies: data})
    }
  }
};

class CompanyContainer extends React.Component {
    constructor() {
        super(); 
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }

  componentDidMount(){
    let findtext="";
    let pagelength=10;
    let pageno=1;
      this.getDataForCompany(findtext,pagelength,pageno);
    }

    getDataForCompany(findtext,pagelength,pageno) {
      companyActions.get_listCompany(findtext,pagelength,pageno).then(
        (data) => {
          this.props.onLoadDataCompany(data);
        }
      ) ;
      //
    }
 
    onChangePage(currentP) {
      let findtext="";
      let pagelength=10;
      let pageno=currentP;
      this.getDataForCompany(findtext,pagelength,pageno);
    }
 
    render() {
        console.log("TotalCount="+this.props.TotalCount1);
        return (
            <div >
                <div className="container">
                    <div className="text-center">
                        <h1>React - Pagination Example with logic like Google</h1>
                        {
                            this.props.listdata.map((info,i)=>{
                              return(
                                <div className="col-md-12 text-left" key={i} >{info.companyname}</div>
                              );
                            })
                        }

                        <Pagination TotalCount={this.props.TotalCount1} onChangePage={this.onChangePage} />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyContainer);
