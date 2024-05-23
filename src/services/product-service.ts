import { mergeProductData } from "@/util/mergeProductData";

export const fetchProductsByCategory = async (category_id: string) => {

  const response = await fetch(`${process.env.MEDUSA_BACKEND_API}/store/products?category_id[]=${category_id}`, {next: {revalidate: 0}});
  console.log("my res", response)
  if(response.ok) {
    const strapiResponse = await fetch(`${process.env.STRAPI_API}/products?filters[sub_sub_category][category_id][$eq]=${category_id}&populate=*`, {next: {revalidate: 0}});    
    if(strapiResponse.ok) {
      const jsonRes = await response.json();
      console.log("jsonRes...", jsonRes)
      const jsonStrapiRes = await strapiResponse.json();
      console.log("jsonResstrapi...", jsonStrapiRes)
      return mergeProductData(jsonRes.products, jsonStrapiRes.data);  
    }
  }
}
