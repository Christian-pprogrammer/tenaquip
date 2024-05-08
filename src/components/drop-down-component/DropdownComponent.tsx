'use client';

import { Dropdown, DropdownHeader } from 'flowbite-react';
import Link from 'next/link';

type DropDownItem = {
  title: string,
  linkUrl: string
}
type Props = {
  dropdownItems: Array<DropDownItem>
}

const FilterButton = () => {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <DropdownHeader>
        Header
      </DropdownHeader>
      {
        [1,2].map((item: any, index: number) => (
          <>
            <Dropdown.Item key={index}>
              <div className="campaigns flex gap-1">
              <input type="checkbox" value="campaigns" />
              <label htmlFor="" className='custom-no-margin-label' style={{
                marginTop: '0px !important'
              }}>
               Accuform Signs (1469)
              </label>
            </div>
            </Dropdown.Item>
          </>
        ))
      }

      <button className="inline-block bg-mainColor text-white text-center w-[100%] rounded-sm text-sm p-4">
        Refine
      </button>
    </Dropdown>
  );
}

export default FilterButton;