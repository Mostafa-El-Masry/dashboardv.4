import React from 'react'

const HomePage = () => {
  return (
    <div className="flex h-screen bg-stone-500 capitalize text-lg">
    <div className='flex flex-col items-center gap-10 m-36'>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4">A year (Vication) goals calender</div>
    <div className='flex flex-row gap-6 text-sm'>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4">Work Any Thing</div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4">Next JS Mastering (dashboard)</div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4">Stable living situation</div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4">Pressue dreams</div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4">health improvmets</div>
    </div>
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 p-4">GET MARRIED</div>
    </div>
    </div>
  )
}

export default HomePage
