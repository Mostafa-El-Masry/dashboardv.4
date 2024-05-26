import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className="flex text-center h-screen justify-evenly capitalize">
    <div className='flex flex-col w-screen justify-evenly'>
      <div className=" h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4">547 - A year (Vication) goals calender</div>
    <div className='flex flex-row content-evenly justify-evenly'>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4"><Link href="./content/work"> Work Any Thing</Link></div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4"><Link href="./content/Next-JS"> Next JS Mastering (dashboard)</Link></div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4"><Link href="./content/Stable-living-situation"> Stable living situation</Link></div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4"><Link href="./content/Pressue-dreams"> Pressue dreams</Link></div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4"><Link href="./content/Health-improvmets"> health improvmets</Link></div>
    </div>
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4">GET MARRIED</div>
    </div>
    </div>
  )
}

export default HomePage
