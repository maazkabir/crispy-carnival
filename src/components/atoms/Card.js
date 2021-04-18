import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
	width: 31%;
	height: 158px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000000A;
    border-radius: 12px;
    opacity: 1;
	@media screen and (max-width: 768px) {		
		width: 100%;
		display: block;
		margin-bottom: 20px;
	}
`

const Card = props => {
	return (
		<Wrapper
			{...props}>
			{props.children}
		</Wrapper>
	)
}

export default Card