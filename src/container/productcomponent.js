import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Productcomponent() {
  const products = useSelector  ((state)=>state.AllProducts.products)
  const renderlist = products.map((product)=>{
    const {id,image,title,price,category}= product
    return(
      <div className='prod' key={id }>
            <Link to={`/product/${id}`}>
        <div className=''>
          <div className=''>
            <div className=''>
              <img className='img' src={image}/>
            </div>
            <div className='contenu'>
              <div className='title'>{title}</div>
              <div className='price'>${price}</div>
              <div className='category'>{category}</div>
            </div>
          </div>
        </div>
        </Link>
    </div>
    )
  })
  return (
    <>
    {renderlist}
    </>
  )
}
