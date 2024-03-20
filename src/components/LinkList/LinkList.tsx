import Link from 'next/link'
import { title } from 'process'
import React from 'react'

export type LinkListProps = {
  linkList: {
    title: string,
    links: Array<{
      linkTitle: string,
      url: string
    }>
  }
}

const LinkList = ({linkList: {links, title}}: LinkListProps) => {
  return (
    <div>
      <h2 className='text-white font-bold text-sm'>{title}</h2>
      {
        links.map((link, index)=>(
          <Link href={link.url} key={index} className='text-white text-[13px] block my-2'>{link.linkTitle}</Link>
        ))
      }
    </div>
  )
}

export default LinkList