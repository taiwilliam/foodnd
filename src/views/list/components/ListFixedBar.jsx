import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import BaseButton from '@/components/Button/BaseButton'
import BaseIcon from '@/components/Icon/BaseIcon'

const ListFixedBar = memo((props) => {
  const { handleClick } = props
  const { cartData } = useSelector((state) => ({
    cartData: state.cart.data // 購物車資料
  }))

  return (
    <div className='cz_fixed_bar'>
      <BaseButton rounded='pill' classNames={['shadow']} handleClick={ () => handleClick() }>
        <BaseIcon type='outlined' icon='shopping_cart' classNames={['me-2']}/>
        購物車
        <div className="circle ms-2 bg-dark text-white">
          {cartData.length}
        </div>
      </BaseButton>
    </div>
  )
})

export default ListFixedBar