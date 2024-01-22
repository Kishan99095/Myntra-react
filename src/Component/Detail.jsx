import React from 'react'
import { Link, json, useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add } from '../Features/Slice'
import { data } from 'autoprefixer'





function Detail() {
const dispach= useDispatch()

    const location=useLocation()
    console.log(location);
    
    const [product,setProduct]= useState([])
    
    const getProduct = async ()=>{
        try{
          await fetch("https://api.escuelajs.co/api/v1/products")
          .then(res => res.json())
          
          .then (json => setProduct(json))
         
        }
        catch{
          err=>console.error(err)
        }
 
      }
      useEffect(()=>getProduct,[])
      
     
    
  return (
    <>
     <div className=' flex flex-wrap w-full gap-3 pl-3 pr-3 '>
        {product.filter((data)=>data.title.includes(location.state.title)).map((data)=>{
          const addtocrat=()=>{
            console.log(data) 
            dispach(add(data))
             
          }
        
        return <>
        
               <div className='flex mt-12'>
                <div className='flex  gap-10 w-2/3 flex-wrap'>
                  <img className='h-90 w-60 ' src={data.images[0]} alt="" /> 
                  <img className='h-90 w-60 ' src={data.images[1]} alt="" />
                  <img className='h-96  ' src={data.images[2]} alt="" /> 
                </div>
                <div className='w-96'>
                    <h1 className=' font-bold text-wrap text-xl '>{data.title}</h1>
                    <hr />
                    <h1  >{data.category.name}</h1>
                    <h1 className='font-bold text-wrap text-4xl'>Rs.{data.price}</h1>
                    <h1>{data.description}</h1>
                    
                    <div className='m-5'>
                      <Link to="/bag" >
                      <button className='bg-rose-500 p-4 m-4 rounded-md'onClick={addtocrat}>ADD TO BAG</button>
                      </Link>
                    
                    
                    </div>
                   
                </div>
                
                
                
            </div>
           
            </>
})}
    </div>

    

    
   
    </>
    
  )
}

export default Detail