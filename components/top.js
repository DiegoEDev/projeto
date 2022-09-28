import React from "react"
import Logo from '../assets/LOGO.png';
import { Anchor } from 'antd';

const { Link } = Anchor;

const Headers = () => {
	return (
		<div className="top">
			<img src={Logo.src} alt="mini zoo" />
			<ul>
				<li><a href="#animais">Animais</a></li>
				<li><a href="#sobre">Sobre-nós</a></li>
				<li><a href="#contactos">Contactos</a></li>
			</ul>
		</div>
	)
}

export default Headers