import GradientWrapper from "@/components/GradientWrapper"
import Image from "next/image"
import NavLink from "../NavLink/NavLink"
import bgPattern from "../../../../public/images/bg-pattern.png"
import LayoutEffect from "@/components/LayoutEffect"
import { block } from 'million/react'
import {BsArrowRightShort} from 'react-icons/bs'

const CTA = block(() => (
    <section>
        <GradientWrapper wrapperClassName="max-w-xs h-[13rem] top-12 inset-0">
            <div className="custom-screen py-28 relative">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6"
                    }}
                >
                    <div className="relative z-10">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                                Unleash the Power of AI with Email Marketing
                            </h2>
                            <p className="mt-5 text-gray-300">
                                Mailgo is the perfect answer! Our AI-based email marketing platform enables you to create highly targeted email campaigns that are tailored to each individual subscriber.
                            </p>
                        </div>
                        <div className="mt-6 flex justify-center font-medium text-sm group">
                            <NavLink
                                href="/#pricing"
                                className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 "
                            >
                                Start now
                                <BsArrowRightShort className='scale-[1.6] ml-[4px] mr-[3px] group-hover:translate-x-1 ease-linear duration-150 sm:block hidden' />
                            </NavLink>
                        </div>
                    </div>
                </LayoutEffect>
                <Image
                    src={bgPattern}
                    className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                    alt="Background pattern"
                />
            </div>
        </GradientWrapper>
    </section>
))

export default CTA