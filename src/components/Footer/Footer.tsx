import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import LinkList, { LinkListProps } from '../LinkList/LinkList'
import Image from 'next/image'

const Footer = () => {

  const productLinks = {
    title: "Products",
    links: [
      {
        url: "",
        linkTitle: "Shop by Manufacturer"
      },
      {
        url: "",
        linkTitle: "Custom Signs & Identification Tool"
      },
      {
        url: "",
        linkTitle: "Kleton Custom"
      },
      {
        url: "",
        linkTitle: "SDS"
      },
      {
        url: "",
        linkTitle: "Deals"
      }
    ]
  }

  const servicesLinks = {
    title: "Services",
    links: [
      {
        url: "",
        linkTitle: "Buy Now, Split Up The Cost"
      },
      {
        url: "",
        linkTitle: "Courses, Seminars, & Surveys"
      },
      {
        url: "",
        linkTitle: "Free Delivery"
      },
      {
        url: "",
        linkTitle: "Government Relations"
      },
      {
        url: "",
        linkTitle: "Hunter Group"
      },
      {
        url: "",
        linkTitle: "Instruent Calibration"
      },
      {
        url: "",
        linkTitle: "Key Accounts & Corporate Accounts"
      },
      {
        url: "",
        linkTitle: "Maintanace Shutdown Program"
      },
      {
        url: "",
        linkTitle: "Vendor Managed Inventory"
      },
      {
        url: "",
        linkTitle: "Order Lookup"
      }
    ]
  }

  const companyLinks = {
    title: "Company",
    links: [
      {
        url: "",
        linkTitle: "About Us"
      },
      {
        url: "",
        linkTitle: "Careers"
      },
      {
        url: "",
        linkTitle: "Contact Us"
      },
      {
        url: "",
        linkTitle: "Global Sourcing Group"
      },
      {
        url: "",
        linkTitle: "Members Of"
      },
      {
        url: "",
        linkTitle: "NMSO"
      },
      {
        url: "",
        linkTitle: "Our Locations"
      },
      {
        url: "",
        linkTitle: "Recognitions"
      },
      {
        url: "",
        linkTitle: "Satisfaction Guarantee"
      },
      {
        url: "",
        linkTitle: "Sustainability"
      },
      {
        url: "",
        linkTitle: "The TENAQUIP Foundation"
      },
      {
        url: "",
        linkTitle: "The TENAQUIP Way"
      }
    ]
  }

  const resouceCentreLinks = {
    title: "Resource Centre",
    links: [
      {
        url: "",
        linkTitle: "Shop by Manufacturer"
      },
      {
        url: "",
        linkTitle: "Custom Signs & Identification Tool"
      },
      {
        url: "",
        linkTitle: "Kleton Custom"
      },
      {
        url: "",
        linkTitle: "SDS"
      },
      {
        url: "",
        linkTitle: "Deals"
      }
    ]
  }



  return (
    <div className='px-32 bg-mainColor'>
      <div className="footer-title grid grid-cols-1 md:grid-cols-4 items-center border-t-1 border-b-1 border-lightBlue py-8" style={{
      }}>
        <div className="col-span-2">
          <h3 className="text-sm font-bold text-white">Join our Email List</h3>
          <p className='text-[12px] text-white'>
            Receive Sales/Promotional Marketing Pieces, Monthly Eflyers, and more by signing up to receive our emails.
          </p>
        </div>
        <div className="col-span-1">
          <Link href="" className="bg-white rounded rounded-xs border-none outline-none px-[15px] py-2 text-sm">
            Join Now
          </Link>
        </div>

        <div className="col-span-1">
          <h2 className='text-sm font-bold text-white mb-1'>Follow Us</h2>        
          <ul className='list-none flex gap-3'>
            <li>
              <FaFacebook
                className='text-white'
                size={25}
              />
            </li>
            <li>
              <FaLinkedin 
                className='text-white'
                size={25}
              />
            </li>
            <li>
              <FaInstagram 
                className='text-white'
                size={25}
              />
            </li>
          </ul>
        </div>
      </div>

      <div className='grid md:grid-cols-4 py-8'>
        <LinkList 
          linkList={productLinks}
        />
        <LinkList 
          linkList={servicesLinks}
        />
        <LinkList 
          linkList={companyLinks}
        />
        <LinkList 
          linkList={resouceCentreLinks}
        />
      </div>

      <div className='grid md:grid-cols-3 justify-end items-center border-t-[1px] border-lightBlue pt-2 pb-6'>
        <div>
          <p className='text-white bold text-[13px] px-3 border-r-[1px] border-white inline-block'>
            1 800 661-2400
          </p>
          <p className='text-white bold text-[13px] px-3 inline-block'>
            info@tenaquip.com
          </p>
          <p className='text-white bold text-[13px] px-3 py-2 block'>
            &copy; {`${new Date().getFullYear()}`}
          </p>
        </div>
        <div className='flex gap-1'>
          <button className='bg-white rounded rounded-xs border-none outline-none px-[5px] py-[2px] text-xs'>
            <img 
              src="https://www.tenaquip.com/images/icon/amex_en.png?1708981870"
              alt=''
              style={{maxWidth: "40px"}}
            />
          </button>
          <button className='bg-white rounded rounded-xs border-none outline-none px-[10px] text-xs'>
            <img 
              src="https://www.tenaquip.com/images/icon/mc_en.png?1708981870"
              alt=''
              style={{maxWidth: "50px"}}
            />
          </button>
          <button className='bg-white rounded rounded-xs border-none outline-none px-[10px] text-xs'>
            <img 
              src="https://www.tenaquip.com/images/icon/visa_en.png?1708981870"
              alt=''
              style={{maxWidth: "50px"}}
            />
          </button>          
          <button className='bg-white rounded rounded-xs border-none outline-none px-[10px] text-xs'>
            <img 
              src="https://www.tenaquip.com/images/icon/pp-logo-100px.png"
              alt=''
              style={{maxWidth: "50px"}}
            />
          </button>
          <button className='bg-white rounded rounded-xs border-none outline-none px-[10px] text-xs'>
            <img 
              src="https://www.tenaquip.com/images/icon/affirm_black_logo-transparent_bg.svg?1700507571"
              alt=''
              style={{maxWidth: "50px"}}
            />
          </button>
        </div>
        <div>
          <Link className='text-white text-[12px] ml-6' href="/">Help</Link>
          <Link className='text-white text-[12px] ml-6' href="/">Privacy Policy</Link>
          <Link className='text-white text-[12px] ml-6' href="/">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer