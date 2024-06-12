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

export const fetchCartProductsFromStrapi = async (items: Array<any>) => {
  let api_url = `${process.env.STRAPI_API}/products?populate[0]=description&populate[1]=brand&populate[2]=sub_sub_category`;
  let productData:any[] = [];
  items.map((item, index)=>{
    api_url += `&filters[product_id][$in][${index}]=${item?.variant?.product_id}`;
    productData.push({
      ...item.variant?.product,
      total: item.total,
      unit_price: item.unit_price,
      item_id: item.id
    });
  })
  
  console.log("api urll....",api_url)

  const response = await fetch(api_url, {next: {revalidate: 0}});
  if(response.ok) {
    const jsonRes = await response.json();
    return mergeProductData(productData, jsonRes.data)
  }
}

export const fetchRelatedProducts = async (
  brand_ids: Array<string>,
  category_ids: Array<string>,
  page?: number,
  pageSize?: number
) => {
  let api_url =
    page && pageSize
      ? `${
          process.env.MEDUSA_BACKEND_API
        }/store/products?limit=${pageSize}&offset=${
          page && pageSize && pageSize * (page - 1)
        }`
      : `${process.env.MEDUSA_BACKEND_API}/store/products?`;

  let strapi_url =
    page && pageSize
      ? `${process.env.STRAPI_API}/products?populate[0]=description&populate[1]=brand&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      : `${process.env.STRAPI_API}/products?populate[0]=description&populate[1]=brand`;

  brand_ids.map((item, index)=>{
    api_url += `&category_id[${index}]=${item}`
    strapi_url += `&filters[$and][0][brand][brand_id][$in][${index}]=${item}`
  })
  category_ids.map((item, index) => {
    api_url += `&category_id[${index}]=${item}`
    strapi_url += `&filters[$and][1][sub_sub_category][category_id][$in][${index}]=${item}`;
  })

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