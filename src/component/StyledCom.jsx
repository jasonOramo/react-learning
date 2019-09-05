import React from 'react';
import styled from 'styled-components';


const StyledPara = styled.p`
	font-weight: bold;
	text-decoration: underline;

	& + & {
		color: orange;
	}

	& ~ & {
		color: blue;
	}
	.para-in-div &{
		color: green;
		text-decoration: initial;
	}
`;

const StyledCom = ({ className })=>{

	return (
		<div className={className} >
			<h2>normal text</h2>
			<StyledPara name='first'> This is the first paragraph.</StyledPara>
			<StyledPara> This is the second paragraph.</StyledPara>
			<StyledPara> This is the third paragraph.</StyledPara>
			<div className='para-in-div'>
				<StyledPara> This is a sub paragraph.</StyledPara>
			</div>
			<StyledPara name='fourth'> This is the fourth paragraph.</StyledPara>
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