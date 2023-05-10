import React, { memo } from 'react'
import BaseImage from '@/components/images'
import BaseIcon from '../../../../components/icons'

const BaseTop = memo((props) => {
  const { cover, name, score, address, price } = props
  
  return (
    <div>
      <BaseImage src={cover} heightRatio={ 20 } classNames={['rounded-0']}/>
      <div className="container py-3">
        <h2 className='fs-xl mb-2'>{ name }</h2>
        <div className="d-flex align-items-center mb-2">
          <BaseIcon icon='star' classNames={['text-secondary','me-1','fs-lg']}/>
          <span>{ score }</span>
          <span className='text-secondary mx-2'>|</span>
          <span>{ address }</span>
        </div>
        <div className="">
          <span className='fs-sm text-muted'>$ { price } TWD 外送服務費</span>
        </div>
      </div>
    </div>
  )
})

export default BaseTop