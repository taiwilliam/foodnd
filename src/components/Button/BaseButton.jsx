import React, { Fragment, memo } from 'react'
import propTypes from "prop-types"

const BaseButton = memo((props) => {
  const { value, icon, rounded, classNames, handleClick, children } = props
  const btnClassNames = ['cz_button']
  const iconClassNames = ['material-icons cz_button__icon']
  
  // 設定圓角樣式
  if(rounded === 'pill') btnClassNames.push('rounded-pill')
  if(rounded === 'circle') btnClassNames.push('rounded-circle')
  // 設定額外class屬性
  btnClassNames.push(...classNames)

  // 設定無內容時 icon 不需margin
  if(!value) iconClassNames.push('me-0')

  const renderChildren = () => {
    return children
  }

  const renderDefault = () => {
    return (
      <Fragment>
        { icon && <span className={ iconClassNames.join(' ') }>{ icon }</span> }
        { value }
      </Fragment>
    )
  }

  return (
    <button
      // 註解
      className={ btnClassNames.join(' ') }
      onClick={ e => handleClick(e) }
    >
      { 
        children ? renderChildren() : renderDefault()
      }
    </button>
  )
})

BaseButton.propTypes = {
	value: propTypes.string,
	icon: propTypes.string,
	rounded: propTypes.string,
  classNames: propTypes.array,
  handleClick: propTypes.func
}

BaseButton.defaultProps = {
  handleClick: () => {},
  classNames: []
}

export default BaseButton