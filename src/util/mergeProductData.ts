export function mergeProductData(backendProducts: Array<any>, strapiProducts: Array<any>) {
  // Create a map to store products by ID for faster lookup
  const backendProductMap = new Map();
  backendProducts.forEach(product => {
    backendProductMap.set(product.id, product);
  });

  // Iterate through Strapi products and merge with corresponding backend products
  const mergedProducts:any = strapiProducts.map(strapiProduct => {
      const backendProduct = backendProductMap.get(strapiProduct.attributes?.product_id);
      if (backendProduct) {
          return {
            p_id: strapiProduct.id, //product id from strapi
            ...backendProduct,
            ...strapiProduct.attributes
          };
      }
  });
  return mergedProducts;
}

export const getCategories = () => {
  
}