export const fetchProductsByCategory = async (category_id: string) => {
  
  const response = await fetch(`${process.env.MEDUSA_BACKEND_API}/store/products?category_id[]=${category_id}`, {next: {revalidate: 0}});
  if(response.ok) {
    const jsonRes = await response.json();
    console.log("my json resssss",jsonRes)
    return jsonRes.products;  
  }
}
