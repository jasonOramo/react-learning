import React, { Component, useState } from 'react';

import styled from 'styled-components';


/**
 * [description]
 * @param  {[type]} WrappedComponent [Rect Component need to be wrapped]
 * @return {[type]}                  [description]
 */
const MouseTrackerHoc = (WrappedComponent)=>{
	class MouseTracker extends Component{
		constructor(props){
			super(props);
			this.state = {
				position: {
					x: 0,
					y: 0
				}
			};
			this.handleMouseMove = this.handleMouseMove.bind(this);
		}
		handleMouseMove(event){
			const x = event.clientX;
			const y = event.clientY;
			this.setState({position: {
				x: x,
				y: y
			}});
			event.preventDefault();
		}
		render(){
			return (
				<div onMouseMove = {this.handleMouseMove}>
					<p> Mouse position is ({this.state.position.x},{this.state.position.y})</p>
					<WrappedComponent mouse={this.state.position} />
				</div>
				)
		}
	}
	return MouseTracker;
};

const Mouse = (props)=>{

	const MouseDom = styled.div.attrs((mouse)=>({
		name: 'mouseDiv',
		// style: (props)=>({left: props.mouse.x + 'px', top: props.mouse.y + 'px'})
	}))`
		position: absolute;
		background-color: black;
		border: 5px solid;
	`;

	return (
			<MouseDom/>
		);
}

/**
 * Mouse Tracker using render props and hooks
 * @param  {[object]} props [description]
 * @return {[element]}       [description]
 */
const MouseTrackerRP = (props)=>{
	const [position, setPosition] = useState({x:0,y:0});
	const handleMouseMove = (event)=>{
		setPosition({x:event.clientX, y: event.clientY});
	}
	const {renderP} = props;
	const StylSedDiv = styled.div`
		border: 2px solid blue;
	`;
	return (
		<StylSedDiv onMouseMove = {handleMouseMove} >
			<p> Mouse position is ({position.x},{position.y})</p>
			{renderP(position)}
		</StylSedDiv>
		)
}

const MouseRP = ()=>{
	return (
		<MouseTrackerRP renderP = {pos=>(
			<Mouse mouse={pos} />
			)
		}/>
		);
}



// const StyledMouse2 = styled.div.attrs(({
// 	style:(props)=>({left:10+'px', top: props.posY + 'px'})
// }))`
// 	position: absolute;
// 	background-color: black;
// 	border: 5px solid;
// `;



const MouseWithMouse = MouseTrackerHoc(Mouse);
export {MouseWithMouse, MouseRP};