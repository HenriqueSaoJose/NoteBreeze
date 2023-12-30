import React, { MouseEventHandler } from 'react'

interface ButtonProps {
  title: string
  type: string
  color?: string
  event: MouseEventHandler
  size?: string
  style?: string
}
export const Button: React.FC<ButtonProps> = ({ title, type, color, event, size,style }) => {
   if(type == 'Button-1'){
      return <button onClick={event} className={`cursor-pointer transition-all bg-purple-900 text-white  rounded-lg
      border-purple-950
      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
      active:border-b-[2px] active:brightness-90 active:translate-y-[2px] ${style}`} >
          {title}
      </button>
   }else if(type == 'Button-2'){
    return <button onClick={event} className={` bg-purple-950 my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#00659b] before:to-[rgb(68,136,232)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]
    ${style}`}>
      {title}
    </button>
   }
}

