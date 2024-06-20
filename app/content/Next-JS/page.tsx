
import Link from '@/node_modules/next/link'
import React from 'react'

const NextJs = () => {
  return (
    <>
    <h1>Next JS Mastering (dashboard)</h1>
    <div
    className='flex justify-evenly'>
      <Link className='Link' href="/">Home</Link>
      <Link className='Link' href="/content/Next-JS/HTML">HTML</Link>
      <Link className='Link' href="/content/Next-JS/CSS">CSS</Link>
      <Link className='Link' href="/content/Next-JS/JS">JS</Link>
      <Link className='Link' href="/content/Next-JS/TextEditor">Text Editor</Link>
      </div>
    </>

  )
}

export default NextJs