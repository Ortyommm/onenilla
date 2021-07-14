import style from './Header.module.scss'
import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

export default ({ text, to }: { text: string; to: string }) => {
  console.log(to)
  return (
    <div className={style.menu_item}>
      <Link
        to={to}
        className={style.nav_link}
        smooth={true}
        duration={500}
        spy={true}
      >
        <span>{text}</span>
      </Link>
    </div>
  )
}
