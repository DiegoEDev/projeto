import styled from "styled-components";

const Viveiros = styled.div`
	padding: 5em 2rem;
	background-color: #008000;

	.viveiro {
		color: #fff;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;

		h2 {
			text-align: center;
			width: 100%;
			color: #fff;
		}
		/* grid one left and one rigth */

		.box_left {
			display: flex;
			flex-wrap: wrap;

			.img {
				width: 36%;
				display: block;
				
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			.text {
				width: 64%;
				h4 {
					width: 100%;
					margin-left: 70px;
					color: #fff;
				}

				p {
					width: 100%;
					margin-left: 70px;
				}

			}
		}

		.box_right {
			display: flex;
			flex-wrap: wrap;

			.img {
				width: 36%;
				display: block;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.text {
				width: 64%;
				display: block;
				h4 {
					margin-right: 70px;
					color: #fff;
					text-align: right;
				}

				p {
					margin-right: 70px;
					text-align: right;
				}
			}
		}
	}
`

export default Viveiros;