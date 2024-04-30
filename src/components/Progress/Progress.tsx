import COLORS from '@/config/colors'
import React from 'react'

type Props = {
  step: number
}

const Progress = ({step}: Props) => {
  return (
    <div className='h-[10px] bg-[#f5f5f5] rounded-[4px] my-[10px] flex overflow-hidden'>
      <div className='h-full flex-1' style={{
        backgroundColor: step == 1 ? COLORS.SECONDARY_GREEN : '#f5f5f5'
      }}>

      </div>
      <div className='h-full flex-1' style={{
        backgroundColor: step > 1 ? COLORS.SECONDARY_GREEN : '#f5f5f5'
      }}>

      </div>
      <div className='h-full flex-1' style={{
        backgroundColor: step > 2 ? COLORS.SECONDARY_GREEN : '#f5f5f5'
      }}>

      </div>
    </div>
  )
}

export default Progress