import React, { useState, createRef } from "react";
import getValidateNum from "../utility/utility";
/**
 * [uncontrolled version of INputUnCre]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
export const InputUnIncre = props => {
	let inputRef = createRef();
	const handleChange = event => {
		const newVal = event.target.value;
		inputRef.current.value = event.target.value;
	};
	const handleClick = (addNum = 0, event) => {
		let curr = inputRef.current.value;
		const newNum = getValidateNum(addNum, curr);
		inputRef.current.value = newNum;
		event.preventDefault();
	};

	return (
		<>
			<button name="decre" onClick={handleClick.bind(this, -1)}>
				-
			</button>
			<input defaultValue={0} ref={inputRef} onChange={handleChange} onBlur = {handleClick.bind(this,0)}/>
			<button name="add" onClick={handleClick.bind(this, 1)}>
				+
			</button>
		</>
	);
};
/**
 * [hooks version]
 * @param  {Number} options.max [description]
 * @param  {Number} options.min [description]
 * @return {[type]}             [description]
 */
const InputIncreHooks = ({ max = 100, min = -1 }) => {
	const [count, setCount] = useState(0);
	const _getInvalidateCount = (addNum = 0, currCount = 0) => {
		addNum = parseInt(addNum) || 0;
		let res = addNum + parseInt(currCount);
		if (res > max) {
			res = max;
		} else if (res < min) {
			res = min;
		}
		return res;
	};
	const handleClick = (addNum = 0, event) => {
		setCount(curr => {
			return _getInvalidateCount(addNum, curr);
		});
	};
	const handleBlur = event => {
		setCount(curr => {
			curr = parseInt(curr) || 0;
			return _getInvalidateCount(0, curr);
		});
		event.preventDefault();
	};
	return (
		<>
			<button name="decre" onClick={handleClick.bind(this, -1)}>
				-
			</button>
			<input
				value={count}
				onChange={event => {
					setCount(event.target.value);
				}}
				onBlur={handleBlur}
			/>
			<button name="add" onClick={handleClick.bind(this, 1)}>
				+
			</button>
		</>
	);
};

export default InputIncreHooks;
