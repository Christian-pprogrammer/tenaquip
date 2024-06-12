"use client"

import { fetchRelatedProducts } from '@/services/product-service'
import React, { useEffect, useState } from 'react'
import ProductComponent from '../product-component/ProductComponent'
import ProductSwiper from '../product-swiper/ProductSwiper'

type Props = {
  //use sub sub categories and brands to fetch related products

  sub_sub_ids: Array<string>,
  brand_ids: Array<string>
}

const RelatedProducts = ({sub_sub_ids, brand_ids}: Props) => {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    //fetch related products

    const fetchProductsRelated = async () => {
      try{
        const products = await fetchRelatedProducts(brand_ids, sub_sub_ids);
        console.log("my prods.", products)
        setProducts(products)
      }catch(err) {

      }
    }

    fetchProductsRelated();
  }, [])

  return (
    <div>
      <ProductSwiper 
        products={products}
      />
    </div>
  )
}

export default RelatedProducts