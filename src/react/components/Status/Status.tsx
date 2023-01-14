import React, { useEffect, useRef, useState } from 'react'

import style from './Status.module.scss'
import Player from './Player'
import axios from 'axios'
import { connect } from 'react-redux'

import { ServerDataState, DispatchFunctions, setDataAC, toggleIsFetchingAC } from '../../redux/fetchServerDataReducer'
import useMediaQuery from '../../hooks/useMediaQuery'

const Status = ({
  players,
  online,
  server,
  isFetching,
  setDataAC,
  toggleIsFetchingAC,
}: ServerDataState & DispatchFunctions) => {
  let playersArr: JSX.Element[] = []
  if (players) {
    playersArr = players.sample.map((p) => <Player nickname={p.name} key={p.name + p.id} />)
  }

  const playersContainerRef = useRef<HTMLDivElement>(null)
  const [playersContainerAnimationEnd, setPlayersContainerAnimationEnd] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const playerItemHeight = useMediaQuery('(max-width: 650px)') ? 70 : 110
  const playersContainerHeight = expanded
    ? playerItemHeight * players.now > 1000
      ? 1000
      : playerItemHeight * players.now
    : 0

  function onExpandClick(e: React.MouseEvent) {
    if (!online || players.now === 0) return
    setExpanded(!expanded)
  }

  useEffect(() => {
    toggleIsFetchingAC({ isFetching: true })
    axios.get('https://mcapi.us/server/status?ip=onenilla.joinserver.ru').then((result) => {
      setDataAC(result)
      toggleIsFetchingAC({ isFetching: false })
    })

    if (playersContainerRef.current) {
      playersContainerRef.current.ontransitionstart = () => setPlayersContainerAnimationEnd(false)
      playersContainerRef.current.ontransitionend = () => setPlayersContainerAnimationEnd(true)
    }
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
    if (server.name) {
      const serverInfo = server.name.split(' ')
      const version = serverInfo[serverInfo.length - 1]
      if (isFetching) return 'Данные уточняются...'
      if (online)
        return (
          <span>
            Сервер сейчас работает, на нём играет {playersCountMessage()}. Версия: <strong>{version}</strong>
          </span>
        )
    }

    return `Сервер сейчас выключен.`
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
            <img src="/images/pics/steve-head.jpg" alt="игрок" className={style.player_head} />
            <span className={style.players_count}>
              {players.now}/{players.max}
            </span>

            <img
              src="/images/icons/expand-icon.svg"
              className={style.expand_btn}
              onClick={onExpandClick}
              style={{
                transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
              }}
            />
          </div>
          <div className={style.players_right} style={{ letterSpacing: '1px' }}>
            {isFetching ? 'Загрузка...' : online ? 'online' : 'offline'}
            <div className={`${style.circle} ${online ? style.online : ''}`}></div>
          </div>
        </div>
        <div
          className={`${style.player_names} ${expanded && playersContainerAnimationEnd ? style.active : ''}`}
          style={{ height: playersContainerHeight }}
          ref={playersContainerRef}
        >
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
  isFetching: state.serverData.isFetching,
})

export default connect(mapStateToProps, { setDataAC, toggleIsFetchingAC })(Status)
