"use client"

import { fetchRelatedProducts } from '@/services/product-service'
import React, { useEffect, useState } from 'react'
import ProductComponent from '../product-component/ProductComponent'
import ProductSwiper from '../product-swiper/ProductSwiper'

type Props = {
  //use sub sub categories and brands to fetch related products
  products: Array<Product>
}

const RelatedProducts = ({products}: Props) => {

  return (
    <div>
      <h2 className="mt-5">Related Products</h2>
      <ProductSwiper products={products} hideAddToCart={true} />
    </div>
  );
}

export default RelatedProducts