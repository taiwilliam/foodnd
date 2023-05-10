import React, { memo } from 'react'

const BaseSearchBar = memo(() => {
  return (
    <div className='cz_searchBar'>
      <div className="cz_searchBar__left">
        <input placeholder='尋找想吃的美食或飲料' className="cz_searchBar__left__input" type="text" />
      </div>
      <div className="cz_searchBar__right">
        <button className='cz_searchBar__right__btn'>
          <span className='material-icons'>search</span>
        </button>
      </div>
    </div>
  )
})

export default BaseSearchBar