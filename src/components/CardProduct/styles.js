import styled from "styled-components";

const Wrapper = styled.div`
	width: 90%;
	margin: auto;
	background-color: white;
	max-width: 955px;
`;
const Block = styled.div`
	width: 98%;
	display: flex;
	margin: auto;
	padding: 10px;
	border-bottom: 1px solid #ebebeb;
`;
const Img = styled.img`
	width: 150px;
`;
const Info = styled.div`
	width: 60%;
	padding-left: 10px;
	padding-top: 20px;
`;
const Text = styled.p`
	padding-top: 10px;
	max-width: 355px;
`;

const State = styled.p`
	display: flex;
	justify-content: center;
	padding-top: 30px;
	width: 20%;
`;

export { Wrapper, Img, Info, Text, Block, State };
