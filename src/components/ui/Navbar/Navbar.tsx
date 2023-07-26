
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavHeader from '../NavHeader/NavHeader'
import NavLink from '../NavLink/NavLink'
import Aos from 'aos'
import {BsArrowRightShort} from 'react-icons/bs'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
    Aos.init({duration: 3000});
    }, [])

    const [state, setState] = useState(false)
    const menuBtnEl: any = useRef()

    const navigation = [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "FAQs", href: "/#faqs" },
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!menuBtnEl.current.contains(target)) setState(false);
        };
    }, [])

    return (
        <header className='absolute sticky top-0 z-50'>
            <div className="custom-screen md:hidden">
                <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
            </div>
            <nav className={`backdrop-blur-lg md:text-sm md:static md:block ${state ? "bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900" : "hidden"}`}>
                <div className="custom-screen items-center md:flex">
                    <NavHeader state={state} onClick={() => setState(!state)} />
                    <div className={`flex-1 items-center mt-8 text-gray-300 md:font-medium md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                        <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="hover:text-gray-50">
                                            <Link href={item.href} className="block">
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                            <Link href="/login" className="block hover:text-gray-50">
                                Sign in
                            </Link>
                            <NavLink href="/#pricing" className="flex items-center justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border 
                            border-gray-500 active:bg-gray-900 md:inline-flex">                                Start now
                                <BsArrowRightShort className='scale-[1.6] ml-[1px] group-hover:translate-x-1 ease-linear duration-150 sm:block hidden'/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar