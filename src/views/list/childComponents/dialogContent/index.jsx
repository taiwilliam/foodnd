import React, { memo, useEffect, useState } from 'react'
import propTypes from "prop-types"

import BaseImage from '@/components/images';
import BaseButton from '@/components/buttons';
import { addCartDataAction } from '@/store/features/cart';
import { useDispatch, useSelector } from 'react-redux';
import CartModel from '@/models/Cart.model';
import { MAXIMUM_OF_CART } from '@/contants/global.contants'; 

const ListDialogContent = memo((props) => {
  const { id, cover, name, description, price, handleClose, mode } = props
  const [ counter, setCounter ] = useState(1)
  const [ note, setNote ] = useState('')
  const dispatch = useDispatch()

  const { cartData } = useSelector((state) => ({
    cartData: state.cart.data
  }))

  useEffect(()=> {
    initialData()

    if(mode == 'update'){
      insertCartData()
    }
  },[id])

  const insertCartData = () => {
    let data = cartData.filter((item) => item.id === id)
    
    setCounter(data[0].counter)
    setNote(data[0].note)
  }

  const initialData = () => {
    setCounter(1)
    setNote('')
  }

  const handleSelectCounter = (e) => {
    setCounter(e.target.value)
  }

  const handleChangeNote = (e) => {
    setNote(e.target.value)
  }

  const handleAddCartBtn = () => {
    const model = {...CartModel, id, name, price, counter, note}
    dispatch(addCartDataAction(model))
    
    // 關閉視窗
    handleClose()
  }

  return (
    <div className="">
      <BaseImage src={ cover } heightRatio={ 75 } classNames={['rounded-0']}/>
      <p className='fs-lg mt-3'>{ name }</p>
      <p className='mt-3 text-muted'>{ description }</p>
      <div className="fs-lg fw-bold mt-3">$ { price }</div>

      <div className="border-top w-100 my-4"></div>

      <p className='mb-3'>餐點備註</p>
      <textarea 
        onChange={e => handleChangeNote(e)}
        value={ note }
        className='w-100 p-3 rounded resize-none'
        name="notes"
        placeholder="例: 不加香菜、不加辣"
        rows="10"
      >
      </textarea>

      <div className="border-top w-100 my-4"></div>

      <div className="d-flex mx-n2">
        <div className="d-flex px-2">
          <select name="counter" className='px-3 rounded' value={ counter } onChange={e => handleSelectCounter(e)}>
            {
              Array.from({length: MAXIMUM_OF_CART}, (_, i) => i + 1).map(i => <option key={i} value={i}>{ i }</option>)
            }
          </select>
        </div>
        <div className="flex-grow-1 px-2">
          <BaseButton classNames={['btn-lg','d-block','w-100']} value={ mode == 'create' ? '放入購物車' : '修改訂單' } handleClick={() => handleAddCartBtn() }/>
        </div>
      </div>
    </div>
  )
})


ListDialogContent.propTypes = {
  mode: propTypes.string,
  handleClose: propTypes.func
}

ListDialogContent.defaultProps = {
  mode: 'create',
  handleClose: () => {}
}

export default ListDialogContent