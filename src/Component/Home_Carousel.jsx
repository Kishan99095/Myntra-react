import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const items = [
    <img className='w-[100%] h-[40vw]' src="https://sslimages.shoppersstop.com/sys-master/root/hd3/hf2/31774018469918/Elliza-Donatein_web_op.jpg" alt="" />,
    <img className='w-[100%] h-[40vw]' src="https://sslimages.shoppersstop.com/sys-master/root/h2c/hac/31810522808350/private-brands_Top-banner-web_R-Day-24.jpg" alt="" />,
    <img className='w-[100%] h-[40vw]' src="https://sslimages.shoppersstop.com/sys-master/root/h79/hec/31810523791390/footwear_Top-banner-web_Eoss-24.jpg" alt="" />,
    <img className='w-[100%] h-[40vw]' src="https://sslimages.shoppersstop.com/sys-master/root/h49/hf3/31810523594782/women-indian_Top-banner-web_Eoss-24.jpg" alt="" />,
    <img className='w-[100%] h-[40vw]' src="https://sslimages.shoppersstop.com/sys-master/root/heb/haf/31810522939422/watches_Top-banner-web_Eoss-24.jpg" alt="" />,
    <img className='w-[100%] h-[40vw]' src="https://sslimages.shoppersstop.com/sys-master/root/h19/hfa/31810523398174/menwear_Top-banner-web_Eoss-24.jpg" alt="" />
];

const Home_Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInterval={3000}
        disableButtonsControls
        
    />
);
export default Home_Carousel ;