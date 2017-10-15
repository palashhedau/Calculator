import React, { Component } from 'react';
import { connect } from 'react-redux' ; 
import {PropTypes} from 'prop-types'
import {calc} from '../actions/calcAction'

class Calculator extends Component{
	constructor(props){
		super(props);

		this.state = {
			num1 : 0 ,
			num2 : 0 
		}
	}


	onNum1Change(event){
		this.setState({
			num1 : event.target.value
		})
	}

	onNum2Change(event){
		this.setState({
			num2 : event.target.value
		})
	}

	

	render(){
		const styleText = {
			textAlign : 'center'
		}
		const color = {
			color :'red',
			textAlign : 'center'
		}
		return(
				
				
				<div className="container padd">
					
					
					

					<div className="col-sm-2 col-xs-2 col-lg-2 col-md-2">
					
					
					</div >
					
					
						<div  className="well  col-sm-8 col-xs-8 col-lg-8 col-md-8">
						
							<div className="col-sm-12 col-xs-12 col-lg-12 col-md-12" style={styleText}>
								<h3>Calculator</h3>
							</div>

							<div className="col-sm-12 col-xs-12 col-lg-12 col-md-12">
								<div className = "col-sm-2 col-xs-2 col-lg-2 col-md-2">
								</div>
								<div className="col-sm-8 col-xs-8 col-lg-8 col-md-8 form-group ">
									<label htmlFor="num1">First Number</label>
									<input onChange={this.onNum1Change.bind(this)} className="form-control" type="number" id='num1' />
								</div>
								<div className="col-sm-2 col-xs-2 col-lg-2 col-md-2">
								</div>
							</div>
							<div className="col-sm-12 col-xs-12 col-lg-12 col-md-12">
								<div className = "col-sm-2 col-xs-2 col-lg-2 col-md-2">
								</div>
								<div className="col-sm-8 col-xs-8 col-lg-8 col-md-8 form-group">
									<label htmlFor="num2">Second Number</label>
									<input onChange={this.onNum2Change.bind(this)} className="form-control" type="number" id='num2' />
								</div>
								<div className="col-sm-2 col-xs-2 col-lg-2 col-md-2">
								</div>
							</div>
							<div className="col-sm-12 col-xs-12 col-lg-12 col-md-12">
								<div className = "col-sm-2 col-xs-2 col-lg-2 col-md-2">
								</div>
								<div className="col-sm-8 col-xs-8 col-lg-8 col-md-8 form-group">
									<label htmlFor="num3">Result</label>
									<input value={this.props.result} className="form-control " type="number" id='num3' disabled />
								</div>
								<div className="col-sm-2 col-xs-2 col-lg-2 col-md-2">
								</div>
							</div>
							<div className="col-sm-12 col-xs-12 col-lg-12 col-md-12 padd">
								<div className = "col-sm-3 col-xs-3 col-lg-3 col-md-3">
									<button  className="btn btn-info btn-block" onClick={() => {
										this.props.calc(this.state.num1 , this.state.num2 , 'add' );
									}}>Add</button>
								</div>
								<div className = "col-sm-3 col-xs-3 col-lg-3 col-md-3">
									<button className="btn btn-info btn-block" onClick={() => {
										this.props.calc(this.state.num1 , this.state.num2 , 'sub' )
									}}>Subtract</button>
								</div>
								<div className = "col-sm-3 col-xs-3 col-lg-3 col-md-3">
									<button className="btn btn-info btn-block" onClick={() => {
										this.props.calc(this.state.num1 , this.state.num2 , 'mul' )
									}}>Multiply</button>
								</div>
								<div className = "col-sm-3 col-xs-3 col-lg-3 col-md-3">
									<button className="btn btn-info btn-block" onClick={() => {
										this.props.calc(this.state.num1 , this.state.num2 , 'divide' )
									}}>Divide</button>
								</div>
								
							</div>
							<div className="col-sm-12 col-xs-12 col-lg-12 col-md-12" style={color}>
								<div className = "col-sm-2 col-xs-2 col-lg-2 col-md-2">
								</div>
								<div className="col-sm-8 col-xs-8 col-lg-8 col-md-8 form-group">
									<b>{this.props.error}</b>
								</div>
								<div className="col-sm-2 col-xs-2 col-lg-2 col-md-2">
								</div>
							</div>
						
						
						</div>
					
					<div className="col-sm-2 col-xs-2 col-lg-2 col-md-2">
					</div>


				</div>


				

			)
	}
}



Calculator.propTypes = {
  result: PropTypes.number
   
}



function mapDispatchToProps(dispatch) {
    return {
        calc : (num1 , num2 , action) => dispatch(calc(num1 , num2 , action))
    };
}



function mapStateToProps(state){
	
	return {
		result : state.calcReducer.result ,
		error : state.calcReducer.error
	}
}


export default connect(mapStateToProps , mapDispatchToProps)(Calculator) ;

