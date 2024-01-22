import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const items = [
    <img className='w-[1500px] h-[400px]' src="https://uspoloassn.in/cdn/shop/files/EOSS_Denim_Banner_Desktop_1512x.jpg?v=1704803935" alt="" />,
    <img className='w-[1500px] h-[400px]' src="https://uspoloassn.in/cdn/shop/files/EOSS_Denim_Banner_Desktop_1512x.jpg?v=1704803935" alt="" />,
    <img className='w-[1500px] h-[400px]' src="https://uspoloassn.in/cdn/shop/files/EOSS_Denim_Banner_Desktop_1512x.jpg?v=1704803935" alt="" />
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