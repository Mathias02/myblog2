import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

  return (
    <div className='p-5 bg-gray-100'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-6'>
                <Image src='/logo.svg' width={180} height={180} alt='logo'/>
                <ul className='flex gap-3 capitalize'>
                    <Link href={'/explore'}>
                      <li className='hover:text-[#AC8049] cursor-pointer'>explore</li> 
                    </Link>
                    <Link href={'/contact'}>
                      <li className='hover:text-[#AC8049] cursor-pointer'>contact</li>
                    </Link>
                </ul>
            </div>
            <Button className='hover:bg-[#AC8049] text-white rounded bg-primary'>Get started</Button>
        </div>
    </div>
  )
}

export default Header