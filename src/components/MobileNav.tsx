'use client';

import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsXLg } from "react-icons/bs";

import '../../src/SCSS/components/header.scss'

const MobileNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="mobile flex-col">
      <button className="toggle"
        onClick={() => setNavbarOpen((prev) => !prev)}
      >
        {navbarOpen ? <BsXLg /> : <RxHamburgerMenu />}
      </button>
      <ul className={`nav${navbarOpen ? ' show__nav' : ''}`}>
        <li className="mobile__list">
          <Link className="mobile__link" href="https://hyggegocbepnho.vn/"  passHref={true}> 
            Trang chủ
          </Link> 
        </li>
        <li className="mobile__list">
          <Link className="mobile__link" href="/">
            Đặt món
          </Link>
        </li>
        <li className="mobile__list">
          <Link className="mobile__link" href="https://hyggegocbepnho.vn/dat-tiec/"  passHref={true}> 
            Đặt tiệc
          </Link>
        </li>
        {/* <li>
          Package Food and Drink
        </li>*/}
        <li className="mobile__list">
          <Link className="mobile__link" href="https://hyggegocbepnho.vn/lien-he/"  passHref={true}> 
            Liên hệ
          </Link>
        </li> 
      </ul>
    </nav>
  )
}

export default MobileNav