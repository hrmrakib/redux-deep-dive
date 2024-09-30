import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Service = () => {
    const [category, setCategory] = useState('')
    const products = useSelector(state => state.product.products)
    

    const categoriesMap = products.map((product)=> product.category)
    const categories = [...new Set(categoriesMap)]
    
    const brandMap = products.map((product)=> product.brand)
    const brand = [...new Set(brandMap)]

    const x = brand.map((b)=> b)
    console.log(x)

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


          <div>
            <h2>Brand</h2>
            {brand.map((b)=> {
                <span>{b}</span>
            // <label htmlFor=""> 
            // <span>{b}</span>
            //     <input type="checkbox" name="" id="" />
            // </label>
            })}
          </div>
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