import styled from "styled-components";

const Animais = styled.div`
	padding: 5em 2rem;

	.ant-carousel .slick-dots li {
		background-color: #010101;
	}
	
	.ant-carousel .slick-dots li.slick-active button {
		background-color: #050402
	}

	.item {
		position: relative;
		display: flex;	
		flex-wrap: wrap;
		width: 61%;
    	margin: 0 auto;

		.img {
			width: 25%;
			height: 100%;
			border-radius: 50%;
			overflow: hidden;
			box-shadow: 0 0 10px;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.slider-item-content {
			width: 75%;
			height: 78%;
			padding: 1rem;
		}

	}

`
export default Animais;