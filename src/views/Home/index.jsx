import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeView = memo(() => {
  const navigate = useNavigate()

  useEffect(() => {
    console.log('渲染完了')

    return () => {
      console.log('銷毀了')
    }
  },[])

  return (
    <div className='container py-5'>
      <div className="row g-4">
        <div className="col-6 col-md-4 col-lg-3" onClick={ () => navigate('/list') }>
          <div className="p-5 bg-primary">
            我是店家
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3" onClick={ () => navigate('/list') }>
          <div className="p-5 bg-primary">
            我是店家
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3" onClick={ () => navigate('/list') }>
          <div className="p-5 bg-primary">
            我是店家
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3" onClick={ () => navigate('/list') }>
          <div className="p-5 bg-primary">
            我是店家
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3" onClick={ () => navigate('/list') }>
          <div className="p-5 bg-primary">
            我是店家
          </div>
        </div>
      </div>
    </div>
  )
})

export default HomeView
