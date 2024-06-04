'use client'
import React, { SetStateAction, useEffect, useState } from 'react'
import BrowseBy from '../browse-by/BrowseBy';
import SubCategoryElement from '../sub-category-element/SubCategoryElement';
import { fetchProductsByCategory, fetchSubCategoryProducts } from '@/services/product-service';
import ProductComponent from '../product-component/ProductComponent';
import CategorySwiper from '../image-swiper/CategorySwiper';
import CategoryFilter from '../category-filter/CategoryFilter';
import COLORS from '@/config/colors';
import Slider from '../slider/Slider';
import ProductFilter from '../product-filter/ProductFilter';
import { fetchSubCategories } from '@/services/category-service';
import { useParams } from 'next/navigation';

type Props = {
  title: string,
  subCategories: Array<any>,
  handle: any,
  isSubCategory?: Boolean,
  subHandle?: any,
  id: string
}

const CategoryComponent = ({title, subCategories, handle, isSubCategory, subHandle, id}: Props) => {
  // const [browseBy, setBrowseBy] = useState("Product Listings");
  const [browseBy, setBrowseBy] = useState('Categories');
  const [products, setProducts] = useState<SetStateAction<any>>([]);
  const [subCats, setSubCats] = useState(subCategories);
  const [viewAll, setViewAll] = useState(false);
  const params:any = useParams();

  const toggleBrowseBy = (by: string) => {
    if (browseBy != by) {
      setBrowseBy(by);
    }
  };

  const viewMore = async () => {
    try{
      const moreSubCategories = await fetchSubCategories(params.category, undefined, undefined, 5);
      setSubCats((prev)=>{
        console.log(prev)
        return [...prev, ...moreSubCategories]
      })
      setViewAll(true)
    }catch(err) {
      console.log(err);
    }
  }

  //fetch the products to display (page 1)

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      console.log("hello fetch ...");
      try {
        if (isSubCategory) {
          //fetch sub category products
          const products = await fetchSubCategoryProducts(id, 1, 20);
          if (products) {
            setProducts(products);
          }
        } else {
          const products = await fetchProductsByCategory(id, 1, 20);
          console.log("My products...", products);
          if (products) {
            setProducts(products);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategoryProducts();
  }, []);

  return (
    <div>
      <BrowseBy
        title={title}
        browseBy={browseBy}
        toggleBrowseBy={toggleBrowseBy}
      />

      {browseBy == "Categories" ? (
        <>
          <CategoryFilter subCategories={subCategories} />
          {isSubCategory ? (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-6 gap-7">
                {subCategories?.map((subcategory, index: number) => (
                  <SubCategoryElement
                    key={index}
                    name={subcategory?.attributes?.name}
                    handle={`/product-category/${handle}/${subHandle}/${subcategory?.attributes?.handle}/`}
                    image={`${process.env.STRAPI_UPLOADS}${subcategory?.attributes?.thumbnail?.data?.attributes?.url}`}
                    numberOfProducts={0}
                  />
                ))}
              </div>
              {!viewAll && (
                <button
                  className="custom-btn"
                  style={{
                    width: "30rem",
                    maxWidth: "100%",
                    color: "#fff",
                    backgroundColor: COLORS.MAIN_COLOR,
                    border: "none",
                    margin: "20px auto",
                    display: "block",
                  }}
                  onClick={() => viewMore()}
                >
                  View more
                </button>
              )}
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-6 gap-7">
                {subCats?.map((subcategory, index: number) => (
                  <SubCategoryElement
                    key={index}
                    name={subcategory?.attributes?.name}
                    handle={`/product-category/${handle}/${subcategory?.attributes?.handle}`}
                    image={`${process.env.STRAPI_UPLOADS}${subcategory?.attributes?.thumbnail?.data?.attributes?.url}`}
                    numberOfProducts={
                      subcategory?.attributes?.products?.data?.length
                    }
                  />
                ))}
              </div>
              {!viewAll && (
                <button
                  className="custom-btn"
                  style={{
                    width: "30rem",
                    maxWidth: "100%",
                    color: "#fff",
                    backgroundColor: COLORS.MAIN_COLOR,
                    border: "none",
                    margin: "20px auto",
                    display: "block",
                  }}
                  onClick={() => viewMore()}
                >
                  View more
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          <CategorySwiper categories={subCategories} type="category" />
          <ProductFilter subCategories={subCategories} />
          {products && (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-6">
              {products?.map(
                (product: any, index: number) =>
                  product && <ProductComponent key={index} product={product} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CategoryComponent