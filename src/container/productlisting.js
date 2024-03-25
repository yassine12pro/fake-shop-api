import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Productcomponent from "./productcomponent"
import axios from 'axios'
import { setProducts } from '../redux/actions/productaction'
export default function Productlisting() {
  const products = useSelector((state)=>state)
  const dispatch = useDispatch()
  const fetchproducts =async()=>{
    const response =await axios.get("https://fakestoreapi.com/products")
    .catch((err)=>{
      console.log(err)
    })
    dispatch(setProducts(response.data))
  }
  useEffect(()=>{
    fetchproducts()
  },[])
  return (
    <div className='containerr'>
        <Productcomponent/>
    </div>
  )
}
