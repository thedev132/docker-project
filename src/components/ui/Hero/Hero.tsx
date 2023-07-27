import GradientWrapper from "@/components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink/NavLink"
import LayoutEffect from "@/components/LayoutEffect"
import { block } from 'million/react'
import Aos from "aos"
import 'aos/dist/aos.css'
import {BsArrowRightShort} from 'react-icons/bs'

const Hero = block(() => (
    <section data-aos="fade-in">
        <div className="custom-screen py-28">
            {/* <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            > */}
                <div>
                    <div className="space-y-5 max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl pb-3"
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                            }}
                        >
                            Streamlined Container Creation & Deployment
                        </h1>
                        <p className="max-w-xl mx-auto text-gray-300">
                            Gain control of your business&apos;s growth with Mailgo&apos;s comprehensive marketing, automation, and email marketing platform.
                        </p>
                        <div className="flex justify-center font-medium text-sm group">
                            <NavLink
                                href="/#pricing"
                                className="flex items-center text-white bg-violet-600 hover:bg-violet-500"
                            >
                                Get Started
                                <BsArrowRightShort className='scale-[1.6] ml-[4px] mr-[2px] group-hover:translate-x-1 ease-linear duration-150 sm:block hidden' />
                            </NavLink>
                        </div>
                    </div>
                    <GradientWrapper className="mt-16 sm:mt-28" wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
                        <Image
                            data-aos="fade-in"
                            src="/images/hero.svg"
                            className="shadow-lg rounded-2xl"
                            alt="Mailgo"
                            width="1200"
                            height="691"
                        />
                    </GradientWrapper>
                </div>
            {/* </LayoutEffect> */}
        </div>
    </section>
))

export default Hero