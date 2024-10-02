var isSelected =[];
var isRSelected =[];
//var isProtest =false;
import React, { Component } from 'react';
import {FormGroup,Radio } from 'react-bootstrap';
class Activity extends Component {
  constructor(props) {
      super(props);
      let Rlength = this.props.activityRight.length;
      let Llength = this.props.activityLeft;
      this.state=({
        isErro : false,
        isProtest : false,
        listRightSelected:Array(Rlength).fill(false),
        listLeftSelected:Array(Llength).fill(false),
        //selectedOption:'1'
      });

      this.CancelActivity = this.CancelActivity.bind(this);

      this.ActRightClick = this.ActRightClick.bind(this);
      this.ActLeftClick = this.ActLeftClick.bind(this);

      this.moveR = this.moveR.bind(this);
      this.OnHandleReceiveRate = this.OnHandleReceiveRate.bind(this);
      this.OnHandlePayRateOption = this.OnHandlePayRateOption.bind(this);
      this.OnHandleActivityOption =this.OnHandleActivityOption.bind(this);
    }
   

    CancelActivity(i){
        this.state.isProtest = false;
        this.setState({isProtest:this.state.isProtest});
    }

    EditActivity(){
      //console.log(isSelected.length);
      if(isSelected.length>1){
        this.state.isErro = true;
        this.setState({isErro:this.state.isErro});
        setTimeout(function() {
          this.state.isErro = false;
          this.setState({isErro:this.state.isErro}); }.bind(this), 3000);
      }else if(isSelected.length==1){
          this.state.isProtest = true;
          this.setState({isProtest:this.state.isProtest})
      }

    }

    OnHandleReceiveRate(e){
        let value = e.target.value;
        let id = e.target.id;
        this.props.OnchangeReceiveRate(value,id);
    }

    OnHandlePayRateOption(i,e){
        let value = e.target.value;
        this.props.OnchangPayRateOpion(value,i);
    }

    OnHandleActivityOption(i,keyName,e){
      let value = e.target.value
      this.props.OnchangeActivityOption(value,i,keyName)
    }

    moveR() {
          this.props.moveDataToR(isSelected);

     }

     ActRightClick(i){
       if(!this.state.listRightSelected[i]){
         isRSelected.push(i);
       }else{
         let position = isRSelected.indexOf(i);
         isRSelected.splice(position,1);
       }

        this.state.listRightSelected[i] = !this.state.listRightSelected[i];
        this.setState({listRightSelected:this.state.listRightSelected});
     }

     ActLeftClick(availbleselectd,i,e){
       if(!this.state.isProtest){
         if(e.ctrlKey){
            if(!availbleselectd){
              isSelected.push(i);
            }else{
              let position = isSelected.indexOf(i);
              isSelected.splice(position,1);
            }

            this.state.listLeftSelected[i] = !this.state.listLeftSelected[i];
         
        }else{
             if(!availbleselectd){
                  isSelected=[];
                  isSelected.push(i);
              }else{
                  let position = isSelected.indexOf(i);
                  isSelected.splice(position,1);
               }

              let status_i = !this.state.listLeftSelected[i];
              this.state.listLeftSelected.fill(false);          
              this.state.listLeftSelected[i] = status_i
         }

         this.setState({listLeftSelected:this.state.listLeftSelected});
       }
     }

