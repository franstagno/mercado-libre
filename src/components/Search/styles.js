import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	max-width: 900px;
`;

const Block = styled.div`
	height: 100%;
	background-color: #ebebeb;
	height: 30px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0 2px 2px 0;
	cursor: pointer;
`;

const Input = styled.input`
	border: none;
	border-radius: 2px 0 0 2px;
	height: 30px;
	margin-left: 20px;
	width: 100%;
`;

export { Wrapper, Input, Block };
