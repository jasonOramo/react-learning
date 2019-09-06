import getValidateNum from './utility';


describe('normal value',()=>{
	it('empty arguments',()=>{
		const res = getValidateNum();
		expect(res).toBe(0);
	});
	it('string input for the curre',()=>{
		expect(getValidateNum('sf')).toBe(0);
	})
})