import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Service = () => {
    const [category, setCategory] = useState('')
    const products = useSelector(state => state.product.products)
    

    const categoriesMap = products.map((product)=> product.category)
    const categories = [...new Set(categoriesMap)]

  return (
    <div className='flex gap-10'>
         <div>
         <select
            className="bg-[#1A2849] px-4 py-2 rounded-md text-white *:text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
         </div>

        <div className='w-full grid grid-cols-3 gap-5'>
        {products.map((product)=> 
            <div key={product.id} className='my-2 border'>
                <h2>{product.title}</h2>
                <p>{product.brand}</p>
            </div>
        )}
        </div>
    </div>
  )
}

export default Service