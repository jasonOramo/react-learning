import React from 'react';
import styled from 'styled-components';


const StyledPara = styled.p`
	
	font-weight: bold;
	text-decoration: underline;
`;

const StyledCom = ({ className })=>{

	return (
		<div className={className}>
			<button>normal text</button>
			<StyledPara>
				This is a pure ui component which is used to show the basic functions of styled-components.
			</StyledPara>
		</div>
		)
};

const WithStyled = styled(StyledCom)`
	border: 2px solid;
	font-weight: normal;
	font-size: 14px;
	margin: 0 1.5em 0 0;
	`;
export default WithStyled;