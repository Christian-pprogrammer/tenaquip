'use client'

import { setProductCategories } from '@/Store/slices/product'
import { useAppDispatch } from '@/hooks'
import React, { useEffect } from 'react'

interface IStorageOnLoadProps {
  productCategories: Array<any>
}

const StorageOnLoad = (props: IStorageOnLoadProps) => {

  const dispatch = useAppDispatch();

  const { productCategories } = props;

  useEffect(()=>{
    dispatch(setProductCategories(productCategories))
  }, [productCategories])

  return null;
}

export default StorageOnLoad