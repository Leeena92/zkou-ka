import React from 'react'
import Pizza1 from "../Img/Pizza1.jpg"
import Pizza2 from "../Img/Pizza2.jpg"
import Pizza3 from "../Img/Pizza3.jpg"
import Pizza4 from "../Img/Pizza4.jpg"
import Pizza5 from "../Img/Pizza5.jpg"
import Products from '../Products'
import { useState } from 'react'

/*const ImageList = [
    {
        id:1,
        img:Pizza1
    },
    {
        id:2,
        img:Pizza2
    },
    {
        id:3,
        img:Pizza3
    },
    {
        id:4,
        img:Pizza4
    },
    {
        id:5,
        img:Pizza5
    }

]*/
const bgImage = {
    
    backgroundPosition: "center",
    backgroundSize:"cover",
    backgroundRepeate:"no-repeate",
    width:"100%",
    height:"100%",
};

const Hero = () => {
    const [imageId, setImageId] = useState (Pizza1);
  
    return (
    <>
      <div style={bgImage} className='min-h-[550px] sm:min-h-[600px] bg-gray-500 text-white duration-200
      flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left oder-2 sm:order-1'>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Al Capone Restaurant</h1>
                    <p className='text-sm'>
                        Kousek pravé Italie v srdci Dobříše. Ochutnejte po hříchu dobrou pizzu, kterou s láskou
                        pečeme podle tradičních italských receptur.
                    </p>
                    <div>
                        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full
                        hover:scale-105 duration-200'>Objednej nyní</button>

                    </div>
                </div>
                <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
                    
                    <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden '>
                        <img src={imageId} alt='' className='w-[300px] sm:w-[450px] mx-auto spin'></img>
                    </div>
                    <div>
                      {
                        
                      }
                    </div>
                </div>

            </div>

        </div>

      </div>
      
    </>
  )
}

export default Hero
