import styled from "styled-components";

const Banners = styled.div`
    /* width: 100vw; */
    height: 80vh;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    overflow: hidden;
	position: relative;

    .img {
        width: 100vw;
        height: 60vh;
        display: flex;
        justify-content: center;
    }

	.top {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		z-index: 10;
		height: 10vh;
		color: #fff;
		/* backgound with linear color  */
		background: linear-gradient(180deg,rgb(0 0 0 / 71%) 0%,rgb(0 0 0 / 0%) 100%);

		img {
			width: 8rem;
		}

		ul {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 50%;
			list-style: none;
			font-size: 1rem;

			li {
				margin-left: 50px;
				a {
					color: #fff;
					text-decoration: none;
				}
			}
		}
	}
`;

export default Banners;