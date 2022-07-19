import styled from "styled-components";

const Wrapper = styled.div`
	width: 90%;
	margin: auto;
	max-width: 950px;
`;
const Block = styled.div`
	display: flex;
`;
const WrapperSpinner = styled.div`
	width: 100%;
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;
const Img = styled.img``;
const Info = styled.div`
	padding-left: 20px;
`;
const Name = styled.h2`
	margin-bottom: 20px;
`;
const Price = styled.p`
	margin-bottom: 20px;
`;
const Subtitle = styled.h3`
	margin: 20px 0;
`;
const Text = styled.p`
	padding-right: 5px;
	margin-bottom: 20px;
`;
const Description = styled.p``;

export {
	Wrapper,
	Block,
	Img,
	Info,
	Name,
	Price,
	Text,
	Description,
	Subtitle,
	WrapperSpinner,
};
