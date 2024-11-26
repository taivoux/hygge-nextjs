//import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

import '../../src/SCSS/components/header.scss'

// const Hamburger = <RxHamburgerMenu 
//         onClick = {() => console.log("click")} />

const Header = () => {
  return (
    <header>
      <div className="header">
        <DesktopNav />
        
      </div>
      <MobileNav />
    </header>
  )
}

export default Header