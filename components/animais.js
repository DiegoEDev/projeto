import React from "react";
import Animais from "../json/animais";
import Style from "../styles/animais";
import { Carousel } from 'antd'
// animais in the carousel with position different and counting the data
const AnimaisCarousel = () => {

	return (
		<Style id="animais">
 			<Carousel autoplay>
					{
						Animais.map((animal, index) => {
							return (
								<div className="slider-item" key={index}>
									<div className="item">
										<div className="img">
											<img src={animal.Imagem} alt={animal.Imagem} />
										</div>
										<div className="slider-item-content">
											<h2>{animal.Curiosidades}</h2>
											<p>{animal.Geografia}</p>
										</div>
									</div>
								</div>
							)
						})
					}
			</Carousel>
		</Style>
	);
}

export default AnimaisCarousel;
