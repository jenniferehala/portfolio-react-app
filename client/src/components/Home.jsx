import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import myResume from '../../src/resume.pdf'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className="text-pink-600">Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jennifer Ehala</h1>
                <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">I'm a Full-Stack Developer </h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">specializing in building and designing exceptional digital experiences. Currently, I'm focused on building responsice full-stack web applications.</p>

                <div className='flex justify-start gap-10'>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        <Link to='work' smooth={true} duration={500}>
                            View Work
                        </Link>
                        <span className='group-hover:rotate-90 duration-300 '>
                            <HiArrowNarrowRight className='ml-3' />

                        </span>
                    </button>
                    <a href={myResume} target="_blank">
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Resume
                        </button>
                    </a>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home