import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className ="relative h-10 w-20">
        <Image objectFit="contain" src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png" layout='fill'/>
    </div>
  )
}

export default Header