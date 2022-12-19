import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Image1 from "../../../Images/Image1.jpg";
import Image2 from "../../../Images/Image2.jpg";
import Image3 from "../../../Images/Image3.jpg";
function Slideshow() {
    return (
        <Carousel fade interval={2000}>
                <Carousel.Item>
                    <Image rounded fluid src={Image1} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image rounded fluid src={Image2} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image rounded fluid src={Image3} />
                </Carousel.Item>
            </Carousel>
    );
}

export default Slideshow;