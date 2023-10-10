import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import bg_image from './café.jpg';
import ProductList from '../Product/ProductList';


export default function Home() {
 
  const bg = {
    backgroundImage: `url(${bg_image})`,
  };
 
  return (
    <div>


<div className="bg-image" style={bg}>
          <div className="bg-primary-dark-op">
            <div className="content content-full text-center pt-9 pb-8">
              <h1 className="text-white mb-2">
              Bienvenue chez Myo - Votre pause gourmande préférée
              </h1>
              <h2 className="h4 fw-normal text-white-75 mb-0">
              L'endroit idéal pour satisfaire vos envies gourmandes<br/>
              <button className='btn btn-primary mt-2'>Commander ici</button>
              </h2>
            </div>
          </div>
        </div>

        <ProductList />

      

    
      


    </div>

  )
}
