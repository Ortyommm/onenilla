import React, { useRef, useState } from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import menuIcon from '@iconify/icons-whh/menu'

import style from './Header.module.scss'
import Menu from '../Status/Menu'

function animateFall(el: HTMLElement) {
  setInterval((el) => {
    el.style.transform.translateY = parseInt(getComputedStyle(el).transform) - 5
  }, 100)
}

export default () => {
  const mobileMenu = useRef()
  const [isVisible, setIsVisible] = useState(false)
  const [className, setClassName] = useState('hidden')
  const [isClicked, setIsClicked] = useState(false)

  function onMenuClick(e: React.MouseEvent | Event) {
    setIsClicked(true)
    if (isVisible) {
      setClassName(style.animate_up)
      ;(mobileMenu.current! as HTMLDivElement).addEventListener(
        'animationend',
        () => {
          setClassName('hidden')
          setIsClicked(false)
        }
      )
      setIsVisible(false)
    } else {
      setClassName(style.animate_fall)
      ;(mobileMenu.current! as HTMLDivElement).addEventListener(
        'animationend',
        () => {
          setClassName('')
          setIsClicked(false)
        }
      )
      setIsVisible(true)
    }
  }

  return (
    <>
      <header className={style.header}>
        <div className="container">
          <nav className={style.desktop_nav}>
            <Menu />
          </nav>
          <div
            className={style.mobile_nav}
            onClick={isClicked ? undefined : onMenuClick}
          >
            <Icon
              icon={menuIcon}
              style={{ color: '#ffffff', fontSize: '30px' }}
            />
          </div>
        </div>
      </header>
      <div className={style.mobile_menu}>
        <Menu mobileMenu={mobileMenu} classEl={className} />
      </div>
    </>
  )
}
