import React from 'react';
import Pagination from './Pagination';
//import PropTypes from 'prop-types';
class CompanyContainer extends React.Component {
    constructor() {
        super();
 
        // an example array of items to be paged
        var exampleItems = _.range(1, 151).map(i => { return { id: i, name: 'Item ' + i }; });
 
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };
 
        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
 
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
 
    render() {
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h1>React - Pagination Example with logic like Google</h1>
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CompanyContainer;
