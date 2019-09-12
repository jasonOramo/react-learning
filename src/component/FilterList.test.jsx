import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";


import FilterList from './FilterList';

var container = null;

beforeEach(()=>{
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(()=>{
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});


describe('normal test',()=>{
	let items = [];
	for(let i = 0; i < 10; i++){
		items.push({
			key: i,
			name:'items'+i
		});
	}

	it('normal render',()=>{
		act(()=>{
			render(<FilterList items = {items} filter = {''} />,container);
		})
		const filterList = document.querySelector('ul');
		expect(filterList).not.toBeNull();
	});
	it('default props',()=>{
		act(()=>{
			render(<FilterList items = {items} />,container);
		});
		const filterInput = document.querySelector('input');
		expect(filterInput.value).toBe('');
	});
	it('change input',()=>{
		act(()=>{
			render(<FilterList items = {items} filter = {''} />,container);
		})

		const filterInput = document.querySelector('input');
		Simulate.change(filterInput,{'target':{'value':20}});
		const filterItems = document.querySelector('li');
		expect(filterItems).toBeNull();
	})
})