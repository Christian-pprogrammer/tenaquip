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
    <div className="cursor-pointer">
      <div className={`${titleBg} p-[10px] w-[100%]`}>
        <p className="text-white text-center text-lg">
          {title}

          <br />

          {subTitle}
        </p>
      </div>
      <div>
        <img 
          src={imageUrl}
          alt=''
          style={{
            objectFit: 'cover',
            width: '100%',
            maxHeight: "263px",
            height: 'auto',
            verticalAlign: "middle"
          }}
        />
      </div>
    </div>
  );
}

export default PostComponent