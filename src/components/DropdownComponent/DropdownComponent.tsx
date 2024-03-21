'use client';

import { Dropdown } from 'flowbite-react';
import Link from 'next/link';

type DropDownItem = {
  title: string,
  linkUrl: string
}
type Props = {
  dropdownItems: Array<DropDownItem>
}

const DropdownComponent = ({dropdownItems}: Props) => {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>

      {
        dropdownItems.map((item: DropDownItem, index: number) => (
          <Dropdown.Item key={index}>
            <Link href={item.linkUrl}>{item.title}</Link>
          </Dropdown.Item>
        ))
      }
    </Dropdown>
  );
}

export default DropdownComponent;