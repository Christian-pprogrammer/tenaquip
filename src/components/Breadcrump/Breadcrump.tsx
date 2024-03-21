import Link from 'next/link'
import React from 'react'

type LinkElement = {
  toUrl: string,
  title: string
}

type Props = {
  links: Array<LinkElement>
}

const Breadcrump = ({links}: Props) => {
  return (
    <div className='mt-3'>
      {
        links.map((link, index) => (
          <>
            <Link href={link.toUrl} className='text-Gray text-sm hover:underline' >{link.title}</Link>
            {
              index < links.length - 1 && (
                <span> &gt; </span>
              )
            }
          </>
        ))
      }
    </div>
  )
}

export default Breadcrump