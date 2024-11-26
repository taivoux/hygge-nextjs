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
        <header className="header">
            <div className="wrapper flex flex-nowrap justify-between items-center" >
                <a href="https://hyggegocbepnho.vn/" className="custom-logo-link" rel="home" aria-current="page">
                    <Image
                        src="/logo.png"
                        alt="logo hygge"
                        width={120} 
                        height={73}
                    />
                </a>
                <nav className="hidden xl:flex">
                    <ul>
                        <li>
                            <Link href="https://hyggegocbepnho.vn/"  passHref={true}> 
                            Trang chủ
                            </Link> 
                        </li>
                        <li>
                            <Link href="/">
                            Đặt món
                            </Link>
                        </li>
                        <li>
                            <Link href="https://hyggegocbepnho.vn/dat-tiec/"  passHref={true}> 
                            Đặt tiệc
                            </Link>
                        </li>
                        {/* <li>
                            Package Food and Drink
                        </li>*/}
                        <li >
                            <Link href="https://hyggegocbepnho.vn/lien-he/"  passHref={true}> 
                            Liên hệ
                            </Link>
                        </li> 
                    </ul>
                </nav>    
            </div>
        </header>
    )
}

export default Header