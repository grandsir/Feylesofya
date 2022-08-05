import React, {useContext} from 'react'
import { Category } from './Models'

import Link from 'next/link'


const categories : Category[] = [ 
    {name: 'ASDASDKAKD', slug: 'react'},
    {name: "ADSASDSAD", slug: "web-dev"}
]

const Header = () => {
    return (
        <div className='border-b-4 border-neutral-900 w-full bg-neutral-50'>
            <div className='container mx-10'>
                <div className='inline-block py-4 w-full'>
                    <div className='md:float-left block'>
                        <Link href="/">
                            <img
                            className='cursor-pointer w-auto h-16'
                            src= '../logo.svg'
                            >
                            </img>
                        </Link>
                    </div>
                    <div className='hidden md:float-left md:contents'>
                        {
                        categories.map((category) => (
                            <Link key={category.slug} href={`/kategori/${category.slug}`}> 
                            <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header