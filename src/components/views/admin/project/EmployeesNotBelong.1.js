import React from 'react';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from '../../../../../node_modules/react-bootstrap/lib/ModalHeader';
//require("react-bootstrap/lib/ModalHeader");

class EmployeesNotBelong extends React.Component {
  constructor(props) {
    super(props);
   // this.state = { showModal: false };
	//this.open =this.open.bind(this)
   // this.close = this.close.bind(this)
  }



  render() {	
    return (
		<div>
			
			<div className="modal fade" id="myModal"  role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
					<h4 className="modal-title" id="myModalLabel">Modal title</h4>
				</div>
				<div className="modal-body">
					...
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" className="btn btn-primary">Save changes</button>
				</div>
				</div>
			</div>
			</div>
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