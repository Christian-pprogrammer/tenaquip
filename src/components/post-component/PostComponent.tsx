import Image from 'next/image'
import React from 'react'

type Post = {
  title: string,
  subTitle: string,
  imageUrl: string,
  titleBg: string
}

const PostComponent = ({title, subTitle, imageUrl, titleBg}: Post) => {
  return (
    <div className='cursor-pointer'>
      <div className={`${titleBg} p-[10px]`}>
        <p className="text-white text-center text-lg">
          {title}

          <br />

          {subTitle}
        </p>
      </div>
      <div style={{
        width: "100%",
        height: "100%"
      }}>
        <Image src={imageUrl} alt='' width={463} height={233} />
      </div>
    </div>
  )
}

export default PostComponent