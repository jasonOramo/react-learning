import React, { Component } from 'react';

import styled from 'styled-components';



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


// const StyledMouse2 = styled.div.attrs(({
// 	style:(props)=>({left:10+'px', top: props.posY + 'px'})
// }))`
// 	position: absolute;
// 	background-color: black;
// 	border: 5px solid;
// `;



const MouseWithMouse = MouseTrackerHoc(Mouse);
export {MouseWithMouse};