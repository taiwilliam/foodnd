import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import BaseHomeCard from '@/views/home/components/HomeCard'
import { fetchShopListAction } from '@/store/features/shop.store';
import { setAlertAction } from '@/store/features/global.store';

const HomeView = memo(() => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { shopList } = useSelector((state) => ({
    shopList: state.shop.list
  }))

  useEffect(() => {
    // 獲取非同步shop資料
    dispatch(fetchShopListAction())
  },[dispatch])

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
                  { ...item }
                  classNames={['cursor-pointer']}
                  handleClick={ (id) => navigate(`/list/${id}`) }
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
                  { ...item }
                  classNames={['cursor-pointer']}
                  handleClick={ (id) => navigate(`/list/${id}`) }
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
                  { ...item }
                  classNames={['cursor-pointer']}
                  handleClick={ (id) => navigate(`/list/${id}`) }
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
