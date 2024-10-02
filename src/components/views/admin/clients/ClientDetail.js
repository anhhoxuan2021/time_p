import React, { Component } from 'react';
import {FormGroup,Radio } from 'react-bootstrap';
class ClientDetail extends Component {
  constructor(props) {
      super(props);

      //Bind
     
    }

    /*shouldComponentUpdate(nextProps, nextState){
        if(nextProps!=""){
            console.log("nextProps.clientname=="+nextProps.clientname)
        }
        
        return false;
    } */

    // jqurey
   

    render() {
      return (        
        <form className="form form-horizontal">
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left ">Client Name:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="clientname" 
                    value={this.props.info.clientname}
                    onChange ={(e) => this.props.E_handleInputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left">Address:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="address1" 
                    value={this.props.info.address1}
                    onChange ={(e) => this.props.E_handleInputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left"></label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="address2"
                    value={this.props.info.address2}
                    onChange ={(e) => this.props.E_handleInputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left paddR">City/State/Zipcode</label>
                <div className="col-md-5 col-sm-8 col-xs-8">
                    <div className="col-md-4 col-sm-4 col-xs-4 paddR5L0">
                        <input type="text" className="form-control paddRL text-center h28" name="city"
                        value={this.props.info.city}
                        onChange ={(e) => this.props.E_handleInputChangeChild(e)} 
                        />
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-5 paddRL">
                        <select className="form-control-nw h28 " name="stateid"
                        value={this.props.info.stateid}
                        onChange ={(e) => this.props.E_handleInputChangeChild(e)} 
                         ></select>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 paddRL5">
                        <input type="text" className="form-control h28 paddRL text-center" name="zipcode"
                        value={this.props.info.zipcode}
                        onChange ={(e) => this.props.E_handleInputChangeChild(e)} 
                         />
                    </div>
                </div>

            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-sm-3 col-xs-3 paddRL control-label text-left">Email:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="email"
                        value={this.props.info.email}
                        onChange ={(e) => this.props.E_handleInputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left">Phone Number:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="clientphone"
                        value={this.props.info.clientphone}
                        onChange ={(e) => this.props.E_handleInputChangeChild(e)} 
                     />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left">Fax Number:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="h28 form-control" name="clientfax" 
                        value={this.props.info.clientfax}
                        onChange ={(e) => this.props.E_handleInputChangeChild(e)} 
                    />
                </div>
            </div>
            
          
        </form>
      )
    }

}

export default ClientDetail;
