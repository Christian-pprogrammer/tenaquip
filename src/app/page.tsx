import CategoryElement from "@/components/CategoryElement/CategoryElement";
import Disclaimer from "@/components/Disclaimer/Disclaimer";
import Footer from "@/components/Footer/Footer";
import ImageSwiper from "@/components/ImageSwiper/ImageSwiper";
import MenuNavbar from "@/components/MenuNavbar/MenuNavbar";
import { Navbar } from "@/components/Navbar/Navbar";
import PostComponent from "@/components/PostComponent/PostComponent";
import Image from "next/image";


export default function Home() {

  const data = [
    {
      imageSrc: "/category2.png",
      categoryName: "Safety"
    },
    {
      imageSrc: "/category3.png",
      categoryName: "Tools"
    },
    {
      imageSrc: "/category4.png",
      categoryName: "Material Handling & Storage"
    },
    {
      imageSrc: "/category5.png",
      categoryName: "Facility Maintainance"
    },
    {
      imageSrc: "/welding.png",
      categoryName: "Welding"
    },
    {
      imageSrc: "/category6.png",
      categoryName: "Electrical"
    },
    {
      imageSrc: "/category7.png",
      categoryName: "Office"
    },
    {
      imageSrc: "/category8.png",
      categoryName: "Fleet & Automotive"
    },
    {
      imageSrc: "/category9.png",
      categoryName: "Instruments"
    },
    {
      imageSrc: "/category10.png",
      categoryName: "Plumbing Equipment & Supplies"
    },

    {
      imageSrc: "/category12.png",
      categoryName: "Packaging & Shipping"
    },
    {
      imageSrc: "/category14.png",
      categoryName: "All Sale Items"
    },
  ]

  const posts = [
    {
      title: "Check out our industrial",
      subtitle: "vending machine line up.",
      imageUrl: "https://www.tenaquip.com/tenaquip/images/banner/2022/home-ad-mailing.png?1664293500",
      titleBg: "bg-mainRed"
    },
    {
      title: "Check out our industrial",
      subtitle: "vending machine line up.",
      imageUrl: "https://www.tenaquip.com/tenaquip/images/banner/2022/home-ad-mailing.png?1664293500",
      titleBg: "bg-mainColor"
    },
    {
      title: "Check out our industrial",
      subtitle: "vending machine line up.",
      imageUrl: "https://www.tenaquip.com/tenaquip/images/banner/2022/home-ad-foundation.png?1661197307",
      titleBg: "bg-mainGray"
    }
  ]

  return (
    <div>
      <Disclaimer text="Shop Over 180,000 Industrial Products, Equipment & Supplies" />
      <div className="gap-6 py-6 px-32" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr) )"
      }}>
        {
          data.map((item, key)=>(
            <CategoryElement imageSrc={item.imageSrc} categoryName={item.categoryName} key={key} />
          ))
        }
      </div>
      <Disclaimer text="Shop Preferred Brands" />
      <div className="px-32">
        <ImageSwiper />
      </div>
      <div className="grid px-32 gap-10 bg-lightMain mt-12 py-12" style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
      }}>
        {
          posts.map((post, index)=>(
            <PostComponent 
              key={index}
              title={post.title}
              subTitle={post.subtitle}
              imageUrl={post.imageUrl}
              titleBg={post.titleBg}
            />
          ))
        }
      </div>
    </div>
  );
}
