'use client'
import Image from 'next/image'
import { assets } from '../assets/assets.js';

const Navbar = () => {
    return (
        <div>
            {/* Background Image: Assuming a LIGHTER background or very transparent dark one. 
               - Opacity lowered further to ensure the background is subtle.
            */}
            <div className='fixed top-0 left-0 w-full h-screen -z-10 opacity-30'>
                <Image
                    src={assets.bg_image}
                    alt='background image'
                    fill
                    className='object-cover'
                    priority
                />
            </div>

            {/* Navigation Bar: Changed text color to DARK (text-gray-900) */}
            <nav className='w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 backdrop-blur-sm bg-white/70 text-gray-900 shadow-lg'>

                {/* Logo & Name */}
                <a href="#top" className="flex items-center">
                    <Image
                        src={assets.logo}
                        alt="logo"
                        // Changed logo border to a light gray for definition against a white nav
                        className='w-12 h-12 rounded-full cursor-pointer mr-4 border-2 border-gray-300 transition-transform hover:scale-105'
                        width={48}
                        height={48}
                    />
                    {/* text-gray-900 is inherited from <nav> */}
                    <span className="text-xl font-bold tracking-wider hidden sm:block">Nazmul</span>
                </a>

                {/* Navigation Links: Changed text and hover colors to dark defaults */}
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 shadow-md backdrop-blur-sm border border-gray-200'>

                    <li className="hover:text-cyan-600 transition-colors">
                        <a href="#top">Home</a>
                    </li>
                    <li className="hover:text-cyan-600 transition-colors">
                        <a href="#about">About</a>
                    </li>
                    <li className="hover:text-cyan-600 transition-colors">
                        <a href="#services">Services</a>
                    </li>
                    <li className="hover:text-cyan-600 transition-colors">
                        <a href="#work">My Work</a>
                    </li>
                    <li className="hover:text-cyan-600 transition-colors">
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>

                {/* Contact Button: Adjusted colors for better contrast on a light background */}
                <div className='hidden lg:block'>
                    <a
                        href="#contact"
                        className='flex items-center gap-3 px-6 py-2 border-2 border-gray-900 text-gray-900 rounded-full transition-all duration-300 hover:bg-gray-900 hover:text-white font-medium'
                    >
                        Hire Me
                        <Image src={assets.hire} alt="contact icon" className='w-4' width={16} height={16} />
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button className="text-gray-900 text-3xl">☰</button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar