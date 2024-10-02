'use strict';
import Axios from 'axios';
var qs = require('qs');

const apiUrl = 'http://104.237.133.52/apiTimeTrackingTest/';
const apiUrlOCS = 'http://104.237.133.52/apiOCS/';

// config header
var config = {
headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
};


export const Get_Activities_List = (paras) => {
	let api = apiUrl + '_searchactivitylist.php';
	return Axios.post(api,  qs.stringify(paras), config).then(
		response => response.data
	)

}

export const Activity_DetailID = (paras) => {
	let api = apiUrl + '_getactivityinfobyid.php';
	return Axios.post(api,  qs.stringify(paras), config).then(
		response => response.data
	)

}

export const GetProject_BelongAct = (paras) => {
	let api = apiUrl + '_getprojectcanjoinbyactivity.php';
	return Axios.post(api,  qs.stringify(paras), config).then(
		response => response.data
	)

}

export const GetProject_Act = (paras) => {
	let api = apiUrl + '_getprojectbyactivity.php';
	return Axios.post(api,  qs.stringify(paras), config).then(
		response => response.data
	)

}

						

						

