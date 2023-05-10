import BaseHomeCard from '@/views/home/childComponents/cards'
import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import shopListData from '@/data/shopList.db';

const HomeView = memo(() => {
  const navigate = useNavigate()
  const [shopList] = useState(shopListData)

  useEffect(() => {
    console.log('渲染完了')

    return () => {
      console.log('銷毀了')
    }
  },[])

  return (
    <div className='container py-5'>
      <div className="row g-4 mb-5">
        <div className="col-12">
          <h3 className='mb-0 fs-xl'>精選店家</h3>
        </div>
        {
          shopList.map((item, index) => {
            return (
              <div 
                key={ index }
                className="col-6 col-md-4 col-lg-3" 
              >
                <BaseHomeCard
                  title={item.name}
                  cover={item.cover}
                  price={item.price}
                  score={item.score}
                  classNames={['cursor-pointer']}
                  handleClick={ () => navigate('/list') }
                />
              </div>
            )
          })
        }
      </div>

      <div className="row g-4 mb-5">
        <div className="col-12">
          <h3 className='mb-0 fs-xl'>快速送達</h3>
        </div>
        {
          shopList.map((item, index) => {
            return (
              <div 
                key={ index }
                className="col-6 col-md-4 col-lg-3" 
              >
                <BaseHomeCard
                  title={item.name}
                  cover={item.cover}
                  price={item.price}
                  score={item.score}
                  classNames={['cursor-pointer']}
                  handleClick={ () => navigate('/list') }
                />
              </div>
            )
          })
        }
      </div>

      <div className="row g-4 mb-5">
        <div className="col-12">
          <h3 className='mb-0 fs-xl'>新餐廳</h3>
        </div>
        {
          shopList.map((item, index) => {
            return (
              <div 
                key={ index }
                className="col-6 col-md-4 col-lg-3" 
              >
                <BaseHomeCard
                  title={item.name}
                  cover={item.cover}
                  price={item.price}
                  score={item.score}
                  classNames={['cursor-pointer']}
                  handleClick={ () => navigate('/list') }
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
})

export default HomeView
