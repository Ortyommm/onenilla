import style from './Status.module.scss'
import React from 'react'

export default ({ nickname }: { nickname: string }) => {
  return (
    <div className={`${style.player} `}>
      <div className={style.players_left}>
        <img
          src="/images/pics/steve-head.jpg"
          alt="игрок"
          className={style.player_head}
        />
        <span className={style.player_name}>{nickname}</span>
      </div>
    </div>
  )
}
