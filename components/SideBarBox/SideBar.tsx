import { SideBarContainer } from '@/styles/GlobalStyles'
import Image from 'next/image'
import React from 'react'
import img1 from '../../public/assets/images/users.png';
import img2 from '../../public/assets/images/list.png';
import img3 from '../../public/assets/images/download.png';
import img4 from '../../public/assets/images/settings.png'
const SideBar = () => {
  return (
    <SideBarContainer>
      <Image src={img1}
      alt='image'
      height={30}
      width={30}/>

      <Image src={img2}
      alt='image'
      height={30}
      width={30}/>
      <Image src={img3}
      alt='image'
      height={30}
      width={30}/>
      <Image src={img4}
      alt='image'
      height={30}
      width={30}/>
    </SideBarContainer>
  )
}

export default SideBar