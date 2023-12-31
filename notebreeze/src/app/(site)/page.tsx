'use client'
import { Button } from '@/components/button'
import Banner from '../../../public/appBanner.png'
import TitleSection from '@/components/landingPage/titleSection'
import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <section>
      <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          pill="✨ your workspace, Perfected"
          title="All in one Colllaboration and Porductivity platoform"
        />
        <div className=" p-[2px] mt-6 rounded-xl bg-gradient-to- r bg-purple-900 to-brand-bg-purple-950 sm:w-[300px]">
          <Button
            title="Get NoteBreeze free"
            type="Button-1"
            event={() => {
              console.log('oi')
            }}
            style="w-full p-3 text-xl rounded-[10px] bg-background"
          />
        </div>
        <div
          className="md:mt-[-90px]
          sm:w-full
          w-[750px]
          flex
          justify-center
          items-center
          mt-[-40px]
          relative
          sm:ml-0
          ml-[-50px]
        "
        >
          <Image
            src={Banner}
            alt="Application Banner"
          />
          <div
            className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
          ></div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
