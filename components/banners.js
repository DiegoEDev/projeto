import React, { Component } from 'react';
import Banner1 from '../assets/banner-1.jpg';
import Banner2 from '../assets/banner-2.jpg';
import Banner3 from '../assets/banner-3.jpg';
import Styles from '../styles/banners.js'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Top from './top.js';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class BannerCarousel extends Component {
    render() {
        return (
            <Styles>
                <AutoplaySlider
                    play={true}
                    interval={1000}
                >
                    <div data-src={Banner1.src} />
                    <div data-src={Banner2.src} />
                    <div data-src={Banner3.src} />
                </AutoplaySlider>
				<Top />
            </Styles>
        );
    }
};

