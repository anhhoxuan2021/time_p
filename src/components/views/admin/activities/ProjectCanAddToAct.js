import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup,Checkbox,Modal,Header,Body,Footer } from 'react-bootstrap';


class ProjectCanAddToAct extends React.Component {
  constructor(props) {
    super(props);    
		//this.add_EployeeToProject=this.add_EployeeToProject.bind(this)
		this.E_projectCanAddToAct_this = this.E_projectCanAddToAct_this.bind(this)
	}
	
	componentWillUpdate(nextProps, nextState) {
 }


	E_projectCanAddToAct_this(projectid,e){
		if(e.target.checked){
			this.props.E_projectCanAddToAct(projectid,true);
		}else{
			this.props.E_projectCanAddToAct(projectid,false);
		}

	} 

	add_EployeeToProject(){
		//	this.props.addEployeeToProject();
	} 

  render() {	
    return (
			<div>			
			<div className="modal fade" id="projectcanaddtoact-modal"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-sm">
				<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal">
									<span aria-hidden="true">&times;</span>
								</button>
								<h4 className="modal-title" id="myModalLabel">Project List</h4>
							</div>
							<div className="modal-body" style= {{paddingTop : '0px'}}>
									<div className="row" >
										<div className="col-md-12  divCrollY200" style={{paddingLeft:"30px"}}>
												<table className="tbl-res" style={{marginBottom: "0px",width: "100%",borderTop: "none"}}>
													<tbody>
													{															
														this.props.projects_belong.map((info,i)=>{
															let isChecked ="";
															if(this.props.projects_belong_checked.length>0){
																this.props.projects_belong_checked.map((this_projectid) => {
																	if(this_projectid == info.projectid){
																		isChecked =true;
																	
																	}
																})
															}
															
															return(
																<tr className="tr-border" key={info.projectid} >
																	<td style={{verticalAlign: "middle"}}>
																			<Checkbox checked = {isChecked}
																				onChange = {(e)=> this.E_projectCanAddToAct_this(info.projectid,e)}
																			>{info.projectname} </Checkbox>
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
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary" onClick={this.props.E_project_to_act}>Add</button>
							</div>
				</div>
			</div>
			</div>
		</div>    
    );
  }
}

export default ProjectCanAddToAct;


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