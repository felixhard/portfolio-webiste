"use client";

import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className="pt-24 lg:pt-32">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello, I'm{" "}
                            </span>
                            <br></br>
                        <TypeAnimation
                            sequence={[

                                ' Felix',
                                1500,
                                ' A Software Developer',
                                1000,
                                ' Learning Frontend',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem Impsum dolor sit amet consecetetur adipiscing elit.
                        Quiquisuque voluptatum.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                            Hire me
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#1E1E1E] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#2E2E2E] w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image2.svg"
                            alt="hero image"
                            className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={380}
                            height={380}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
