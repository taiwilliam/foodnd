import { useEffect, useState } from "react"

function useLocalStorage (key) {
    // 從1.locostorage中獲取數據，並且創建state
    const [data, setData] = useState(() => {
        const strData = localStorage.getItem(key)
        // 若沒有內容 返回空字串
        if(!strData) return ""
        return JSON.parse(strData)
    })

    // 2.監聽data改變，一改變舊儲存最新值
    useEffect(() => {
        const strData = JSON.stringify(data)
        localStorage.setItem(key, strData)
    }, [data])

    // 3. 返回data、setData，讓元件引用
    return [data, setData]
}

export default useLocalStorage