import React, { memo } from 'react'
import propTypes from 'prop-types'

const BaseImage = memo((props) => {
  const { src, classNames, heightRatio } = props
  const imageClassNames = ['cz_wrap']
  // 設定額外class屬性
  imageClassNames.push(...classNames)

  return (
    <div className={ imageClassNames.join(' ') } style={{paddingTop: `${heightRatio}%`}}>
        <img className='cz_wrap__img' src={ src } alt="" />
    </div>
  )
})

BaseImage.propTypes = {
  src: propTypes.string,
  classNames: propTypes.array,
  heightRatio: propTypes.number
}

BaseImage.defaultProps = {
  classNames: [],
  heightRatio: 100
}

export default BaseImage