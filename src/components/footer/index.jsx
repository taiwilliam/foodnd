import React, { memo } from 'react'
import footerLinkDate from '@/data/footerLink.db'

const index = memo(() => {

  function renderLinkList() {
    return footerLinkDate.reduce((prev, item, index) => {
      const linkElement = `<a key=${index} href="#app" class="fw-lighter fs-xs">${ item }</a>`
      const middleElement = "<span class='mx-2'>|</span>"
      const element = index + 1 !== footerLinkDate.length ? linkElement + middleElement : linkElement
      return prev += element
    },'')
  }

  return (
    <div className='bg-light border-top'>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3">
            <h5 className='fs-md fw-light'>© 2023 foodnd</h5>
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
              <a href="#app" className='fs-md fw-light'>關於foodnd</a>
            </div>
            <div className="mb-3">
              <a href="#app" className='fs-md fw-light'>企業徵才</a>
            </div>
          </div>
        </div>
        <div className="border-top w-100 my-4"></div>
        <div dangerouslySetInnerHTML={{__html: renderLinkList()}}></div>
      </div>
    </div>
  )
})

export default index