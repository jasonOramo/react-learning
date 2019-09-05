import React, {useState} from 'react';


const InputIncreHooks = ({max = 100, min= -1})=>{
	const [count, setCount] = useState(0);
	const _getInvalidateCount = (addNum = 0, currCount = 0)=>{
		addNum = parseInt(addNum) || 0;
		let res = addNum + parseInt(currCount);
		if(res > max){
			res = max;
		}else if(res < min){
			res = min;
		}
		return res;
	}
	const handleClick = (addNum = 0, event)=>{
		setCount((curr)=>{
			return _getInvalidateCount(addNum, curr);
		});
	}
	const handleBlur = (event)=>{
		setCount((curr)=>{
			return _getInvalidateCount(0, curr);
		});
		event.preventDefault();
	}
	return (
		<>
		<button name='decre' onClick={handleClick.bind(this,-1)}>-</button>
		<input value = {count} onChange={(event)=>{setCount(event.target.value)}} onBlur={handleBlur} />
		<button name='add' onClick={handleClick.bind(this,1)} >+</button>
		</>
	);
}

export default InputIncreHooks;