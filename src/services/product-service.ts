import { mergeProductData } from "@/util/mergeProductData";

export const fetchProductsByCategory = async (
  category_id: string,
  page?: number,
  pageSize?: number
) => {
  let api_url =
    page && pageSize
      ? `${
          process.env.MEDUSA_BACKEND_API
        }/store/products?category_id[]=${category_id}&limit=${pageSize}&offset=${
          page && pageSize && pageSize * (page - 1)
        }`
      : `${process.env.MEDUSA_BACKEND_API}/store/products?category_id[]=${category_id}`;

  let strapi_url =
    page && pageSize
      ? `${process.env.STRAPI_API}/products?filters[category][category_id][$eq]=${category_id}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      : `${process.env.STRAPI_API}/products?filters[category][category_id][$eq]=${category_id}&populate=*`;

  const response = await fetch(api_url, { next: { revalidate: 0 } });
  if (response.ok) {
    const strapiResponse = await fetch(strapi_url, { next: { revalidate: 0 } });
    if (strapiResponse.ok) {
      const jsonRes = await response.json();
      const jsonStrapiRes = await strapiResponse.json();
      return mergeProductData(jsonRes.products, jsonStrapiRes.data);
    }
  }
};

//this will be fetched by sub subcategory
export const fetchProductsBySubSubCategory = async (category_id: string, page?: number, pageSize?: number) => {

  let api_url =
    page && pageSize
      ? `${
          process.env.MEDUSA_BACKEND_API
        }/store/products?category_id[]=${category_id}&limit=${pageSize}&offset=${
          pageSize * (page - 1)
        }`
      : `${process.env.MEDUSA_BACKEND_API}/store/products?category_id[]=${category_id}`;

  let strapi_url =
    page && pageSize
      ? `${process.env.STRAPI_API}/products?filters[sub_sub_category][category_id][$eq]=${category_id}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      : `${process.env.STRAPI_API}/products?filters[sub_sub_category][category_id][$eq]=${category_id}&populate=*`;

  const response = await fetch(api_url, {next: {revalidate: 0}});
  if(response.ok) {
    const strapiResponse = await fetch(strapi_url, {next: {revalidate: 0}});    
    if(strapiResponse.ok) {
      const jsonRes = await response.json();
      const jsonStrapiRes = await strapiResponse.json();
      return mergeProductData(jsonRes.products, jsonStrapiRes.data);  
    }
  }
}


export const fetchSubCategoryProducts = async (
  category_id: string,
  page?: number,
  pageSize?: number
) => {

  let api_url =
    page && pageSize
      ? `${
          process.env.MEDUSA_BACKEND_API
        }/store/products?category_id[]=${category_id}&limit=${pageSize}&offset=${
          page && pageSize && pageSize * (page - 1)
        }`
      : `${process.env.MEDUSA_BACKEND_API}/store/products?category_id[]=${category_id}`;


  let strapi_url =
    page && pageSize
      ? `${process.env.STRAPI_API}/products?filters[sub_category][category_id][$eq]=${category_id}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      : `${process.env.STRAPI_API}/products?filters[sub_category][category_id][$eq]=${category_id}&populate=*`;
  
  const response = await fetch(
    api_url,
    { next: { revalidate: 0 } }
  );
  if (response.ok) {
    const strapiResponse = await fetch(
      `${process.env.STRAPI_API}/products?filters[category][category_id][$eq]=${category_id}&populate=*`,
      { next: { revalidate: 0 } }
    );
    if (strapiResponse.ok) {
      const jsonRes = await response.json();
      const jsonStrapiRes = await strapiResponse.json();
      return mergeProductData(jsonRes.products, jsonStrapiRes.data);
    }
  }
};


export const fetchProductByHandle = async (
  handle: string,
) => {
  const response = await fetch(
    `${process.env.MEDUSA_BACKEND_API}/store/products?handle=${handle}`,
    { next: { revalidate: 0 } }
  );
  if (response.ok) {
    const jsonRes = await response.json();
    const strapiResponse = await fetch(`${process.env.STRAPI_API}/products?filters[product_id][$eq]=${jsonRes?.products[0]?.id}&populate=*`, { next: { revalidate: 0 } });
    if (strapiResponse.ok) {
      const jsonStrapiRes = await strapiResponse.json();
      return mergeProductData(jsonRes.products, jsonStrapiRes.data);
    }
  }
};


export const fetchProductsByBrand = async (
  brand_id: string,
  page?: number,
  pageSize?: number
) => {
  let api_url =
    page && pageSize
      ? `${
          process.env.MEDUSA_BACKEND_API
        }/store/products?category_id[]=${brand_id}&limit=${pageSize}&offset=${
          page && pageSize && pageSize * (page - 1)
        }`
      : `${process.env.MEDUSA_BACKEND_API}/store/products?category_id[]=${brand_id}`;

  let strapi_url =
    page && pageSize
      ? `${process.env.STRAPI_API}/products?filters[brand][brand_id][$eq]=${brand_id}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      : `${process.env.STRAPI_API}/products?filters[brand][brand_id][$eq]=${brand_id}&populate=*`;

  const response = await fetch(api_url, { next: { revalidate: 0 } });
  if (response.ok) {
    const strapiResponse = await fetch(strapi_url, { next: { revalidate: 0 } });
    if (strapiResponse.ok) {
      const jsonRes = await response.json();
      const jsonStrapiRes = await strapiResponse.json();
      return mergeProductData(jsonRes.products, jsonStrapiRes.data);
    }
  }
};


export const fetchProductsByBrandAndSubSubCategory = async (
  brand_id: string,
  category_id: string,
  page?: number,
  pageSize?: number
) => {
  let api_url =
    page && pageSize
      ? `${
          process.env.MEDUSA_BACKEND_API
        }/store/products?category_id[]=${brand_id}&limit=${pageSize}&offset=${
          page && pageSize && pageSize * (page - 1)
        }`
      : `${process.env.MEDUSA_BACKEND_API}/store/products?category_id[]=${brand_id}`;

  let strapi_url =
    page && pageSize
      ? `${process.env.STRAPI_API}/products?filters[$and][0][brand][brand_id][$eq]=${brand_id}&filters[$and][1][sub_sub_category][category_id][$eq]=${category_id}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      : `${process.env.STRAPI_API}/products?filters[$and][0][brand][brand_id][$eq]=${brand_id}&filters[$and][1][sub_sub_category][category_id][$eq]=${category_id}&populate=*`;

  const response = await fetch(api_url, { next: { revalidate: 0 } });
  if (response.ok) {
    const strapiResponse = await fetch(strapi_url, { next: { revalidate: 0 } });
    if (strapiResponse.ok) {
      const jsonRes = await response.json();
      const jsonStrapiRes = await strapiResponse.json();
      return mergeProductData(jsonRes.products, jsonStrapiRes.data);
    }
  }
};