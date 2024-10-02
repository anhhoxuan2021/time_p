import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
//import Pagination from './Pagination';
//import range from 'lodash';
import {Pagination } from 'react-bootstrap';
//import PropTypes from 'prop-types';
import * as companyActions from '../../../../actions/admin/companyActions';
import * as actTypes from '../../../../actions/actionTypes';


class CompanyContainer extends React.Component {
    constructor() {
        super(); 
        this.state=({
            activePage: 1
        })

        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(number) {
     // console.log(number);
      this.setState({activePage:number})
    }
     
    render() {
        return (
            <div >
               <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={20}
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect} />
                
            </div>
        );
    }
}

export default CompanyContainer;
