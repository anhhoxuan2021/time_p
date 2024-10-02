'use strict';
import Axios from 'axios';
var qs = require('qs');

const apiUrl = 'http://104.237.133.52/apiTimeTrackingTest/';
const apiUrlOCS = 'http://104.237.133.52/apiOCS/';

// config header
var config = {
headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
};

export const listProject = (body) => {
	    let api = apiUrl + "_searchprojectlist.php";
			//console.log("api="+api)
	    //const token_app = window.localStorage.getItem('AIRESPOT_ADMIN_TOKEN');
	    //const token = JSON.parse(token_app).token;

	    var params = new URLSearchParams();

	    for(let key in body)
	    {
	        if(body[key]){
	            params.set(key, body[key]);
	        }
	    }

	    return Axios({
				headers: {
			'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    	},
	      method: 'POST',
				dataType: "json",
	      url: api,
	      data: params

	    }).then(response => response.data);

	};

export const detailProjectApi = (body) => {
	    let api = apiUrl + "_searchprojectlist.php";
	    var params = new URLSearchParams();

	    for(let key in body)
	    {
	        if(body[key]){
	            params.set(key, body[key]);
	        }
	    }

	    return Axios({
				headers: {
			'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    	},
	      method: 'POST',
				dataType: "json",
	      url: api,
	      data: params

	    }).then(response => response.data);

	};

	export const listClients = (body) => {
		    let api = apiUrl + "_searchclientlist.php";
		    var params = new URLSearchParams();

		    for(let key in body)
		    {
		        if(body[key]){
		            params.set(key, body[key]);
		        }
		    }

		    return Axios({
					headers: {
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
	    	},
		      method: 'POST',
					dataType: "json",
		      url: api,
		      data: params

		    }).then(response => response.data);

		};

	export const statusList = (body) => {
		    let api = apiUrl + "_getstatuslist.php";
		    var params = new URLSearchParams();

		    for(let key in body)
		    {
		        if(body[key]){
		            params.set(key, body[key]);
		        }
		    }

		    return Axios({
					headers: {
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
	    	},
		      method: 'POST',
					dataType: "json",
		      url: api,
		      data: params

		    }).then(response => response.data);

		};

		export const activityRight = (body) => {
			//data: {token:123,userid:userid,projectid:projectid,businessid:businessid},
			    let api = apiUrl + "_getativitybyproject.php";
			    var params = new URLSearchParams();

			    for(let key in body)
			    {
			        if(body[key]){
			            params.set(key, body[key]);
			        }
			    }

			    return Axios({
						headers: {
					'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
		    	},
			      method: 'POST',
						dataType: "json",
			      url: api,
			      data: params

			    }).then(response => response.data);

			};

			export const activityLeft = (body) => {
				//data: {token:123,userid:userid,projecttypeid:projecttypeid,businessid:businessid},
						let api = apiUrl + "_getativitybyprojecttype.php";
						var params = new URLSearchParams();

						for(let key in body)
						{
								if(body[key]){
										params.set(key, body[key]);
								}
						}

						return Axios({
							headers: {
						'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
						},
							method: 'POST',
							dataType: "json",
							url: api,
							data: params

						}).then(response => response.data);

				};

				//_searchprojectypetlist
				export const projectypetlist = (body) => {
					//data: {token:123,userid:userid,projecttypeid:projecttypeid,businessid:businessid},
							let api = apiUrl + "_searchprojectypetlist.php";
							var params = new URLSearchParams();

							for(let key in body)
							{
									if(body[key]){
											params.set(key, body[key]);
									}
							}

							return Axios({
								headers: {
							'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
							},
								method: 'POST',
								dataType: "json",
								url: api,
								data: params

							}).then(response => response.data);

					};

					//COMPANYLISTS
					export const listCompany = (body) => {
						    let api = apiUrlOCS + "_getcompanylist.php";
						    //const token_app = window.localStorage.getItem('AIRESPOT_ADMIN_TOKEN');
						    //const token = JSON.parse(token_app).token;

						    var params = new URLSearchParams();

						    for(let key in body)
						    {
						        if(body[key]){
						            params.set(key, body[key]);
						        }
						    }

						    return Axios({
									headers: {
								'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
								//'Content-Type': 'application/json',
        				//'Accept': 'application/json'
					    	},
						      method: 'POST',
									dataType: "json",
						      url: api,
						      data: params

						    }).then(response => response.data);

						};
						

						export const getEmployNotBelong = (paras) => {
							let api = apiUrl + '_getemployeeycanjoinbyproject.php';
							return Axios.post(api,  qs.stringify(paras), config).then(
								response => response.data
							)

						}

						export const getEmployeeybyproject = (paras) => {
							let api = apiUrl + '_getemployeeybyproject.php';
							return Axios.post(api,  qs.stringify(paras), config).then(
								response => response.data
							)

						}

						export const SaveProjectAction_api = (paras) => {
							let api = apiUrl + '_editproject.php';
							return Axios.post(api,  qs.stringify(paras), config).then(
								response => response.data
							)

						}


						
						//
						

						

