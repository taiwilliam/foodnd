import React, { memo, Fragment } from 'react'
import footerLinkDate from '@/data/footerLink.data'
import { useNavigate } from 'react-router-dom'

const BaseFooter = memo(() => {
  const thisYear = new Date().getFullYear();
  const navigate = useNavigate();

  function renderLinkList(item, index) {
    return (
      // 回傳jsx外層都必須包裹一個元素 這裡的span是多餘的tag 需要再優化\
      <Fragment key={index}>
        <a href="#app" className="fw-lighter fs-xs text-nowrap">{ item }</a>
        { index + 1 < footerLinkDate.length && <span className='mx-2 text-secondary'>|</span> }
      </Fragment>
    )
  }

  return (
    <div className='bg-light border-top'>
      <div className="container py-5">
        <div className="row gy-3">
          <div className="col-12 col-md-3">
            <div className="mb-3">
              <h5 className='fs-md fw-light'>© { thisYear } foodnd</h5>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="mb-3">
              <a href="#app" className='fs-md fw-light'>服務條款</a>
            </div>
            <div className="mb-3">
              <a href="#app" className='fs-md fw-light'>隱私權條款</a>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="mb-3">
              <a href="#app" className='fs-md fw-light'>取得協助</a>
            </div>
            <div className="mb-3">
              <a href="#app" className='fs-md fw-light'>新增您的餐廳</a>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="mb-3">
              <a href="#app" onClick={() => navigate('/about')} className='fs-md fw-light'>關於foodnd</a>
            </div>
            <div className="mb-3">
              <a href="#app" className='fs-md fw-light'>企業徵才</a>
            </div>
          </div>
        </div>
        <div className="border-top w-100 my-4"></div>
        <p className="text-break">
          { footerLinkDate.map((item, index) => renderLinkList(item, index)) }
        </p>
      </div>
    </div>
  )
})

export default BaseFooter