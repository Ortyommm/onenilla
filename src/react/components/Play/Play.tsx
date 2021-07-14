import React from 'react'
import style from './Play.module.scss'
import Product from './Product'

export default () => {
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
              продавцу".
            </p>
          </div>

          <img
            src="/images/piglin.gif"
            alt="Пиглин"
            className="right-image piglin"
          />
        </div>
      </section>
      <section id="products">
        <h2>Товары</h2>
        <div className={style.products}>
          <Product
            imgSrc="/images/onenilla-logo.jpg"
            title="Проходка на сервер"
            price={45}
            btnText="Начать играть!"
            btnHref="https://vk.com/onenilla?w=product-195910351_4891471%2Fquery"
          />
          <Product
            imgSrc="/images/onenilla-logo.jpg"
            title="Саппорт сервера"
            price={165}
            btnText="Поддержать сервер!"
            btnHref="https://vk.com/onenilla?w=product-195910351_5623553%2Fquery"
          />
          <Product
            imgSrc="/images/onenilla-logo.jpg"
            title="Проходка на сервер"
            price={35}
            btnText="Поддержать сервер!"
            btnHref="https://vk.com/onenilla?w=product-195910351_5601028%2Fquery"
          />
        </div>
      </section>
    </>
  )
}
