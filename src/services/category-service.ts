import axios from "axios"

export const fetchCategories = async () => {
  
  const response = await fetch(`${process.env.MEDUSA_BACKEND_API}/store/product-categories`, {next: {revalidate: 0}});
  if(response.ok) {
    const jsonRes = await response.json();
    return jsonRes.product_categories;  
  }
}

export const fetchByHandle = async (handle: string) => {
  const response = await fetch(`${process.env.MEDUSA_BACKEND_API}/store/product-categories?handle=${handle}`, {next: {revalidate: 0}});
  if(response.ok) {
    const jsonRes = await response.json();
    return jsonRes.product_categories;  
  }
}