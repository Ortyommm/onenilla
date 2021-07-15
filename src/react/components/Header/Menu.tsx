import style from './Header.module.scss'

import React from 'react'
import LinkTo from './LinkTo'

const Menu = () => {
  return (
    <div className={style.links__wrapper}>
      <div className={style.links}>
        <LinkTo to="about" text="О сервере" />
        <LinkTo to="status" text="Состояние сервера" />
        <LinkTo to="play" text="Играть!" />
      </div>
      <div className={style.modals}>
        <LinkTo href="https://vk.com/onenilla" text="Мы в ВК" />
      </div>
    </div>
  )
}

export default Menu
