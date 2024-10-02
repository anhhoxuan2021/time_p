import PropTypes from 'prop-types'
import React, { Component } from 'react';
//import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import {Form, FormGroup,Radio } from 'react-bootstrap';

import '../../../../../public/css/components.css';
//import '../../../../../public/css/font-awesome/css/font-awesome.css';
//import '../../../../../public/css/custom.css';
import '../../../../../public/css/custom-admin.css';
import '../../../../../public/css/projectdetail.css';

import * as clientActions from '../../../../actions/admin/clientActions';
import * as actTypes from '../../../../actions/actionTypes';

import ClientList from '../../../views/admin/clients/ClientList';
import ClientDetail from '../../../views/admin/clients/ClientDetail';
import ClientProjects from '../../../views/admin/clients/ClientProjects';

var isDisplayDetail =0;


const mapStateToProps = (state) => {
  return {
    client_list : state.clientsReducers,
    info: state.clientsInfoReducers.client_info,
    info_enable: state.clientsInfoReducers.info_enable,

    client_projects: state.clientProjectReducers.client_projects,
    client_projects_enable: state.clientProjectReducers.client_projects_enable,
  };
} 

const mapDispatchToProps = (dispatch) => {
    return {
      onLoadGetClientsList: (data) => {
      dispatch({ type: actTypes.CLIENTLIST, clients: data})
      }, 

      onLoadClientsDetailID :(data) => {
        dispatch({type: actTypes.CLIENTINFO, clientinfo: data})
      },

      onLoadGetProjects : (data) => {
        dispatch({type : actTypes.CLIENTPROJECTS, clientprojects : data})
      }


  }
};


class ClientsContainer extends Component {
    constructor(props, context) {

        super(props, context);

        this.state = {
          info:"",
          info_enable:0          
        };

        let userid =7;
        let businessid=2;

        //event
        this.TrClick = this.TrClick.bind(this)
        this.E_handleInputChange = this.E_handleInputChange.bind(this)
        this.Save = this.Save.bind(this)
    }

   
    componentWillMount(){
      //console.log("test test");
    }

    componentWillReceiveProps(newProps) {  
      if(newProps.info_enable==1){
        this.setState({info: newProps.info})
      }  

     
    } 

  componentDidMount(){
      let userid =7;
      let businessid=2;
      /********** */
      clientActions.GetClientsList(userid,businessid).then(
        (data) => {
      this.props.onLoadGetClientsList(data);
      }
      ) ;
      /********** */
    }

    /********** Handle Event   ********* */

    E_handleInputChange(e) {
      //console.log("name=="+e.target.name +"===val"+e.target.value)
      this.setState({
        info: Object.assign(
        {},
        this.state.info,
        { [e.target.name]: e.target.value }
      )
      });
    }

    Save(id){      

      let paras = {
        token:123,
        userid: 7, 
        businessid:2,
        clientid:id,
        clientname : this.state.info.clientname,
        address1 : this.state.info.address1,
        address2 : this.state.info.address2,
        city : this.state.info.city,
        stateid : this.state.info.stateid,
        zipcode : this.state.info.zipcode,
        email : this.state.info.email,
        clientphone : this.state.info.clientphone,
        clientfax : this.state.info.clientfax

      }

      let url = '_editclient.php';

      clientActions.SaveClient(url, paras).then(
        (data) => {
          this.setState({
            EDIT : "SUCCESS"          
          }) ;


          setTimeout(
            () => { 
              this.setState({
                EDIT : ""          
              }) ;
             },
            2000
          )
       }
      ) ;

      
    }
    
    TrClick(clientid){
      this.setState({
        row_selected : clientid
      })

      let userid =7;
      let businessid=2;
      clientActions.ClientDetailID(userid, businessid, clientid).then(
        (data) => {       
          this.props.onLoadClientsDetailID(data[0]);
        }
      ) ;     

      clientActions.GetProjects(userid, businessid, clientid).then(
        (data) => {       
          this.props.onLoadGetProjects(data);
        }
      ) ;  
   
    }

    render() {   
      //console.log("====="+this.props.client_projects_enable);
      let formHMML ="" ;      
      if(this.props.info_enable==1 && this.props.client_projects_enable==1) {
        formHMML = 
        <div className="col-md-9 col-sm-9 col-xs-12 form-horizontal paddT20"> 
            <ClientDetail 
            info = {this.state.info}
            E_handleInputChangeChild = {this.E_handleInputChange}
            />

          <ClientProjects client_projects = {this.props.client_projects} />

          <div className="col-md-10 col-sm-10 col-xs-10 text-right">
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <span id="error-msg" className="msg-err" style={{paddingRight: '5px'}}></span>
                    <span id="success-msg" className="msg-succ" style={{paddingRight: '5px'}}>{this.state.EDIT}</span>
                  </div>
                <div className="col-md-9 col-sm-9 col-xs-9">
                  <button className="btn btn-primary"
                    onClick = {() => this.Save(this.state.info.clientid)}>Save</button> &nbsp;
                  <button className="btn btn-primary" style={{display: 'none'}}>Cancel</button>
                  <button className="btn btn-primary" id="delete-project">Delete</button>
                </div>
            </div>
      </div>
      }

      return (
          <div className="page-content">
          <div className="container">
              <div className="row">
              <ClientList 
                client_list = {this.props.client_list}
                row_selected = {this.state.row_selected}
                TrClick = {this.TrClick}
              />
                
                  {formHMML}

                
                
              </div>
          </div>
        </div>
      );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClientsContainer);
