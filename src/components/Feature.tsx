'use client';
import React from 'react';
import data from '../../public/data/data.json';
import { BackgroundGradient } from './ui/background-gradient';
import Image from "next/image";

interface Courses {
    id: number;
    musicTitle: string;
    musicDescription: string;
    imgUrl: string;
    buttonText: string;
}

const Feature = () => {
    return (
        <div className='w-full bg-gray-800 opacity-95'>
            <div className='w-full mx-auto text-center py-8 md:py-14 flex flex-col gap-4'>
                <h2 className='uppercase font-bold text-lg md:text-xl text-cyan-400'>Featured Courses</h2>
                <p className='text-3xl md:text-5xl font-bold text-white'>Learn With The Best</p>
            </div>

            <div className='container mx-auto px-4'>
                <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
                    {data.courses.map((elm: Courses) => (
                        <div key={elm.id} className="flex justify-center">
                            <BackgroundGradient className="rounded-lg max-w-xs p-6 dark:bg-zinc-900">
                                <Image
                                    src={elm.imgUrl}
                                    alt="Course image"
                                    height="400"
                                    width="400"
                                    className="object-cover w-full h-64 rounded-md"
                                />
                                <p className="text-lg text-black mt-4 dark:text-neutral-200">{elm.musicTitle}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">{elm.musicDescription}</p>
                                <button className="rounded-full py-2 px-4 text-white bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    {elm.buttonText}
                                </button>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;