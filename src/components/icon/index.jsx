import React, { memo } from 'react'
import PropTypes from "prop-types"
import { FILLED, OUTLINED, ROUND, SHARP } from '@/contants/iconTypeClassName.contants'

const BaseIcon = memo((props) => {
  const { type, icon, classNames } = props
  const iconClassNames = []

  // 樣式
  switch(type){
    case 'outlined':
      iconClassNames.push(OUTLINED)
      break
    case 'sharp':
      iconClassNames.push(SHARP)
      break
    case 'round':
      iconClassNames.push(ROUND)
      break
    default:
      iconClassNames.push(FILLED)
  }

  // 設定額外class屬性
  if(iconClassNames && iconClassNames.length > 0) iconClassNames.push(classNames)

  return (
    <span className={iconClassNames.join(' ')}>{ icon }</span>
  )
})

BaseIcon.propTypes = {
  icon: PropTypes.string.isRequired,
	type: PropTypes.string,
  classNames: PropTypes.array
}

export default BaseIcon