import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productaction'
export default function Productdetails() {
  const product=useSelector((state)=>state.product)
  const {image,title,price,category,description}=product
  const {productId}=useParams()
  const dispatch=useDispatch()
  const fetchdetailsproduct = async()=>{
    const response=await axios.get("https://fakestoreapi.com/products/" + productId).catch((err)=>{
      console.log(err)
    })
    dispatch (selectedProduct(response.data))
  }
  useEffect(()=>{
    if(productId && productId !== "") fetchdetailsproduct()
    return ()=>{
      dispatch(removeSelectedProduct())
    }
  },[productId])
  return (
    <div className="container1">
    {Object.keys(product).length === 0 ? (
      <div className='load'>...Loading</div>
    ) : (
      <div className="contr">
        <div className="">
          {/* <div className="">AND</div> */}
          <div className="flexx">
            <div className="">
              <img className="img2" src={image} />
            </div>
            <div className="cont">
              <h1>{title}</h1>
              <h2>
                <a className="prix">${price}</a>
              </h2>
              <h3 className="cat">{category}</h3>
              <p>{description}</p>
              <div className="" tabIndex="0">
                <div className="">
                  <i className=""></i>
                </div>
                <div className="add"><Link to={"add to cart"}>Add to Cart</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}
