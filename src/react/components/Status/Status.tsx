import React, { LegacyRef, useRef } from 'react'
import { Icon, InlineIcon } from '@iconify/react'
import outlineExpandMore from '@iconify/icons-ic/outline-expand-more'

import style from './Status.module.scss'
import Player from './Player'

interface PlayerObj {
  nickname: string
}

interface Players {
  players: PlayerObj[]
}

export default ({ players }: Players) => {
  const playersArr = players.map((p) => (
    <Player nickname={p.nickname} key={p.nickname} />
  ))

  const playerNames = useRef() as React.MutableRefObject<HTMLDivElement>
  function onExpandClick(e: React.MouseEvent) {
    // ;(playerNames.current! as HTMLDivElement).classList.toggle('hidden')
    Array.from((playerNames.current! as HTMLDivElement).children).forEach(
      (name: Element) => {
        name.classList.toggle(style.active)
      }
    )
  }

  return (
    <section id="status">
      <h2>Состояние сервера</h2>
      <div className={style.players}>
        <div className={style.players_left}>
          <img
            src="/images/steve-head.jpg"
            alt="игрок"
            className={style.player_head}
          />
          <span className={style.players_count}>2/100</span>
          <div className={style.expand_btn} onClick={onExpandClick}>
            <Icon icon={outlineExpandMore} />
          </div>
        </div>
        <div className={style.players_right}>
          online
          <div className={`${style.circle} ${style.online}`}></div>
        </div>
      </div>
      <div
        className={`${style.player_names}`}
        ref={playerNames}
        style={{ overflow: 'hidden', height: 0 }}
      >
        {playersArr}
      </div>
    </section>
  )
}
