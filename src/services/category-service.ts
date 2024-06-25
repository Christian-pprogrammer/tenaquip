export const fetchCategories = async (page?: number, pageSize?: number) => {
  let response = null;

  console.log("fetch...");
  if (page && pageSize) {
    console.log(`${process.env.STRAPI_API}/categories`);
    response = await fetch(
      `${process.env.STRAPI_API}/categories?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`,
      { next: { revalidate: 0 } }
    );
  } else {
    response = await fetch(`${process.env.STRAPI_API}/categories?populate=*`, {
      next: { revalidate: 0 },
    });
  }
  if (response.ok) {
    const jsonRes = await response.json();
    console.log("json....", jsonRes);
    return jsonRes?.data;
  }
};

export const fetchCategoriesByIdsList = async (idsList: Array<string>) => {

  let api_url = `${process.env.STRAPI_API}/categories?populate[0]=thumbnail`;

  idsList.map((id, index: number)=>{
    api_url =
      api_url + `&filters[category_id][$in][${index}]=${id}`;
  })

  console.log(api_url)

  let response = await fetch(
    api_url,
    { next: { revalidate: 0 } }
  );

  if (response.ok) {
    const jsonRes = await response.json();
    return jsonRes?.data;
  }
};

export const fetchByHandle = async (handle: string) => {
  const response = await fetch(
    `${process.env.STRAPI_API}/categories?filters[handle][$eq]=${handle}&populate=*`,
    { next: { revalidate: 0 } }
  );
  if (response.ok) {
    const jsonRes = await response.json();
    return jsonRes?.data[0];
  }
};

export const fetchSubCategoryByHandle = async (handle: string) => {
  console.log("Helloworld");
  const response = await fetch(
    `${process.env.STRAPI_API}/sub-categories?filters[handle][$eq]=${handle}&populate=*`,
    { next: { revalidate: 0 } }
  );
  console.log(response);
  if (response.ok) {
    const jsonRes = await response.json();
    console.log("our json res", jsonRes);
    return jsonRes?.data[0];
  }
};

export const fetchSubCategories = async (
  categoryHandle: string,
  page?: number,
  pageSize?: number,
  start?: number
) => {
  const apiUrl = start
    ? `${process.env.STRAPI_API}/sub-categories?filters[category][handle][$eq]=${categoryHandle}&populate[products][fields][0]=id&populate[thumbnail][fields]=url&pagination[start]=${start}`
    : page && pageSize
    ? `${process.env.STRAPI_API}/sub-categories?filters[category][handle][$eq]=${categoryHandle}&populate[products][fields][0]=id&populate[thumbnail][fields]=url&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    : `${process.env.STRAPI_API}/sub-categories?filters[category][handle][$eq]=${categoryHandle}&populate[products][fields][0]=id&populate[thumbnail][fields]=url`;

  const response = await fetch(apiUrl, { next: { revalidate: 0 } });
  if (response.ok) {
    const jsonRes = await response.json();
    return jsonRes?.data;
  }
};

export const fetchSubSubCategories = async (subCategoryHandle: string) => {
  const response = await fetch(
    `${process.env.STRAPI_API}/sub-sub-categories?filters[sub_category][handle][$eq]=${subCategoryHandle}&populate[products][fields][0]=id&populate[thumbnail][fields]=url`,
    { next: { revalidate: 0 } }
  );
  if (response.ok) {
    const jsonRes = await response.json();
    console.log("json res...", jsonRes.data.attributes)
    return jsonRes?.data;
  }
};

export const fetchSubSubCategoryByHandle = async (handle: string) => {
  const response = await fetch(
    `${process.env.STRAPI_API}/sub-sub-categories?filters[handle][$eq]=${handle}&populate=*`,
    { next: { revalidate: 0 } }
  );
  if (response.ok) {
    const jsonRes = await response.json();
    console.log("my json res", jsonRes?.data);
    return jsonRes?.data[0];
  }
};

export const fetchBrands = async (page?: number, pageSize?: number) => {
  let response = null;

  if (page && pageSize) {
    response = await fetch(
      `${process.env.STRAPI_API}/brands?populate[thumbnail][fields]=url&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      { next: { revalidate: 0 } }
    );
  } else {
    response = await fetch(
      `${process.env.STRAPI_API}/brands?populate[thumbnail][fields]=url`,
      {
        next: { revalidate: 0 },
      }
    );
  }
  if (response.ok) {
    const jsonRes = await response.json();
    return jsonRes?.data;
  }
};


export const fetchCategoriesByBrand = async (brandId: string) => {
  const response = await fetch(
    `${process.env.STRAPI_API}/sub-sub-categories?filters[products][brand][id][$eq]=${brandId}&populate[thumbnail][fields]=url`,
    { next: { revalidate: 0 } }
  );
  if (response.ok) {
    const jsonRes = await response.json();
    return jsonRes?.data;
  }
}