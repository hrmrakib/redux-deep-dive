import React from 'react'
import { useSelector } from 'react-redux'

const Service = () => {
    const products = useSelector(state => state.product.products)
    
  return (
    <div>
        {products.map((product)=> 
            <div key={product.id} className='my-2 border'>
                <h2>{product.title}</h2>
                <p>{product.brand}</p>
            </div>
        )}
    </div>
  )
}

export default Service