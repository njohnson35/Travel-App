import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import StonyIsland from '../../assets/StonyIsland.jpg'
import borabora from '../../assets/borabora.jpg'
import chicago from '../../assets/chicago.jpg'

function ImgCarousel() {
  return (
        <div name='carousel' className="container">
    <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={StonyIsland} alt='/' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={borabora} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={chicago} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            </div>
  )
}

export default ImgCarousel