    render() {

      return (
        <div>
        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 marginT5 form-horizontal">
            <label className="col-md-3 col-sm-3 col-xs-3 paddRL-R control-label text-left">Available Activities</label>
            <div className="col-md-3 col-sm-4 col-xs-8">
                <label className="top5 btn btn-transparent red-sunglo btn-outline btn-circle btn-sm" id="add-activity">+</label>
                <label className="top5 btn btn-transparent green btn-outline btn-circle btn-sm" id="edit-activity"
                    onClick={() => this.EditActivity()}
                >
                    <i className="fa fa-pencil fonsize10 cursorStyle" title="Edit"></i>
                </label>
                <label className="top5 btn btn-transparent grey-salsa btn-outline btn-circle btn-sm" id="delete-activity">
                    <i className="fa fa-trash-o fonsize10 cursorStyle" title="Delete"></i>
                </label>
            </div>
            <label id="of-activities" className={this.state.isErro ? "col-md-5 control-label text-left paddL displayNone": "col-md-5 control-label text-left paddL"} >Selected Activities</label>
            <label id="of-message" className={this.state.isErro ? "col-md-5 control-label text-left paddL" : "col-md-5 control-label text-left paddL displayNone"} >
                <span className="save-activity-msg" className="msg-succ paddL"></span>
                <span className="error-activity-msg paddL">{this.state.isErro ? "Select only one to edit" : ""}</span>
            </label>
        </div>

          <div className="col-md-12 col-xs-12 col-sm-12 marginT5 displayFlex" >
                <div className="col-md-5 col-xs-5 col-sm-5 paddR paddRL-R">
                    <div className="col-md-12 col-ms-12 paddR7L5-R activity-left">
                    {	this.props.activityLeft.map((info,i) => {

                        let clName = "col-md-12 col-sm-12 col-xs-12 paddRL availble-click";
                          if(this.state.isProtest){
                            if(isSelected[0]==i){
                                  clName = "col-md-12 col-sm-12 col-xs-12 paddRL availble-click";
                            }else{
                                  clName = "displayNone";
                            }
                          }else{
                            if(this.state.listLeftSelected[i]){
                               clName = "col-md-12 col-sm-12 col-xs-12 paddRL availble-click availble-selectd";
                            }
                          }

                        return(
                          <span className={clName}
                            onClick={(e)=>this.ActLeftClick(this.state.listLeftSelected[i],i,e)}
                             key={i}
                          >
                          <div className="acitivity-label" >{this.state.isProtest &&(isSelected[0]==i) ? "" : info.activityname}</div>
                          <span className={this.state.isProtest &&(isSelected[0]==i) ? "col-md-12 col-sm-12 col-xs-12 paddRL" : "col-md-12 col-sm-12 col-xs-12 paddRL displayNone"}>
                            <span className="col-md-10 col-sm-10 col-xs-12 paddRL">
                              <div className="col-md-12 col-sm-12 col-sm-12 paddRL">
                                <input className="paddR5L5 form-control h24" value={info.activityname}
                                  onChange={(e)=>{this.OnHandleActivityOption(i,"activityname",e)}}  
                                 />
                              </div>
                              <div className="col-md-12 paddRL top5">
                                <label className="paddT3 col-sm-5 col-xs-4 paddRL">Receive Rate</label>
                                <div className="col-md-7 col-sm-7 col-xs-8 paddRL">
                                  <label className="col-md-3 col-sm-3 col-xs-3 paddRL paddT3">$</label>
                                  <span className="col-md-9 col-sm-9 col-xs-9 paddRL">
                                    <input className="paddR5L5 form-control h24 number-require" name="receiverate"
                                   
                                   
                                    onChange={(e)=>{this.OnHandleActivityOption(i,"receiverate",e)}}  
                                     />
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-12 col-sm-12 col-xs-12 paddRL top5" style={{display:'flex'}}>
                                <label className="col-md-4 col-sm-4 col-xs-4 paddRL paddT3">Pay Rate</label>
                                <div className="paddRL col-md-5 col-xs-5 col-sm-5">
                                <FormGroup>
                                	<Radio name={i} value="1"
                                    checked={info.payrateoption === '1'}
                                     
                                    onChange={(e)=>{this.OnHandleActivityOption(i,"payrateoption",e)}}  
                                    >Default</Radio>

                                	<Radio name={i}  value="2"
                                	checked={info.payrateoption === '2'}
                                
                                  onChange={(e)=>{this.OnHandleActivityOption(i,"payrateoption",e)}} 
                                  >Custom </Radio>

                                	<Radio name={i}  value="3"
                                	checked={info.payrateoption === '3'}
                                	
                                  onChange={(e)=>{this.OnHandleActivityOption(i,"payrateoption",e)}} 
                                  >No rates </Radio>
                                </FormGroup>
                                </div>

                                <div className="paddRL col-md-4 col-sm-4 col-xs-3">
                                  <div className="col-md-12 marginb2" style={{marginTop:'25px'}}></div>
                                  <input className="form-control h24  payrate paddRL text-center number-require" name="payrate" value={info.payrate}
                                  onChange={(e)=>{this.OnHandleActivityOption(i,"payrate",e)}} 
                                   />
                                </div>
                              </div>
                            </span>
                            <span className="col-md-2 col-sm-2 col-xs-12 paddRL text-right margint6">
                            <label className="btn btn-transparent green btn-outline btn-circle btn-sm"
                                onClick={() => this.SaveActivity(i)}
                            >
                                <i className="fa fa-file-text-o  save-activity btnsave" title="Save"></i>
                            </label>
                            <label className="top5 btn btn-transparent grey-salsa btn-outline btn-circle btn-sm"
                            onClick={() => this.CancelActivity(i)} >
                                <i className="fa fa-repeat cancel-activity btncancel"  title="Cancel"></i>
                            </label>

                            </span>
                          </span>
                          </span>
                        ) ;
                      })
                    }

                    </div>
                </div>

                <div className="col-md-1 col-xs-2 col-sm-1 paddRL text-center top23">
                    	<div className="col-md-12 paddRL cursorStyle" id="move-one-right">
                    		<img src={require('../../../../../public/image/arrowhide_right.png')}
                            onClick = {() => this.moveR()}
                        />
                    	</div>
                    	<div className="col-md-12 top3 paddRL cursorStyle" id="move-mul-right">
                    		<img src={require('../../../../../public/image/arrowhide_rightx2.png')} />
                    	</div>
                    	<div className="col-md-12 top3 paddRL cursorStyle" id="move-one-left">
                    		<img src={require('../../../../../public/image/arrowhide_left.png')} />
                    	</div>
                    	<div className="col-md-12 top3 paddRL cursorStyle" id="move-mul-left">
                    		<img src={require('../../../../../public/image/arrowhide_leftx2.png')} />
                    	</div>
                </div>

                <div className="col-md-5 col-xs-5 col-sm-5 paddL paddRL-R paddR5">
                    <div className="col-md-12 col-ms-12 activity-right">
                    {	this.props.activityRight.map((info,i) => {
                          return(
                          <span className={this.state.listRightSelected[i] ? "col-md-12 col-sm-12 col-xs-12 paddRL availble-click availble-selectd" : "col-md-12 col-sm-12 col-xs-12 paddRL availble-click"}
                          onClick={()=>this.ActRightClick(i)}
                           key={i}
                          >
                          <div className="acitivity-label" >{info.activityname}</div>

                          </span>
                          ) ;
                          })
                          }

                    </div>
                </div>
          </div>
          </div>
      );
    }

}

export default Activity;
