import TitleSection from '@/components/landingPage/titleSection'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <section>
      <div className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          pill="✨ your workspace, Perfected"
          title="All in one Colllaboration and Porductivity platoform"
        />
      <div className="bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r bg-purple-700 to-brand-bg-purple-950 sm:w-[300px]">
        <Button variant={"secondary"} className='w-full rounded-[10px] p-6 text-2xl bg-black'>Get NoteBreeze free</Button>
      </div>
      </div>
    </section>
  )
}

export default HomePage
