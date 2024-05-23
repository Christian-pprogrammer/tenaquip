import React from 'react'

const Disclaimer = ({text}:{text: string}) => {
  return (
    <div className='row bg-lightMain py-5'>
      <h1 className="text-center text-lg md:text-xl xl:text-2xl font-bold">
        {text}
      </h1>
    </div>
  )
}

export default Disclaimer