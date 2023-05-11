import React, { memo } from 'react'
import propTypes from 'prop-types'
import BaseIcon from '@/components/icons'

const BaseHomeCard = memo((props) => {
  const {name, cover, price, score, classNames, handleClick} = props
  const cardClassNames = ['cz_card']
  // 設定額外class屬性
  cardClassNames.push(...classNames)

  return (
    <div className={ cardClassNames.join(' ') } onClick={ e => handleClick(e) }>
        <div className="cz_card__head">
          <div className='cz_wrap'>
            <img className='cz_wrap__img' src={ cover } alt="" />
          </div>

          <button className="cz_card__head__btn" onClick={ e => e.stopPropagation()}>
            <BaseIcon icon='favorite' type='outlined' classNames={['cz_card__head__btn__icon']}/>
          </button>
        </div>
        <div className="cz_card__body">
          <div className="d-flex mx-n1 align-items-center">
            <div className="flex-grow-1 text-truncate px-1">
              <p className='text-truncate mb-0'>{ name }</p>
            </div>
            <div className="px-1">
              <button className="cz_card__body__icon">{ score }</button>
            </div>
          </div>
          <span className='fs-sm'>$ { price } TWD 外送服務費</span>
        </div>
    </div>
  )
})

BaseHomeCard.propTypes = {
	name: propTypes.string,
	cover: propTypes.string,
	price: propTypes.number,
	score: propTypes.number,
  classNames: propTypes.array,
  handleClick: propTypes.func
}

BaseHomeCard.defaultProps = {
  handleClick: () => {},
  classNames: []
}

export default BaseHomeCard