export const fetchBrandByHandle = async (
  handle: string
) => {
  const response = await fetch(
    `${process.env.STRAPI_API}/brands?filters[handle][$eq]=${handle}&populate[thumbnail][fields]=url`,
    { next: { revalidate: 0 } }
  );
  if (response.ok) {
    const jsonRes = await response.json();
    return jsonRes?.data[0];
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