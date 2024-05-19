import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {

  let [singleData, setSingleData] = useState([])

  let productId = useParams()

  let getData = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response=>{
      setSingleData(response.data);
    }))
  }

  useEffect(()=>{
    getData()
  },[])



  return (
    <Container>
        <div className="">
            <h3>Product Details</h3>
        </div>
    </Container>
  )
}

export default ProductDetails