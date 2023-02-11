import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import cd from "../assets/4.jpg"
import ab from "../assets/5.jpg"
function Services(){
    return(<div>
            <Carousel
            infiniteLoop autoPlay showStatus={false}
            showArrows={false}
            interval={2000}
            showThumbs={false}

            >
<div>
    <img src={ab} alt="im1" />
    <p className="legend">full stack</p>
</div>
<div>
    <img src={cd} alt="im2" />
    
    <p className="legend">IOS</p>
</div>
            </Carousel>
        </div>
    )
}
export default Services;