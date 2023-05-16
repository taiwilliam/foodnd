import React, { memo } from 'react'
import LogoUrl from '@/assets/images/logo/foodnd.svg'

const About = memo(() => {
  return (
    <div className='container py-5'>
      <div className="row justify-content-center">
        <div className="col-8 col-md-4">
          <img className='w-100' src={ LogoUrl } alt="" />
        </div>
        <div className="w-100 my-4"></div>
        <div className="col-12 col-md-8">
          <p className='mb-4'>在遙遠的一個小鎮，有一位名叫威廉（William）的年輕廚師，他對美食有著無比的熱情。他經營著一家小小的餐廳，每天都致力於為顧客提供美味的料理，並將他獨特的烹飪技巧融入每一道菜餚中。</p>
          <p className='mb-4'>然而，威廉始終感到有一個空白，他渴望能夠將他的烹飪藝術帶到更遠的地方，讓更多人品味到他的美食。於是，他決定開始一個嶄新的冒險。</p>
          <p className='mb-4'>他成立了一個名為 Foodnd 的品牌，這個名字代表著「Food and Discovery」（美食與探索）。Foodnd 的目標是將威廉的烹飪才華與各地美食文化結合起來，為食客們提供一個獨特的飲食體驗。</p>

          <p className='mb-4'>Foodnd 不僅僅是一個傳統的餐廳，它是一個打破界限的平台，將旅行與美食結合在一起。Foodnd 的團隊將威廉的烹飪技巧帶到世界各地，與當地的廚師們合作，發掘和創造出新的菜餚。這些菜餚融合了當地食材、烹調方法和文化特色，將不同地方的美食精髓帶到每個用餐者的餐桌上。</p>

          <p className='mb-4'>Foodnd 邀請食客們加入他們的美食探索旅程。無論是透過 Foodnd 的網站還是移動應用程式，食們可以瀏覽不客同地區的菜單，了解每道菜背後的故事和文化背景。他們可以預訂食物之旅，品嚐由當地廚師精心準備的菜餚，並親自參與烹飪過程，學習烹飪技巧和美食文化。</p>

          <p className='mb-4'>Foodnd 的使命是通過美食連結人們、打破文化隔閡，並啟發人們對不同地方</p>
        </div>
      </div>
    </div>
  )
})

export default About