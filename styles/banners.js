import styled from "styled-components";

const Banners = styled.div`
    width: 100vw;
    height: 100vh;
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
        height: 100vh;
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
		/* backgound with linear color */
		/* background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 100%); */

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
					color: #000;
					text-decoration: none;
				}
			}
		}
	}
`;

export default Banners;