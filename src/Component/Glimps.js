import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './glimps.css';

const Glimps = () => {
    const [product, setProduct] = useState([]);

    console.log(product)

    useEffect(()=>{
        const FetchData = async () => {
            try{
                const response = await axios.get('https://fakestoreapi.com/products');
                const data = response.data;
                setProduct(data);
            }catch(error){
                console.log(error)
            }
        };

        FetchData()

    },[])


  return (
    <>
      <div className='slider' >
        <div className='slide-track'>
          {product.map((item) => (
            <div className='slide'  key={item.id}>
              <img className='slide-img'
            
                src={item.image}
                alt={item.title}
              />
              {/* <h3 className="text-xs w-90% h-10%">{item.title}</h3> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Glimps