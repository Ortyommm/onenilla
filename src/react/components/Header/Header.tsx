import React, { useRef } from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import menuIcon from '@iconify/icons-whh/menu'

import style from './Header.module.scss'
import Menu from '../Status/Menu'

export default () => {
  const mobileMenu = useRef()
  function onMenuClick(e: React.MouseEvent) {
    const isVisible = !(
      mobileMenu.current! as HTMLDivElement
    ).classList.contains('hidden')
    console.log(
      'содержит hidden',
      (mobileMenu.current! as HTMLDivElement).classList.contains('hidden')
    )
    if (isVisible) {
      ;(mobileMenu.current! as HTMLDivElement).classList.add(
        `${style.animate_up}`
      )
      ;(mobileMenu.current! as HTMLDivElement).addEventListener(
        'animationend',
        () => {
          ;(mobileMenu.current! as HTMLDivElement).classList.add(`hidden`)
          ;(mobileMenu.current! as HTMLDivElement).classList.remove(
            `${style.animate_up}`
          )
        }
      )
    } else {
      ;(mobileMenu.current! as HTMLDivElement).classList.remove(`hidden`)
      ;(mobileMenu.current! as HTMLDivElement).classList.add(
        `${style.animate_fall}`
      )
      ;(mobileMenu.current! as HTMLDivElement).addEventListener(
        'animationend',
        () => {
          ;(mobileMenu.current! as HTMLDivElement).classList.remove(`hidden`)
          ;(mobileMenu.current! as HTMLDivElement).classList.remove(
            `${style.animate_fall}`
          )
        }
      )
    }
  }

  return (
    <>
      <header className={style.header}>
        <div className="container">
          <nav className={style.desktop_nav}>
            <Menu />
          </nav>
          <div className={style.mobile_nav} onClick={onMenuClick}>
            <Icon
              icon={menuIcon}
              style={{ color: '#ffffff', fontSize: '30px' }}
            />
          </div>
        </div>
      </header>
      <div className={style.mobile_menu}>
        <Menu mobileMenu={mobileMenu} />
      </div>
    </>
  )
}
