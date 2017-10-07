import axios from 'axios' ; 

export function calc(a , b , action ){ 
	return  function(dispatch){
		axios.post('http://localhost:3002/'+action, {
	  	num1 : a , 
	  	num2 : b , 
	  	action : action 
	  })
	  .then(function (response) {
	  		console.log('Response for Add ' , parseInt(response.data.result)) ; 
	  		dispatch({type : 'RESULT' , payload : response.data.result})
	  })
	  .catch(function (error) {
	  		console.log('Error occured while adding the numbers') ; 
	  })
	}
}

