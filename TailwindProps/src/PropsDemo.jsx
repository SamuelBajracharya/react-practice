import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Component(props) {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 overflow-hidden mb-2">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto overflow-hidden" src="https://blog.confirmbets.com/wp-content/uploads/2019/07/Messi.jpg" alt="" width="384" height="512" />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {props.name}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            {props.desc}
          </div>
        </figcaption>
      </div>
    </figure> 
  )
}
export default Component
