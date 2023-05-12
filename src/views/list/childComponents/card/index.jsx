import React, { memo } from 'react'
// import propTypes from 'prop-types'
import BaseIcon from '@/components/icons'

const BaseListCard = memo((props) => {
  const {name, cover, price, classNames, handleClick} = props
  const cardClassNames = ['cz_list_card']
  // 設定額外class屬性
  cardClassNames.push(...classNames)

  return (
    <div className={ cardClassNames.join(' ') } onClick={ e => handleClick(e) }>
        <div className="cz_list_card__head">
          <div className='cz_list_card__head__wrap'>
            <img className='cz_list_card__head__wrap__img' src={ cover } alt="" />
          </div>

          <button className="cz_list_card__head__btn">
            <BaseIcon icon='add' type='outlined' classNames={['cz_list_card__head__btn__icon']}/>
          </button>
        </div>
        <div className="cz_list_card__body">
          <p className='text-truncate-2 mb-2'>{ name }</p>
          <strong className='fs-md fw-bold'>$ { price }</strong>
        </div>
    </div>
  )
})

BaseListCard.propTypes = {
}

BaseListCard.defaultProps = {
  handleClick: () => {},
  classNames: []
}

export default BaseListCard