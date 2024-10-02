import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup,Checkbox,Modal,Header,Body,Footer } from 'react-bootstrap';


class EmployeesNotBelong extends React.Component {
  constructor(props) {
    super(props);    
	//	this.open =this.open.bind(this)
		this.close = this.close.bind(this)
		this.add_EployeeToProject=this.add_EployeeToProject.bind(this)
		this.employeesNotBelongChecked=this.employeesNotBelongChecked.bind(this);
	}
	
	componentWillUpdate(nextProps, nextState) {
		console.log('Component WILL UPDATE!');
 }


	close() {
    this.props.closeModal();
  }

  /*open() {
    this.props.openModal();
	}*/

	employeesNotBelongChecked(employeeid,e){
		//e.preventDefault();		
		if(e.target.checked){
			this.props.employeesNotBelong_Checked(employeeid,true);
		}else{
			this.props.employeesNotBelong_Checked(employeeid,false);
		}

	}

	add_EployeeToProject(){
			this.props.addEployeeToProject();
	}

  render() {	
		//console.log("render="+emplyees_not_belong);
    return (
			<div>
       
        <Modal bsSize="small" show={this.props.showModal} onHide={()=>this.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Employee List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<div className="row" >
								<div className="col-md-12  divCrollY200" style={{paddingLeft:"30px"}}>
										<table className="tbl-res" id="tbl-emp-notbelong" style={{marginBottom: "0px",width: "100%",borderTop: "none"}}>
											<tbody>
											{															
												this.props.employeesNotBelong.map((info,i)=>{
													let isChecked ="";
													if(this.props.emplyees_not_belong.length >0){
														
														this.props.emplyees_not_belong.map(employee_id =>{
															if(info.employeeid==employee_id){
																isChecked=true; 
															}
															 
														})
													}
													return(
														<tr className="tr-border" key={info.employeeid} >
															<td style={{verticalAlign: "middle"}}>
																	<Checkbox ref={`employess-${i}`}  checked={isChecked}
																	onChange={(e)=>this.employeesNotBelongChecked(info.employeeid,e)}>{info.fullname} </Checkbox>
															</td>
													</tr>
													);																
												}
												)
												
											}
											</tbody>
										</table>
								</div>
						</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>this.close()}>Close</Button>
						<Button bsStyle="primary" onClick={()=>this.add_EployeeToProject()}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
     
    );
  }
}

export default EmployeesNotBelong;


/*
Modal.propTypes = {
	isOpen:  PropTypes.bool,
	// boolean to control the state of the popover
	toggle:  PropTypes.func,
	// callback for toggling isOpen in the controlling component
	size: PropTypes.string,
	// control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
	backdrop: PropTypes.oneOfType([
	  PropTypes.bool,
	  PropTypes.oneOf(['static'])
	]),
	keyboard: PropTypes.bool,
	// zIndex defaults to 1000.
	zIndex: PropTypes.oneOfType([
	  PropTypes.number,
	  PropTypes.string,
	]),
	className: PropTypes.string,
	wrapClassName: PropTypes.string,
	modalClassName: PropTypes.string,
	backdropClassName: PropTypes.string,
	contentClassName: PropTypes.string,
} */