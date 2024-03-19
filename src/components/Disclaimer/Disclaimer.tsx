import React from 'react'

const Disclaimer = ({text}:{text: string}) => {
  return (
    <div className='row bg-lightMain py-5'>
      <h1 className="text-center text-2xl">
        {text}
      </h1>
    </div>
  )
}

export default Disclaimer