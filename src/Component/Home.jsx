import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Home_Carousel from '../Component/Home_Carousel'



function Home() {
  return (
    <>
    <div>
        <div className='pt-10'>
          <Home_Carousel/>
            {/* <img className='w-full  pt-10' src="https://uspoloassn.in/cdn/shop/files/GENERIC_BANNER_1_1512x.jpg?v=1703608574" alt="" /> */}
        </div>
           
        <div>
          <h1 className='text-3xl font-bold pl-10 pt-12 pb-10 '>MEDAL WORTHY BRANDS TO BAG</h1>


          <div className='flex gap-3 w-full h-52 pl-3 pr-3'>
          <Link to="/product" state={{category:"Clothes"}}>
              <div className='flex-col  '>
                <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiTy5XdI52BdnNCROxP8cA_JdRv5_Y4F0uA&usqp=CAU" alt="" />
                <h1>Clothes</h1>
                <h1 className='fonte font-bold'>Starting At Rs.999</h1>


              </div>
            </Link>    
                
            <Link to="/product" state={{category:"Electronics"}}>
              <div className='flex-col '>
                <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDMpAlJvlbciO5em4u21B89yiMny281qjqw&usqp=CAU" alt="" />
                <h1>Electronics</h1>
                <h1 className='fonte font-bold'>Min.Rs 400</h1>
              </div>
            </Link> 
            <Link to="/product" state={{category:"Furniture"}}>
              <div className='flex-col '>
                <img className='' src="data:image/jpeg;base64,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" alt="" />
                <h1>Furnitures</h1>
                <h1 className=' font-bold'>Up To 50% off</h1>
              </div>
            </Link>

            <Link to="/product" state={{category:"Shoes"}}>
              <div className='flex-col '>
                <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfwpakzaVu0S5Ls_IVHwOQiZ8bLWMsZCxGA&usqp=CAU" alt="" />
                <h1>Shoes</h1>
                <h1 className='fonte font-bold'>Starting At Rs.499</h1>
              </div>
            </Link>

            <Link to="/product" state={{category:"Miscellaneous"}}>
              <div className='flex-col '>
                <img className='full w-48 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8_YxYrqNcVASaYXqQB8Nhn8eM3uPH0RmLw&usqp=CAU" alt="" />
                <h1>Clothes</h1>
                <h1 className='fonte font-bold'>30 to 40% off</h1>
              </div>
            </Link>

            
          </div>
             
             
             
        </div>
        <div>
         
        </div>
        <div>
        
        </div>
        
    </div>
    </>
  )
}

export default Home