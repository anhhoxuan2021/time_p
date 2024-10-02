'use strict';
import Axios from 'axios';
var qs = require('qs');

const apiUrl = 'http://104.237.133.52/apiTimeTrackingTest/';
const apiUrlOCS = 'http://104.237.133.52/apiOCS/';

// config header
var config = {
headers: {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
};


export const Get_Clients_List = (paras) => {
	let api = apiUrl + '_searchclientlist.php';
	return Axios.post(api,  qs.stringify(paras), config).then(
		response => response.data
	)

}

export const Client_DetailID = (paras) => {
	let api = apiUrl + '_getclientinfobyid.php';
	return Axios.post(api,  qs.stringify(paras), config).then(
		response => response.data
	)

}



export const Get_Projects = (paras) => {
	let api = apiUrl + '_getprojectbyclient.php';
	return Axios.post(api,  qs.stringify(paras), config).then(
		response => response.data
	)

}

export const Submitform = (url, body) => {
    let api = apiUrl + url;
     
    let data = new FormData();
    for(let key in body){
        if( body[key] != null && Array.isArray(body[key]) ){  
            for(let i in body[key]){
                data.append(key + '[]', body[key][i]);                       
            }        
        } else {
            data.append(key, body[key]);    
        }  
    } 
    
    return Axios({
      method: 'POST',
      headers : {
        'Content-Type' : 'multipart/form-data'
      },          
      url: api,
      data: data,         

    }).then(response => response.data);  

};

						

						

