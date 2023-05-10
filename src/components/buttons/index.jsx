import React, { memo } from 'react'
import PropTypes from "prop-types"

const BaseButton = memo((props) => {
  const { value, icon, rounded, classNames } = props
  const btnClassNames = ['cz_button']
  const iconClassNames = ['material-icons cz_button__icon']
  
  // 設定圓角樣式
  if(rounded === 'pill') btnClassNames.push('rounded-pill')
  if(rounded === 'circle') btnClassNames.push('rounded-circle')
  // 設定額外class屬性
  btnClassNames.push(...classNames)

  // 設定無內容時 icon 不需margin
  if(!value) iconClassNames.push('me-0')

  return (
    <button
      className={ btnClassNames.join(' ') }>
      { icon && <span className={ iconClassNames.join(' ') }>{ icon }</span> }
      { value }
    </button>
  )
})

BaseButton.propTypes = {
	value: PropTypes.string,
	icon: PropTypes.string,
	rounded: PropTypes.string,
  classNames: PropTypes.array
}

BaseButton.defaultProps = {
  classNames: []
}

export default BaseButton