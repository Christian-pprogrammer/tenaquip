import CategoryElement from "@/components/category-element/CategoryElement";
import Disclaimer from "@/components/disclaimer/Disclaimer";
import ImageSwiper from "@/components/image-swiper/ImageSwiper";
import PostComponent from "@/components/post-component/PostComponent";
import { fetchBrands, fetchCategories } from "@/services/category-service";


export default async function Home() {

  let mainCategories = [];
  let brands = [];

  //fetch categories

  console.log("fetch...")
  try {
    const categories = await fetchCategories(1,12);
    console.log("My catss.", categories)
    mainCategories = categories;

  }catch (err) {

  }

  //fetch brands
  try {
    const res = await fetchBrands(1, 9);
    console.log("My brands", res)
    brands = res;
  }catch(err) {

  }

  const posts = [
    {
      title: "Check out our industrial",
      subtitle: "vending machine line up.",
      imageUrl:
        "https://www.tenaquip.com/tenaquip/images/banner/2022/home-ad-mailing.png?1664293500",
      titleBg: "bg-mainRed",
    },
    {
      title: "Check out our industrial",
      subtitle: "vending machine line up.",
      imageUrl:
        "https://www.tenaquip.com/tenaquip/images/banner/2022/home-ad-mailing.png?1664293500",
      titleBg: "bg-mainColor",
    },
    {
      title: "Check out our industrial",
      subtitle: "vending machine line up.",
      imageUrl:
        "https://www.tenaquip.com/tenaquip/images/banner/2022/home-ad-foundation.png?1661197307",
      titleBg: "bg-mainGray",
    },
  ];

  return (
    <div>
      <Disclaimer text="Shop Over 180,000 Industrial Products, Equipment & Supplies" />
      <div
        className="gap-6 py-6 padding-horizontal grid grid-cols-3 md:grid-cols-6"
      >
        {mainCategories.map((item: any, key: number) => {
          return (
            <CategoryElement
              imageSrc={`${process.env.STRAPI_UPLOADS}${item?.attributes?.thumbnail?.data?.attributes?.url}`}
              categoryName={item?.attributes?.name}
              key={key}
              handle={item?.attributes?.handle}
            />
          );
        })}
      </div>
      <Disclaimer text="Shop Preferred Brands" />
      <div className="padding-horizontal my-10">
        <ImageSwiper 
          brands={brands}
        />
      </div>
      <div
        className="grid padding-horizontal gap-10 bg-lightMain py-12"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {posts.map((post, index) => (
          <PostComponent
            key={index}
            title={post.title}
            subTitle={post.subtitle}
            imageUrl={post.imageUrl}
            titleBg={post.titleBg}
          />
        ))}
      </div>
    </div>
  );
}
