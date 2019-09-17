import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import InputIncre from './InputIncre';

import InputIncreHooks, {InputUnIncre} from './component/InputIncreHooks';
import { StyledCom, WithStyledOver } from './component/StyledCom';

import {MouseWithMouse,MouseRP} from './component/MouseTracker';

import FilterList, {FilterListHook} from './component/FilterList';

const Container = ()=>{
	var items = [];
	for(let i = 0; i < 4; i++){
		items.push({
			name:'item'+i,
			key:i
		});
	}
	return (
		<>
		<InputIncreHooks max = {100} min={0}/>
		<div name='refpart'>
		<InputUnIncre />
		</div>
		<StyledCom/>
		<WithStyledOver />
		<MouseWithMouse />
		<div className='render-props'>
			<MouseRP />
		</div>
		<FilterListHook items={items}/>
		</>
		);
};

ReactDOM.render(<Container/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
