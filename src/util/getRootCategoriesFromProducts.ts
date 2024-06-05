export const getRootCategoriesFromProducts = (products: Array<any>) => {
  let allCategories: Array<any> = [];
  products.forEach((product) => {
    if (product) {
      product.categories.forEach((category: any) => {
        // Check if the category has a null parent_category_id
        if (!category.parent_category_id) {
          // Push the category to the allCategories array
          allCategories.push(category.id);
        }
      });
    }
  });
  return allCategories;
};
