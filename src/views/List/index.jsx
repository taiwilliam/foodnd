import React, { memo, useState } from 'react'

import BaseTop from '@/views/list/childComponents/top';
import ListItemGroup from '@/views/list/childComponents/itemGroup';
import BaseDialog from '@/components/dialogs/base';
import shopListDB from '@/data/shopList.db';
import shopMenuDB from '@/data/shopMenu.db';

const ListView = memo(() => {
  const [shopData] = useState(shopListDB[0])
  const [shopMenuData] = useState(shopMenuDB)
  const [openDialog, setOpenDialog] = useState(false)

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }
  
  return (
    <div className="">
      <BaseTop {...shopData}/>

      <button onClick={() => setOpenDialog(!openDialog)}>測試打開視窗</button>

      <div className='container py-5'>
        <ListItemGroup 
          data={shopMenuData} 
          title={'您專屬的推薦商品'}
        />
        <ListItemGroup 
          data={shopMenuData.slice(0,2)} 
          title={'優惠餐'}
        />
        <ListItemGroup
          data={shopMenuData.slice(0,4)} 
          title={'新登場 New'}
        />
        <ListItemGroup
          data={shopMenuData.slice(0,5)} 
          title={'單品'}
        />
      </div>

      <BaseDialog show={openDialog} handleClose={ () => handleCloseDialog() }>
        <h1>內容</h1>
      </BaseDialog>
    </div>
  )
})

export default ListView