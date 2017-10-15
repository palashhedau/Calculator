const initialState = {
	result : 0,
	error : null
}



export default function  reducer (state=initialState , action )  {
	switch(action.type){
		case 'RESULT' : {
			return {...state , result : action.payload.result , 
							error : action.payload.error } ; 
		}
		case 'RESULT_FAIL' : {
			return {...state , error : action.payload} ; 
		}
		default :
			return state  ; 

	}

}


