import style from '../Header/Header.module.scss'
import { Icon } from '@iconify/react'
import infosignIcon from '@iconify/icons-whh/infosign'
import skypeonlineIcon from '@iconify/icons-whh/skypeonline'
import gameboyIcon from '@iconify/icons-whh/gameboy'
import lawIcon from '@iconify/icons-whh/law'
import React from 'react'

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
      <div className={style.menu_item}>
        <a href="" className={style.nav_link}>
          <Icon icon={infosignIcon} />
          <span>О сервере</span>
        </a>
      </div>{' '}
      <div className={style.menu_item}>
        <a href="" className={style.nav_link}>
          <Icon icon={skypeonlineIcon} />
          <span>Состояние сервера</span>
        </a>
      </div>{' '}
      <div className={style.menu_item}>
        <a href="" className={style.nav_link}>
          <Icon icon={gameboyIcon} />
          <span>Играть!</span>
        </a>
      </div>
      <div className={style.menu_item}>
        <a href="" className={style.nav_link}>
          <Icon icon={lawIcon} />
          <span>Жалоба на игрока</span>
        </a>
      </div>
    </div>
  )
}

export default Menu
