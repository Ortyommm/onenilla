import React, { MutableRefObject, useRef } from 'react'
import style from './Play.module.scss'
import Product from './Product'
import copy from 'copy-to-clipboard'

export default () => {
  const copyMessageRef = useRef() as MutableRefObject<HTMLDivElement>
  function onCopyClick(e: React.MouseEvent) {
    copy('onenilla.joinserver.xyz')
    copyMessageRef.current.style.display = 'block'
    setTimeout(() => {
      copyMessageRef.current.style.display = 'none'
    }, 1000)
  }
  return (
    <>
      <section id="play">
        <div className="info">
          <div className="text-container">
            <h2 className={style.h1}>Как начать играть?</h2>
            <p>
              Для того, чтобы начать играть, необходимо приобрести “проходку” -
              занесение вас в белый список сервера, благодаря чему у вас
              открывается к нему доступ. Приобрести её можно, перейдя в раздел
              товары ниже. Вы будете переадресованы в VK, где вам предоставит
              проходку администрация сервера. Для этого нажмите "Написать
              продавцу". По вашему желанию вас могут добавить в приватную беседу
              игроков. Вы также можете сами зайти в{' '}
              <a href="https://discord.gg/mq4ayYUgCS" target="_blank">
                наш Discord.
              </a>{' '}
              IP:{' '}
              <div className={style.copy_to_clipboard__wrapper}>
                <strong
                  onClick={onCopyClick}
                  className={style.copy_to_clipboard}
                >
                  onenilla.joinserver.xyz
                </strong>
                <div className={style.copy_message} ref={copyMessageRef}>
                  Вы скопировали адрес!
                </div>
              </div>
              .
            </p>
          </div>
          {window.screen.availWidth > 850 ? (
            <img
              src="/images/pics/piglin.gif"
              alt="Пиглин"
              className="right-image piglin"
            />
          ) : null}
        </div>
      </section>
      <section id="products">
        <div className="text-container">
          <h2>Товары</h2>
        </div>
        <div className={style.products}>
          <Product
            imgSrc="/images/pics/onenilla-logo.jpg"
            title="Проходка на сервер"
            price={45}
            btnText="Начать играть!"
            btnHref="https://vk.com/onenilla?w=product-195910351_4891471%2Fquery"
          />
          <Product
            imgSrc="/images/pics/onenilla-logo.jpg"
            title="Саппорт сервера"
            price={165}
            btnText="Поддержать сервер!"
            btnHref="https://vk.com/onenilla?w=product-195910351_5623553%2Fquery"
          />
          <Product
            imgSrc="/images/pics/onenilla-logo.jpg"
            title="Цветной никнейм"
            price={35}
            btnText="Поддержать сервер!"
            btnHref="https://vk.com/onenilla?w=product-195910351_5601028%2Fquery"
          />
        </div>
      </section>
    </>
  )
}
