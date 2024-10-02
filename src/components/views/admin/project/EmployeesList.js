import React from 'react';
import ReactDOM from 'react-dom';

const EmployeesList = (props) => {
    return (
      <tr >
			<td className="fullname">{props.info.fullname}</td>
			<td className="phone">{props.info.phone}</td>
			<td className="email">{props.info.email}</td>
			<td className="text-center delete-employee" style={{cursor: "pointer"}} onClick={()=>props.DeleteEmplyee()}>
				<label className="top5 btn btn-transparent grey-salsa btn-outline btn-circle btn-sm ">
					<i className="fa fa-trash-o fonsize10"  title="Delete"></i>
				</label>
			</td>
	  </tr>
    )

};

export default EmployeesList;