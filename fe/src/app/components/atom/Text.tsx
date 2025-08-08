import React from 'react'

export default function Text({children}: {children: string}) {
  return (
    <div className='mt-3'>{children}</div>
  )
}
