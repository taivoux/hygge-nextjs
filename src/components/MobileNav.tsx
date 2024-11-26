import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import NavBar from './NavBar'

import '../../src/SCSS/components/header.scss'

const Hamburger = <RxHamburgerMenu 
        onClick = {() => console.log("click")} />

const MobileNav = () => {
  return (
    <div className='mobile__nav'>
      <button className="hamburger">{Hamburger}</button>
      <NavBar />
    </div>
  )
}

export default MobileNav