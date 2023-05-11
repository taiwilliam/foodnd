import React, { memo, useEffect, useState } from 'react'
import propTypes from 'prop-types'

const BaseDialog = memo((props) => {
  const { show, handleClose, classNames, children } = props
  const [dialogClassNames, setDialogClassNames] = useState(['cz_dialog',...classNames])

  useEffect(() => {
    let dialogClassNames_ = [...dialogClassNames]
    if(show){
      dialogClassNames_.push('d-block')
      setDialogClassNames([...dialogClassNames_])
    }else{
      setDialogClassNames(dialogClassNames_.filter(e => e !== 'd-block'))
    }
  },[show])

  return (
    <div className={ dialogClassNames.join(' ') }>
      <div className="cz_dialog__bg" onClick={ () => handleClose() }>
        <div className="cz_dialog__bg__main" onClick={ e => e.stopPropagation() }>
          <div className="cz_dialog__bg__main__header">
            <button className="cz_dialog__bg__main__header__btn" onClick={ () => handleClose() }>
              <span className='material-icons' onClick={() => {}}>close</span>
            </button>
          </div>
          <div className="cz_dialog__bg__main__body">
            { children }
          </div>
        </div>
      </div>
    </div>
  )
})

BaseDialog.propTypes = {
  show: propTypes.bool,
  classNames: propTypes.array
}

BaseDialog.defaultProps = {
  handleClick: () => {},
  classNames: [],
  show: false
}

export default BaseDialog