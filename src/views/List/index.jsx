import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BaseTop from '@/views/list/childComponents/top';
import ListItemGroup from '@/views/list/childComponents/itemGroup';
import BaseDialog from '@/components/dialogs/base';
import shopListDB from '@/data/shopList.db';
import shopMenuDB from '@/data/shopMenu.db';
import { fetchCartDataAction } from '@/store/features/cart';
import ListDialogContent from './childComponents/dialogContent';
import ListCartDialogContent from './childComponents/cartDialogContent';
import ListFixedBar from './childComponents/fixedBar';

const ListView = memo(() => {
  const dispatch = useDispatch()

  const [shopData] = useState(shopListDB[0]) // 店家基本資料
  const [shopMenuData] = useState(shopMenuDB) // 店家的菜單資料
  const [openDialog, setOpenDialog] = useState(false) // 彈出視窗開關
  const [cartOpenDialog, setCartOpenDialog] = useState(false) // 購物車彈出視窗開關
  const [activeDialog, setActiveDialog] = useState(0) // active 所選的餐點id
  const [modeDialog, setModeDialog] = useState('create') // 產品視窗 模式
  const { cartData } = useSelector((state) => ({
    cartData: state.cart.data // 購物車資料
  }))

  useEffect(() => {
    // 獲取非同步cart資料
    dispatch(fetchCartDataAction())
  },[])

  const handleOpenDialog = (id) => {
    setModeDialog('create')
    setActiveDialog(id)
    setOpenDialog(true)
  }

  const handleCloseDialog = (id) => {
    setOpenDialog(false)
  }

  const handleOpenCartDialog = () => {
    setCartOpenDialog(true)
  }

  const handleCloseCartDialog = () => {
    setCartOpenDialog(false)
  }

  const handleClickEditBtn = (item) => {
    setActiveDialog(item.id)
    setCartOpenDialog(false)
    setModeDialog('update')
    setOpenDialog(true)
  }
  
  return (
    <div className="">
      <BaseTop {...shopData}/>

      {/* 購物車沒商品時不顯示 */}
      { cartData.length > 0 && <ListFixedBar handleClick={ () => handleOpenCartDialog() }/>}

      <div className='container py-5'>
        <ListItemGroup 
          data={shopMenuData} 
          title={'您專屬的推薦商品'}
          handleClick={ id => handleOpenDialog(id) }
        />
        <ListItemGroup 
          data={shopMenuData.slice(0,2)} 
          title={'優惠餐'}
          handleClick={ id => handleOpenDialog(id) }
        />
        <ListItemGroup
          data={shopMenuData.slice(0,4)} 
          title={'新登場 New'}
          handleClick={ id => handleOpenDialog(id) }
        />
        <ListItemGroup
          data={shopMenuData.slice(0,5)} 
          title={'單品'}
          handleClick={ id => handleOpenDialog(id) }
        />
      </div>

      <BaseDialog show={openDialog} handleClose={ () => handleCloseDialog() }>
        <ListDialogContent 
          {...shopMenuData[activeDialog]}
          mode={modeDialog}
          handleClose={ () => handleCloseDialog() }
        />
      </BaseDialog>

      <BaseDialog show={cartOpenDialog} handleClose={ () => handleCloseCartDialog() }>
        <ListCartDialogContent 
          cartData={ cartData }
          handleClickEditBtn={ id => handleClickEditBtn(id) }
          handleClose={ () => handleCloseCartDialog() }
        />
      </BaseDialog>
    </div>
  )
})

export default ListView