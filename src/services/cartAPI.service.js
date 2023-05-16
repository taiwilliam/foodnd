import { getLocalStorage, setToLocalStorage } from "./localStorage.service"

export const getCart = () => {
  return new Promise((resolve, reject) => {
    // 模擬異步請求 如ajax
    setTimeout(() => {
      if(true){
          var data = getLocalStorage('cart')
          resolve(data)
      }else{
          var errMessage = 'token錯誤，或已經過期'
          reject(errMessage)
      }
    }, 1000)
  })
}

export const addCart = (value) => {
  return new Promise((resolve, reject) => {

    const res = getLocalStorage('cart')
    const data = [] // 需存入一個陣列
    
    // 購物車無資料時 直接存入
    if (res.length === 0) {
      data.push(value)
      setToLocalStorage('cart',data)
      return data
    
    }else{ // 購物車有資料時 要檢查重複餐點
      let repeat = false
    
      // 檢查重複
      res.forEach((item) => {
        // 有重複則存入新資料
        if( item.id === value.id ) {
          repeat = true
          data.push(value)
        }else{ // 無重複存入原始資料
          data.push(item)
        }
      })
      
      // 若都無重複 加入新一筆資料
      if(!repeat) data.push(value)
    
      // 模擬異步請求 如ajax
      setTimeout(() => {
        setToLocalStorage('cart',data)
        return resolve(data)
      },1000)
    }
  })
}

export const removeCart = (id) => {
  
  return new Promise((resolve, reject) => {

    const res = getLocalStorage('cart')
    let data = []

    data = res.filter((item) => {
      return item.id !== id
    })

    setTimeout(() => {
      setToLocalStorage('cart',data)
      
      resolve(data)
    },1000)
  })
}