import React from 'react'
import classNames from 'classnames/bind'
import styles from './header.module.scss'

const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}></div>
    </div>
  )
}

export default Header
