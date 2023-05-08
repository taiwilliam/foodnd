import React, { memo } from 'react'

const index = memo(() => {
  return (
    <div>
      Home
      <p className='text-primary'>primary</p>
      <p className='text-secondary'>secondary</p>
    </div>
  )
})

export default index
