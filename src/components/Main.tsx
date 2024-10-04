import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'

import { Button } from "./ui/moving-border";

const Main = () => {
    return (
        <div className=' lg:h-screen w-full h-[80vh] flex flex-col justify-center items-center' >

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <div className='w-full h-auto'>
                <h1 className='mb-4 lg:text-7xl text-4xl  text-center font-bold'> Master the Art of Music</h1>
                <p className='text-lg max-w-[37rem] w-full mx-auto text-center'>Loremtnui maxime harum iure officia molestias voluptates ea unde magnam velit voluptate quos aperiam aliquam enim, porro delectus facilis ratione soluta nisi. Omnis, assumenda explicabo.</p>
                <div className='text-center mt-6'>
                    <Link href={'/courses'} className='text-center'>
                        <Button
                            borderRadius="1.75rem"
                            className=" text-white bg-black dark:bg-black shadow-lg font-bold  border-1  dark:text-white border-neutral-200 dark:border-slate-800">
                            Explore Courses
                        </Button>


                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Main