import React from 'react'
import Link from 'next/link'

import '../../src/SCSS/components/header.scss'

const NavBar = () => {
    return (
			<nav className="nav">
        <ul>
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
    )
}

export default NavBar