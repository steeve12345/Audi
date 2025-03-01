import React from 'react'
import car from "./01.jpg";
import car1 from "./02.jpg";
import car2 from "./03.jpg";

const Product = () => {
  return (

<div id='cards'>
      <div className='card'>
        <img className="image" src={car} alt=''/>
      <h1> Audi car</h1>
      <p>2025</p>
      <div id='colors'>
          <div className='color1'></div>
          <div className='color2'></div>
          <div className='color3'></div>
          <p>87 %</p>
          <h2>$ 60,000</h2>
      </div>
      </div>

      <div className='card'>
        <img className="image" src={car1} alt=''/>
      <h1>Audi car</h1>
      <p>2024</p>
      <div id='colors'>
          <div className='color1'></div>
          <div className='color2'></div>
          <div className='color3'></div> 
          <p>78 %</p>
          <h2>$ 150,000</h2>
      </div>
      </div>


      <div className='card'>
        <img className="image" src={car2} alt=''/>
      <h1>Audi car</h1>
      <p>2023</p>
      <div id='colors'>
          <div className='color1'></div>
          <div className='color2'></div>
          <div className='color3'></div>
          <p>36 %</p>
               <h2>$ 40,000</h2>
      </div>
      </div>

      </div>
       );
      };
      export default Product;
      
    