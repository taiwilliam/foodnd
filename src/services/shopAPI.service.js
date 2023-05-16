// import { getLocalStorage, setToLocalStorage } from "./localStorage"
import shopsData from '@/data/shopList.data'
import shopMenuArr from '@/data/shopMenu.data'
import shopListArr from '@/data/shopList.data'

export const getShops = () => {
  return new Promise((resolve, reject) => {
    // 模擬異步請求 如ajax
    setTimeout(() => {
      // 
      if(true){
          var data = shopsData
          resolve(data)
      }else{
          var errMessage = 'token錯誤，或已經過期'
          reject(errMessage)
      }
    }, 1000)
  })
}

export const getShop = (id) => {
  return new Promise((resolve, reject) => {
    // 模擬異步請求 如ajax
    setTimeout(() => {
      // 
      if(true){
          var data = shopListArr[id]
          resolve(data)
      }else{
          var errMessage = 'token錯誤，或已經過期'
          reject(errMessage)
      }
    }, 1000)
  })
}

export const getShopMenu = (id) => {
  return new Promise((resolve, reject) => {
    // 模擬異步請求 如ajax
    setTimeout(() => {
      // 
      if(true){
          var data = shopMenuArr
          resolve(data)
      }else{
          var errMessage = 'token錯誤，或已經過期'
          reject(errMessage)
      }
    }, 1000)
  })
}
