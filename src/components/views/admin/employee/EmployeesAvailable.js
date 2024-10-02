import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup,Checkbox,Modal,Header,Body,Footer } from 'react-bootstrap';


class EmployeesAvailable extends React.Component {
  constructor(props) {
    super(props);    
	//	this.open =this.open.bind(this)
		this.close = this.close.bind(this)
		this.add_EployeeToProject=this.add_EployeeToProject.bind(this)
		this.ProjectAvChecked=this.ProjectAvChecked.bind(this);
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

	ProjectAvChecked(projectid,e){
		//e.preventDefault();		
		if(e.target.checked){
			this.props.Project_Av_Checked(projectid,true);
		}else{
		this.props.Project_Av_Checked(projectid,false);
		}

	}

	add_EployeeToProject(){
			this.props.addEployeeToProject();
	}

  render() {	
		if(this.props.availableprojects ==null) {
			return null;
		}
	
    return (
			<div>       
        <Modal bsSize="small" show={this.props.showModal} onHide={()=>this.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Project List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
						<div className="row" >
								<div className="col-md-12  divCrollY200" style={{paddingLeft:"30px"}}>
										<table className="tbl-res" id="tbl-emp-notbelong" style={{marginBottom: "0px",width: "100%",borderTop: "none"}}>
											<tbody>
											{															
												this.props.availableprojects.map((info,i)=>{
													let isChecked ="";
													if(this.props.project_av.length >0){
														
														this.props.project_av.map(project_id =>{
															if(info.projectid==project_id){
																isChecked=true; 
															}
															 
														})
													}
													return(
														<tr className="tr-border" key={info.projectid} >
															<td style={{verticalAlign: "middle"}}>
																	<Checkbox ref={`project-${i}`}  checked={isChecked}
																	onChange={(e)=>this.ProjectAvChecked(info.projectid,e)}>{info.projectname} </Checkbox>
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
						<Button bsStyle="primary" onClick={this.props.E_Project_Add_Empls}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
     
    );
  }
}

export default EmployeesAvailable;
