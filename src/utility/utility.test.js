import getValidateNum from './utility';


describe('normal value',()=>{
	it('empty arguments',()=>{
		const res = getValidateNum();
		expect(res).toBe(0);
	});
	it('string input for the curre',()=>{
		expect(getValidateNum('sf')).toBe(0);
	});
	it('check rules',()=>{
		expect(getValidateNum(10,100,{max:99,min:10})).toBe(99);
		expect(getValidateNum(0,2,{max:100, min:10})).toBe(10);
	});
	it('check neggative value',()=>{
		expect(getValidateNum(-10,20)).toBe(10);
	})
})