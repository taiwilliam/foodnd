import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';

import logoPath from '@/assets/images/logo/airbnb.svg'

const index = memo(() => {
  const navigate = useNavigate();
  const handleOnClickLogo = () => navigate('/home');

  return (
    <div className='cz_header border-bottom border-secondary py-4'>
      <div className="container d-flex justify-content-between">
        <div>
          <img
            className='cz_header__logo'
            src={ logoPath }
            alt=""
            onClick={ handleOnClickLogo }
          />
        </div>
        <div className='mx-auto'>
          searchbar
        </div>
        <div>
          dropdown
        </div>
      </div>
    </div>
  )
})

export default index