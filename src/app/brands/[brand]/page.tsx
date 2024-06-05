import CategoryComponent from '@/components/category-component/category-component';
import { fetchBrandByHandle } from '@/services/brand-service';
import { fetchCategoriesByIdsList } from '@/services/category-service';
import { fetchProductsByBrand } from '@/services/product-service';
import { getRootCategoriesFromProducts } from '@/util/getRootCategoriesFromProducts';
import React from 'react'

const page = async (props: any) => {

  let products = [];
  let categories:Array<any> = [];
  let brand = null

  try {

    const handle = props.params?.brand;

    const brandData = await fetchBrandByHandle(handle);
    brand = brandData
    console.log("ll.fadslfksda...")
    console.log(brand.attributes.brand_id)
    if(brand?.attributes?.brand_id) {
      products = await fetchProductsByBrand(brand.attributes.brand_id);
      const categoryIds = getRootCategoriesFromProducts(products);
      let categoryRes = await fetchCategoriesByIdsList(categoryIds);
      console.log(categoryRes)
    }

    console.log("these are products...", products)

  }catch(err) {
    
  }

  return (
    <div className='padding-horizontal'>
      <CategoryComponent 
        title={brand?.attributes?.name}
        subCategories={categories}
        handle=''
        id=''
        brandProducts={products}
      />
    </div>
  )
}

export default page