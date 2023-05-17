import BaseButton from '@/components/Button/BaseButton'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeCartDataAction } from '@/store/features/cart.store';
import { setAlertAction } from '@/store/features/global.store';

const ListCartDialogContent = memo((props) => {
  const { handleClickEditBtn, handleClose } = props
  const dispatch = useDispatch()

  const { cartData } = useSelector((state) => ({
    cartData: state.cart.data // 購物車資料
  }))

  const handleRemoveCartBtn = async (id) => {

    await dispatch(removeCartDataAction(id))

    dispatch(setAlertAction({
      value: '成功移除購物車',
      show: true
    }))
    
    // 關閉視窗
    handleClose()
  }

  return (
    <div>
      {
        cartData.map((item, index) => {
          return (
            <div key={index} className="cz_cart_list">
              <div className="cz_cart_list__item">
                <div className="cz_cart_list__item__icon">{ item.counter }</div>
              </div>
              <div className="cz_cart_list__item cz_cart_list__item--full">
                { item.name }
              </div>
              <div className="cz_cart_list__item">
                <span className=''>$ { item.price * item.counter }</span>
              </div>
              <div className="cz_cart_list__item">
                <BaseButton value='編輯' classNames={['m-0']} handleClick={ () => handleClickEditBtn(item) }/>
              </div>
              <div className="cz_cart_list__item">
                <BaseButton value='刪除' classNames={['m-0']} handleClick={ () => handleRemoveCartBtn(item.id) }/>
              </div>
            </div>
          )
        })
      }
      <div className="mt-3">
        <BaseButton value='前往結帳' classNames={['btn-lg', 'bg-primary', 'text-white', 'd-block', 'w-100', 'm-0']}/>
      </div>
    </div>
  )
})

export default ListCartDialogContent