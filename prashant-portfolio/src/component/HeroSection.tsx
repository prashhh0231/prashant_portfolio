import React from "react";

import prashantImg from '../assets/prashant.png';

const HeroSection = () => {

    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-white"
        >
            <div className="max-w-[1200px] mx-auto px-[5%] grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-center">
                {/* Left Content */}
                <div className="hero-content">
                    <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-tight text-[#0a0a0a] mb-4">
                        Hey, this is{" "}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Prashant Jawale
                        </span>{" "}
                        - Frontend developer
                    </h1>
                    <p className="text-xl text-[#52525b] mb-8 max-w-[500px]">
                        Turning designs into seamless digital experiences across web and mobile.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <a
                            href="#projects"
                            className="px-7 py-3 rounded-lg font-semibold text-base no-underline transition-all duration-300 bg-primary text-white border-none hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)]"
                        >
                            View My Work
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1GFvYMqfh4jD4sXl7OsRQdoG7U3JPKeRF/view?usp=sharing"
                            target="_blank"
                            className="px-7 py-3 rounded-lg font-semibold text-base no-underline transition-all duration-300 bg-transparent text-[#0a0a0a] border-2 border-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
                        >
                            Download CV
                        </a>
                    </div>
                </div>


                {/* Right Image */}
                <div className="hero-image relative flex justify-center items-center">
                    {/* Outer Circle */}
                    <img
                        src={prashantImg}
                        alt="Prashant Jawale"
                        className="absolute -top-10 md:-top-20 w-[240px] md:w-[410px] h-[240px] md:h-[410px] object-cover z-20"
                    />


                    <div className="w-[200px] md:w-[400px] h-[200px] md:h-[400px]  rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-primary flex justify-center items-center relative animate-[float_6s_ease-in-out_infinite] z-0">

                        {/* Inner Circle */}
                        {/* <div className="w-[220px] md:w-[380px] h-[220px] md:h-[380px] rounded-md bg-[#374151] flex justify-center items-center relative z-10">

                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;