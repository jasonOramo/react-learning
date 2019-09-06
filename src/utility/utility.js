/**
 * [get invalidate num according to the max/min rule]
 * @param  {Number} addNum  [description]
 * @param  {Number} current [current num]
 * @param  {Object} rules   [rules]
 * @return {[type]}         [description]
 */
const getValidateNum = (addNum = 0, current = 0,rules={max:100,min:0})=>{
	addNum = parseInt(addNum) || 0;
	current = parseInt(current) || 0;
	let res = addNum + current;
	const {max, min} = rules;
	if(res > max){
		res = max;
	}else if(res < min){
		res = min;
	}
	return res;
};

export default getValidateNum;