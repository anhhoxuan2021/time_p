'use strict';
import Axios from 'axios';

	const apiUrl = 'http://104.237.133.52/apiTimeTrackingTest/';

export const getUserLogin = (url, body) => {
	    let api = apiUrl + url;
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
