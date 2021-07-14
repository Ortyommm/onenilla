import style from './Header.module.scss'

import React from 'react'
import LinkTo from './LinkTo'

interface mobileMenuProps {
  mobileMenu?: React.Ref<any>
  classEl?: string
}

const Menu = ({ mobileMenu, classEl }: mobileMenuProps) => {
  return (
    <div
      ref={mobileMenu || null}
      className={mobileMenu && classEl ? classEl : undefined}
    >
      <div className={style.links}>
        <LinkTo to="about" text="О сервере" />
        <LinkTo to="status" text="Состояние сервера" />
        <LinkTo to="play" text="Играть!" />
      </div>
      <div className={style.modals}>
        <LinkTo to="status" text="Жалоба на игрока" />
      </div>
    </div>
  )
}

export default Menu
