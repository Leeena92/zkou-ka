import React from 'react'
import Logo from './Img/Logo-Pizza.png';
import {FaCartShopping} from "react-icons/fa6";
import Products from './Products';



function Navbar() {
    return (
        <>
            <div className='shadow-md bg-white bg-gray-900 text-white duration-200'>
                <div className='container py-3 sm:py-5'>
                    <div className="flex justify-between items-center">
                        <div>
                            <a href='#' className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                                <img src={Logo} alt='Al_Capone' className='w-20 hover:scale-105'></img>
                            </a>


                        </div>
                        <div className='flex items-center gap-4'>
                            
                                
                            
                            <ul className='hidden sm:flex gap-4'>
                                <li>
                                    <a href='#' className='inline-block py-4 px-4 hover:text-primary hover:scale-110 transition h-0.5'>Domů</a>
                                </li>
                                <li>
                                    <a href='#' className='inline-block py-4 px-4 hover:text-primary hover:scale-110 transition h-0.5'>O nás</a>
                                </li>
                                <li>
                                <a href="" className='inline-block py-4 px-4 hover:text-primary hover:scale-110 transition h-0.5'>Naše Pizzy</a>
                            </li>

                                <li>
                                    <a href='#' className='inline-block py-4 px-4 hover:text-primary hover:scale-110 transition h-0.5'>Kontakt</a>
                                </li>
                                
                            </ul>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full 
                            hover:scale-105'>Košík<FaCartShopping className="text-xl text-white drop-shadow-sm cursror-pointer"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
