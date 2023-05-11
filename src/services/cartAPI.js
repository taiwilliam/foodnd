import { getLocalStorage, setToLocalStorage } from "./localStorage"

export const getCart = () => {
  return getLocalStorage('cart')
}

export const addCart = (value) => {
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

    setToLocalStorage('cart',data)
    return data
  }
}

export const removeCart = (id) => {
  const res = getLocalStorage('cart')
  let data = []

  data = res.filter((item) => {
    return item.id !== id
  })

  setToLocalStorage('cart',data)
  return data
}