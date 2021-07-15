import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import style from './Header.module.scss'
import Menu from './Menu'

export default () => {
  const mobileMenuRef = useRef() as MutableRefObject<HTMLDivElement>
  const IconRef = useRef() as MutableRefObject<HTMLImageElement>
  const headerRef = useRef() as MutableRefObject<HTMLElement>
  const headerWrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  function stickyNav(entries: any) {
    if (window.screen.availWidth < 600) {
      headerRef.current.classList.add(style.sticky)
      mobileMenuRef.current.classList.add(style.sticky)
      return
    }
    const [entry] = entries
    if (!entry.isIntersecting) {
      headerRef.current.classList.add(style.sticky)
      mobileMenuRef.current.classList.add(style.sticky)
    } else {
      headerRef.current.classList.remove(style.sticky)
    }
  }

  useEffect(() => {
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      // rootMargin: '-250px',
    })
    headerObserver.observe(document.querySelector('#about') as HTMLDivElement)
  })

  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    function close() {
      if (!isClicked) return
      setIsClicked(false)
    }
    document.body.addEventListener('click', close)
    window.addEventListener('scroll', close)
    return () => {
      document.body.removeEventListener('click', close)
      window.removeEventListener('scroll', close)
    }
  })

  return (
    <>
      <div className={`${style.header__wrapper}`} ref={headerWrapperRef}>
        <header className={`${style.header}`} ref={headerRef}>
          <div className="container">
            <nav className={style.desktop_nav}>
              <Menu />
            </nav>
            <div className={style.mobile_nav}>
              <div>
                <img
                  src="/images/icons/menu-icon.svg"
                  onClick={() => setIsClicked(!isClicked)}
                  ref={IconRef}
                  className={`${style.icon__wrapper} ${
                    isClicked ? style.active : ''
                  }`}
                />
              </div>
            </div>
          </div>
        </header>
      </div>
      <div
        className={`${style.mobile_menu} ${
          isClicked ? style.active : 'hidden'
        }`}
        ref={mobileMenuRef}
      >
        <Menu />
      </div>
    </>
  )
}
