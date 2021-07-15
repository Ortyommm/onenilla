import React, { useEffect, useRef } from 'react'

import style from './Status.module.scss'
import Player from './Player'
import axios from 'axios'
import { connect } from 'react-redux'

import {
  ServerDataState,
  DispatchFunctions,
  setDataAC,
} from '../../redux/fetchServerDataReducer'

const Status = ({
  players,
  online,
  server,
  setDataAC,
}: ServerDataState & DispatchFunctions) => {
  let playersArr
  if (players) {
    playersArr = players.sample.map((p) => (
      <Player nickname={p.name} key={p.name} />
    ))
  }

  const playerNames = useRef() as React.MutableRefObject<HTMLDivElement>
  const expandRef = useRef() as React.MutableRefObject<HTMLImageElement>
  let clicked = false
  function onExpandClick(e: React.MouseEvent) {
    if (!online) return
    ;(playerNames.current! as HTMLDivElement).classList.toggle(style.active)

    expandRef.current.style.transform = clicked
      ? 'rotate(0deg)'
      : 'rotate(-90deg)'
    clicked = !clicked
  }

  useEffect(() => {
    axios
      .get('https://mcapi.us/server/status?ip=onenilla.joinserver.xyz')
      .then((result) => setDataAC(result))
  }, [])

  function createMessage() {
    function playersCountMessage() {
      const lastNumber = players.now.toString().slice(-1)
      switch (lastNumber) {
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          return `${players.now} игроков`
        case '1':
          return `${players.now} игрок`
        case '2':
        case '3':
        case '4':
          return `${players.now} игрока`
      }
    }
    const serverInfo = server.name.split(' ')
    const version = serverInfo[serverInfo.length - 1]
    if (online)
      return (
        <span>
          Сервер сейчас работает, на нём играет {playersCountMessage()}. Версия:{' '}
          <strong>{version}</strong>
        </span>
      )
    else return `Сервер сейчас выключен.`
  }

  return (
    <>
      <section id="status">
        <div className="text-container">
          <h2>Состояние сервера</h2>
          {createMessage()}
        </div>
        <div className={style.players}>
          <div className={style.players_left}>
            <img
              src="/images/pics/steve-head.jpg"
              alt="игрок"
              className={style.player_head}
            />
            <span className={style.players_count}>
              {players.now}/{players.max}
            </span>

            <img
              src="/images/icons/expand-icon.svg"
              className={style.expand_btn}
              onClick={onExpandClick}
              ref={expandRef}
            />
          </div>
          <div className={style.players_right} style={{ letterSpacing: '1px' }}>
            {online ? 'online' : 'offline'}
            <div
              className={`${style.circle} ${online ? style.online : ''}`}
            ></div>
          </div>
        </div>
        <div className={`${style.player_names}`} ref={playerNames}>
          {playersArr}
        </div>
      </section>
    </>
  )
}

const mapStateToProps = (state: { serverData: ServerDataState }) => ({
  players: state.serverData.players,
  online: state.serverData.online,
  server: state.serverData.server,
})

export default connect(mapStateToProps, { setDataAC })(Status)
