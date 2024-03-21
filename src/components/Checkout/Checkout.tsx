'use client';

import { Accordion } from 'flowbite-react';

const Checkout = () => {
  return (
    <div className='flex flex-col gap-5 my-5'>
      <Accordion className='w-[300px] rounded-none' collapseAll>
        <Accordion.Panel>
          <Accordion.Title className='bg-lightMain w-full outline-none border-none focus:ring-0 py-2 px-[10px]'>
            <h2 className='text-Gray text-lg font-semibold'>Promo Code</h2>
          </Accordion.Title>
          <Accordion.Content className='px-[10px]'>
            <p className='text-[12px] text-Gray font-normal'>If you have a promo code, enter it here.</p>
            <div className="flex items-stretch gap-2">
              <input type="text" className="custom-input" />
              <button className="block bg-[#868688] text-white px-2 mb-[5px] rounded-sm cursor-pointer">
                Apply
              </button>
            </div>
            
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>

      <div className='bg-lightMain border-[#ddd] border-[1px] p-[10px] flex flex-col gap-y-3 w-[300px]'>
        <h3 className='text-Gray text-lg font-semibold'>Order Summary</h3>
        <div className='flex justify-between'>
          <p className='text-Gray text-sm font-semibold'>Subtotal</p>
          <p className='text-Gray text-sm font-semibold'>$0.00</p>
        </div>
      </div>
      <button disabled className='inline-block bg-mainColor text-white rounded-s text-[16px] py-[15px] text-center w-[300px] cursor-pointer'>
        Checkout
      </button>
    </div>
  );
}

export default Checkout;