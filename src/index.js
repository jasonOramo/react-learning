import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import InputIncre from './InputIncre';

import InputIncreHooks from './component/InputIncreHooks';
import WithStyled from './component/StyledCom';

const Container = ()=>{
	return (
		<>
		<InputIncreHooks max = {100} min={0}/>
		<WithStyled/>
		</>
		);
};

ReactDOM.render(<Container/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
