import React from 'react'
import Image from 'next/image'

import NavBar from './NavBar'

import '../../src/SCSS/components/header.scss'

const DesktopNav = () => {
  return (
		<div className="desktop__nav wrapper flex flex-nowrap justify-between items-center" >
			<a href="https://hyggegocbepnho.vn/" className="custom-logo-link" rel="home" aria-current="page">
				<Image
					src="/logo.png"
					alt="logo hygge"
					width={120} 
					height={73}
				/>
			</a>
			<NavBar />
		</div>
	)
}

export default DesktopNav