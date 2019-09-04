import React, { PureComponent } from 'react';


class InputIncre extends PureComponent{
	
	constructor(props){
		super(props);
		this.state = {
			count: 0
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDecr = this.handleDecr.bind(this);
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
	handleAdd(event){
		this.setState((curr)=>{
			return {count:this._getValidateNum(curr.count, 1)};
		});
	}
	handleDecr(event){
		this.setState((curr)=>{
			return {count:this._getValidateNum(curr.count, -1)};
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
			<button name='decre' onClick={this.handleDecr}>-</button>
			<input name='counter' value={this.state.count} onChange={this.handleInputChange} onBlur={this.handleBlur}/>
			<button name='add' onClick = {this.handleAdd}>+</button>
			</>
			);
	}
}

InputIncre.defaultProps = {
	max : 100,
	min : 0
};

export default InputIncre;