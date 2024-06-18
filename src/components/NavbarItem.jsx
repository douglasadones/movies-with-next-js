'use client'

import Link from 'next/link'
import React from 'react'
import { useSearchParams} from 'next/navigation';

export default function NavbarItem() {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    return (
        <div className='flex bg-amber-100 p-4 lg:text-lg justify-center'>
            <Link className={`hover:bg-amber-600 font-semibold underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg`}
                href={`/?genre=fetchTrending`}>2024 Releases</Link>
        </div>
    )
}
