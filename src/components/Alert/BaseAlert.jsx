import { closeAlertAction, initAlertAction } from '@/store/features/global.store'
import React, { memo, useEffect, Fragment, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { createPortal } from 'react-dom';

const modalPlaceholderElement = document.getElementById("modal-placeholder");

const BaseAlert = memo(() => {
  const { alert } = useSelector(state => ({
    alert: state.global.alert
  }), shallowEqual)
  const dispatch = useDispatch()
  const ref = useRef(null)

  useEffect(() => {
    
    // 當alert被設定為開啟時
    if(alert.show){
      delayCloseAlert()
    }

  },[alert])

  const initAlert = () => {
    setTimeout(() => {
      dispatch(initAlertAction())
    },100)
  }

  const delayCloseAlert = () => {
    setTimeout(() => {
      dispatch(closeAlertAction())

      // 刪除後要重製
      initAlert()
    },alert.delay)
  }

  const closeAlert = () => {
    dispatch(closeAlertAction())
  }

  const renderAlert = () => {
    return (
      <div className={`cz_alert${ alert.show ? ' cz_alert--active' : ''}${ alert.classNames.join(' ') }`} ref={ref}>
        <div className="cz_alert__main">
          <div className="cz_alert__main__left">
            { alert.value }
          </div>
          <div className="cz_alert__main__right">
            <button className="cz_alert__main__right__btn" onClick={ closeAlert }>
              <span className='material-icons'>close</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      {
        createPortal(
          renderAlert(alert),
          modalPlaceholderElement
        )
      }
    </Fragment>
  )
})

export default BaseAlert