"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";

import courses from '../../../public/data/AllCourses.json'
const Courses = () => {
  return (
    <div className='w-full h-screen  py-14'>
      <div className="flex justify-center">
        <h3 className='text-bold text-4xl'>All Our Courses {courses.products.length} </h3>
      </div>
      <div className=" grid grid-cols-3 m-4 gap-8  w-full  ">
        {
          courses.products.map((elm,ind) => {
            return (
              <div key={ind} className="w-[20rem] h-[30rem] px-8 ">
                <CardContainer className="inter-var">
                  <CardBody className=" bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[25rem] h-full rounded-xl p-6 border  ">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {elm.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {elm.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={elm.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-4">

                    <div className="flex justify-between items-center mt-4">
              {
                elm.buttons.map((btn, index) => (
                  <CardItem
                    key={index}
                    translateZ={20}
                    as={btn.type === 'try' ? Link : 'button'}
                    href={btn.link}
                    target={btn.type === 'try' ? '__blank' : undefined}
                    className={`px-4 py-2 rounded-xl ${btn.type === 'try' ? 'text-xs font-normal dark:text-white' : 'bg-black dark:bg-white dark:text-black text-white text-xs font-bold'}`}
                  >
                    {btn.text} {btn.type === 'try' && ' →'}
                  </CardItem>
                ))
              }
            </div>
                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            )
          })
        }


      </div>
    </div>
  )
}

export default Courses


