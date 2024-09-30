import React, { useEffect } from 'react'
import { fetchProductFailed, fetchProductSuccess } from '../features/product/productSlice'
import { useDispatch } from 'react-redux'

const Product = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        fetch('/data.json')
        .then((res)=>res.json())
        .then((products)=> {
            console.log(products)
            dispatch(fetchProductSuccess(products))    
        })
        .catch((err)=> fetchProductFailed(err.message))
    },[])

  return (
    <div>Product</div>
  )
}

export default Product