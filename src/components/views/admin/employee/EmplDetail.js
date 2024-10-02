import React, { Component } from 'react';
import {FormGroup,Radio } from 'react-bootstrap';
class EmplDetail extends Component {
  constructor(props) {
      super(props);

      //Bind
      this.E_handle_InputChangeChild = this.E_handle_InputChangeChild.bind(this)
    }

    /*shouldComponentUpdate(nextProps, nextState){
        if(nextProps!=""){
            console.log("nextProps.clientname=="+nextProps.clientname)
        }
        
        return false;
    } */

    // jqurey
    E_handle_InputChangeChild(e){
        //console.log("name=="+e.target.name +"===val"+e.target.value)
        this.props.E_handleInputChangeChild(e.target.name,e.target.value)
    }

    render() {
        if(this.props.info==null){
            return null;
       }
       
      return (        
        <form className="form form-horizontal">
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left ">Full Name:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="fullname" 
                    value={this.props.info.fullname}
                    onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left">Cell Phone:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="phone" 
                    value={this.props.info.phone}
                    onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left">Address</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="address1"
                    value={this.props.info.address1}
                    onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left"></label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="address2"
                    value={this.props.info.address2}
                    onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left paddR">City/State/Zipcode</label>
                <div className="col-md-5 col-sm-8 col-xs-8">
                    <div className="col-md-4 col-sm-4 col-xs-4 paddR5L0">
                        <input type="text" className="form-control paddRL text-center h28" name="city"
                        value={this.props.info.city}
                        onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                        />
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-5 paddRL">
                        <select className="form-control-nw h28 " name="stateid"
                        value={this.props.info.stateid}
                        onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                         >
                          {
                              this.props.country_state.map(info => {
                                  return(
                                        <option key={info.stateid} value={info.stateid}>{info.stateid}</option>
                                  );
                              })
                          }
                         </select>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 paddRL5">
                        <input type="text" className="form-control h28 paddRL text-center" name="zipcode"
                        value={this.props.info.zipcode}
                        onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                         />
                    </div>
                </div>

            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-sm-3 col-xs-3 paddRL control-label text-left">Email:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="form-control h28" name="email"
                        value={this.props.info.email}
                        onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-sm-3 col-xs-3 paddRL control-label text-left">User Type:</label>
                <div className="col-md-5 col-xs-8">
                    <select className="form-control-nw h28 " name="usertypeid"
                        value={this.props.info.usertypeid}
                        onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                    >
                    {
                        this.props.style_list.map(info => {
                            return(
                                <option key={info.usertypeid} value={info.usertypeid}>{info.typename}</option>
                            );
                        })
                    }
                    </select>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left">Hourly Rate:</label>
                <div className="col-md-5 col-xs-8">
                    <div className="col-md-1 col-xs-1 paddL top5"> $</div>
                    <div className="col-md-6 col-xs-6 paddL">
                    <input type="text" className="form-control h28" name="hourlyrate"
                        value={this.props.info.hourlyrate}
                        onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                     />
                    </div> 
                    <label className="col-md-5 col-ms-5 col-xs-5 control-label text-left" id="show-ratehistory" style={{color:"#428bca", cursor: "pointer"}}>Rates History</label>                   
                </div>
                
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 top10">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left">Password:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="h28 form-control" name="password" 
                        value={this.props.info.password}
                        onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left">Confirm Password:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="h28 form-control" name="confirmpassword" 
                        value={this.props.info.confirmpassword}
                        onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5">
                <label className="col-md-3 col-ms-3 col-xs-3 paddRL control-label text-left">Active:</label>
                <div className="col-md-5 col-xs-8">
                    <input type="text" className="h28 form-control" name="active" 
                        value={this.props.info.active}
                        onChange ={(e) => this.E_handle_InputChangeChild(e)} 
                    />
                </div>
            </div>
            
          
        </form>
      )
    }

}

export default EmplDetail;
