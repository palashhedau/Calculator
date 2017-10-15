var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false }) ;
var url = require('url');   


module.exports = function(app){
	
	
	app.use(bodyParser.json()); 
	app.use(urlencodedParser) ; 
	
	
	app.post('/calculate' , urlencodedParser ,  function(req,res){
		
		if(req.body.action === 'add'){
			var result = parseInt(req.body.num1) + parseInt(req.body.num2) ; 
			console.log('Result ' , result) ; 
			res.status(201).json({result : result}) ; 
		}else if (req.body.action === 'sub'){
			var result = parseInt(req.body.num1) - parseInt(req.body.num2) ; 
			console.log('Result ' , result) ; 
			res.status(201).json({result : result}) ; 
		}else if(req.body.action === 'mul'){
			var result = parseInt(req.body.num1) * parseInt(req.body.num2) ; 
			console.log('Result ' , result) ; 
			res.status(201).json({result : result}) ; 
		}else if (req.body.action === 'divide'){
			var result = parseInt(req.body.num1) / parseInt(req.body.num2) ; 
			console.log('Result ' , result) ; 
			res.status(201).json({result : result}) ; 
		}else{
			res.status(401).json({result : ""}) ; 
		}
		
		
	})
		
	
	
	app.post('/add' , function(req,res)
	{
		
		
		if(isNaN(parseInt(req.body.num1)) || isNaN(parseInt(req.body.num2))){
			console.log('Invalid Number ')
			res.status(400).json({error : 'Enter valid number'}) ;  
		}else{

			var result = parseInt(req.body.num1) + parseInt(req.body.num2) ; 
			console.log('Result ' , result) ; 
			res.status(201).json({result : result , error : ''}) ;  
		}
		
		
		
	});
	
	
	
	app.post('/sub' , function(req,res)
	{
		if(isNaN(parseInt(req.body.num1)) || isNaN(parseInt(req.body.num2))){
			console.log('Invalid Number ')
			res.status(400).json({error : 'Enter valid number'}) ;  
		}else{

			var result = parseInt(req.body.num1) - parseInt(req.body.num2) ; 
			console.log('Result ' , result) ; 
			res.status(201).json({result : result}) ;  
		}
		
		
	});
	
	

	app.post('/mul' , function(req,res)
	{
		if(isNaN(parseInt(req.body.num1)) || isNaN(parseInt(req.body.num2))){
			console.log('Invalid Number ')
			res.status(400).json({error : 'Enter valid number'}) ;  
		}else{

			var result = parseInt(req.body.num1) * parseInt(req.body.num2) ; 
			console.log('Result ' , result) ; 
			res.status(201).json({result : result}) ;  
		}
		
		
		
	});
	
	

	app.post('/divide' , function(req,res)
	{
		if(isNaN(parseInt(req.body.num1)) || isNaN(parseInt(req.body.num2))){
			console.log('Invalid Number ')
			res.status(400).json({error : 'Enter valid number'}) ;  
		}else if (parseInt(req.body.num2 ) === 0 ){
			res.status(400).json({result : '' , error : 'Second Number cannot be Zero'}) ;   
		}
		else{
			var result = parseInt(req.body.num1) / parseInt(req.body.num2) ; 
			console.log('Result ' , result) ; 
			res.status(201).json({result : result , error : ''}) ;   
		}
		
		
	});
	
};