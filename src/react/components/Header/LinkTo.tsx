import style from './Header.module.scss'
import React from 'react'
import { Link } from 'react-scroll'

function setOpacity(e: React.MouseEvent, opacity: string) {
  ;(e.target as HTMLSpanElement)
    .closest(`.${style.links__wrapper}`)!
    .querySelectorAll('span')
    .forEach((el) => {
      if (el === e.target) return
      el.style.opacity = opacity
    })
}

export default ({
  text,
  to,
  href,
}: {
  text: string
  to?: string
  href?: string
}) => {
  return (
    <div className={style.menu_item}>
      {to ? (
        <Link
          to={to}
          className={style.nav_link}
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
        >
          <span
            className={style.nav_link_text}
            onMouseOver={(e) => setOpacity(e, '0.5')}
            onMouseOut={(e) => setOpacity(e, '1')}
          >
            {text}
          </span>
        </Link>
      ) : (
        <a href={href} className={style.nav_link} target="_blank">
          <span
            className={style.nav_link_text}
            onMouseOver={(e) => setOpacity(e, '0.5')}
            onMouseOut={(e) => setOpacity(e, '1')}
          >
            {text}
          </span>
        </a>
      )}
    </div>
  )
}
