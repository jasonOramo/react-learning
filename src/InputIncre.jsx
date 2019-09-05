/*
* This component is a learning component which contains a minus button, an input element and a add button.
* 1. There are min and max restrictions for the inputed value, the validation is trigged when the button pressed or the input element is blured.
* 2. User could change the value by input element or buttons.
*
* implementation: use PureComponent instead of Component since there  is only a count state. There is no need to deep comparision.
*
*/
import React, { PureComponent } from 'react';


class InputIncre extends PureComponent{
	
	constructor(props){
		super(props);
		this.state = {
			count: 0
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		// this.handleAdd = this.handleAdd.bind(this);
		// this.handleDecr = this.handleDecr.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this._getValidateNum  = this._getValidateNum.bind(this);
	}
	handleInputChange(event){
		let val = event.target.value;
		return this.setState(()=>{
			return {count:val};
			//return {count:this._getValidateNum(val, 0)};
		});
		event.preventDefault();
	}
	// handleAdd(event){
	// 	this.setState((curr)=>{
	// 		return {count:this._getValidateNum(curr.count, 1)};
	// 	});
	// }
	// handleDecr(event){
	// 	this.setState((curr)=>{
	// 		return {count:this._getValidateNum(curr.count, -1)};
	// 	});
	// }

	/*
	* change the event binding way. Attention that the event parameter is the second param.
	*/
	handleBtnClick(addNum = 0,event){
		this.setState((curr)=>{
			return {count: this._getValidateNum(curr.count,addNum)};
		});
	}
	handleBlur(event){
		this.setState((curr)=>{
			return {count:this._getValidateNum(curr.count, 0)};
		});
		event.preventDefault();
	}
	_getValidateNum(num,addNum){
		num = parseInt(num) || 0;
		const {max, min} = this.props;
		let res = parseInt(num) + addNum;
		if(res > max){
			res = max;
		}else if(res < min){
			res = min;
		}
		return res;
	}
	render(){
		return (<>
			<button name='decre' onClick={this.handleBtnClick.bind(this,-1)}>-</button>
			<input name='counter' value={this.state.count} onChange={this.handleInputChange} onBlur={this.handleBlur}/>
			<button name='add' onClick = {this.handleBtnClick.bind(this,1)}>+</button>
			</>
			);
	}
}

InputIncre.defaultProps = {
	max : 100,
	min : 0
};



export default InputIncre;