
import Link from '@/node_modules/next/link'
import React from 'react'

const NextJs = () => {
  return (
    <div>Next JS Mastering (dashboard)
      <Link href="/">Home</Link>
      <Link href="/content/Next-JS/HTML">HTML</Link>
      <Link href="/content/Next-JS/CSS">CSS</Link>
      <Link href="/content/Next-JS/TextEditor">Text Editor</Link>
    </div>

  )
}

export default NextJs