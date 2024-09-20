import React, { useEffect, useState } from 'react'
import MainCarousel from '../../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../../Data/mens_kurta'
import { womens_saree } from '../../../../Data/womens_saree'
import { watches } from '../../../../Data/watches'
import { shoes } from '../../../../Data/shoes'
import axios from 'axios'


const HomePage = () => {
  const [product, setProduct] = useState();

  useEffect(()=>{

   const fetchData = async()=>{
    try {
      const response = await axios.get(`http://localhost:5454/api/products/`);
      setProduct(response);
    } catch (error) {
      console.log("Error Message",error);
    }
   }
   fetchData();
  },[])
  console.log(product,"home product");

  return (
    <>
    <div> 
        <MainCarousel/>
    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={womens_saree} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={watches} sectionName={"Watches"}/>
        <HomeSectionCarousel data={shoes} sectionName={"Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens_kurta"}/>
        </div>
    </div>
    </>
  )
}

export default HomePage