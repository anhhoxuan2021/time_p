	import { combineReducers } from 'redux';
	//import {booksReducer, bookReducer} from './bookReducers'
	//import {sessionReducer} from './sessionReducer'
	import {loginReducer} from './loginReducers';
	import {clientsReducers,clientsInfoReducers, clientProjectReducers} from './clientsReducers'
	import {projectReducers,projectReducer,projectSave} from './projectReducers'
	import {companyReducers} from './companyReducers'
	import {activitiesListReducers, activityInfoReducers, 
		activityProjectListReducers, activityProjectListCanJoinReducers} from './activitiesReducers'
	import {employeesReducers, emplInfoReducers,
		emplProjectReducers} from './employeeReducers'


	
	export default combineReducers({
		//sessionLogin:sessionReducer,
		loginReducer:loginReducer,
		projectReducers:projectReducers,
		projectReducer:projectReducer,
		companyReducers:companyReducers,
		projectSave:projectSave,
		activitiesListReducers:activitiesListReducers,
		activityInfoReducers:activityInfoReducers,
		activityProjectListReducers : activityProjectListReducers,
		activityProjectListCanJoinReducers : activityProjectListCanJoinReducers,
		clientsReducers:clientsReducers,
		clientsInfoReducers:clientsInfoReducers,
		clientProjectReducers : clientProjectReducers,
		employeesReducers:employeesReducers,
		emplInfoReducers : emplInfoReducers,
		emplProjectReducers:emplProjectReducers
	});
