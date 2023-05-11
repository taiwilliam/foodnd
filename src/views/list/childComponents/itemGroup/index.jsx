import React, { memo } from 'react'

import BaseListCard from '@/views/list/childComponents/card';

const ListItemGroup = memo((props) => {
  const { data, title, handleClick } = props
 
  return (
    <div className="row g-4 mb-5">
      <div className="col-12">
        <h3 className='mb-0 fs-xl'>{ title }</h3>
      </div>
      {
        data.map((item, index) => {
          return (
            <div 
              key={ index }
              className="col-6 col-md-3 col-lg-2" 
            >
              <BaseListCard {...item} handleClick={ () => handleClick(item.id) }/>
            </div>
          )
        })
      }
    </div>
  )
})

export default ListItemGroup