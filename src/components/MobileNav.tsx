'use client';

import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsXLg } from "react-icons/bs";
import NavBar from './NavBar'

import '../../src/SCSS/components/header.scss'

// const Hamburger = <RxHamburgerMenu 
//         onClick = {() => console.log("click")} />

// export const MobileNav = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <div className="mobile flex flex-col">
//       <button id="hamburger">
//         <RxHamburgerMenu toggled={isOpen} size={20} toggle={setOpen}/>
//       </button>
//       <button id="xIcon"><FaXmark /></button>
//       <NavBar />
//     </div>
//   )
// }

const MobileNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="mobile flex-col">
      <button className="toggle"
        onClick={() => setNavbarOpen((prev) => !prev)}
      >
        {navbarOpen ? <BsXLg /> : <RxHamburgerMenu />}
        {/* <RxHamburgerMenu /> */}
      </button>
      {/* <button id="xIcon"><FaXmark /></button> */}
      <ul className={`nav${navbarOpen ? ' show__nav' : ''}`}>
        <li className="mobile__link">
          <Link href="https://hyggegocbepnho.vn/"  passHref={true}> 
            Trang chủ
          </Link> 
        </li>
        <li className="mobile__link">
          <Link href="/">
            Đặt món
          </Link>
        </li>
        <li className="mobile__link">
          <Link href="https://hyggegocbepnho.vn/dat-tiec/"  passHref={true}> 
            Đặt tiệc
          </Link>
        </li>
        {/* <li>
          Package Food and Drink
        </li>*/}
        <li className="mobile__link">
          <Link href="https://hyggegocbepnho.vn/lien-he/"  passHref={true}> 
            Liên hệ
          </Link>
        </li> 
      </ul>
    </nav>
    // <div className="mobile flex flex-col">
      // <button id="hamburger"><RxHamburgerMenu /></button>
      // <button id="xIcon"><FaXmark /></button>
    //   <NavBar />
    // </div>
  )
}

export default MobileNav