import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex justify-between items-center px-5 py-5 shadow border-b '>
            <Link to="/" className='flex items-center gap-2'>
                <img
                    width={80}
                    src="/vite.svg"
                    alt="Logo" />
                <h2 className='text-2xl font-bold'>Filmania</h2>
            </Link>
            <Link to="/create" className=' px-4 py-2 rounded-full bg-white hover:bg-black hover:text-white transition'>Yeni Film Oluştur</Link>
        </header>
    )
}

export default Header
