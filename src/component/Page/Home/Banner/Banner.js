import React from "react"
import banner1 from "../../../../assets/banner_1.png"
import banner2 from "../../../../assets/banner_2.png"
import Carousel from "react-bootstrap/Carousel"

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img src={banner1} alt="" className="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={banner2} alt="" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
