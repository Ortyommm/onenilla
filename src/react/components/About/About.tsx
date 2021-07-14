import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper/core'

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'

import style from './About.module.scss'

export default () => {
  return (
    <>
      <section id="about">
        <div className="info">
          <div className="text-container">
            <h1 className={style.h1}>ONENILLA</h1>
            <p>
              Мы - приватный Minecraft сервер. Наш проект - это мирное
              выживание, развитие, торговля и творчество в основном мире и
              бесконечная война на втором дополнительном PVP мире. У нас нет
              китов, приватов, привилегий, влияющих на игровой процесс, и прочих
              аспектов обычного сервера Minecraft. На нашем сервере есть
              уникальные механики и новые зачарования, которые разнообразят ваш
              геймплей, более 700 новых достижений, уникальные события и ивенты.
              Мы - <strong>OneNilla</strong>.
            </p>
          </div>

          {window.screen.availWidth > 850 ? (
            <img
              src="/images/bee.gif"
              alt="Пчела"
              className="right-image bee"
            />
          ) : null}
        </div>

        <Swiper
          // spaceBetween={50}

          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={400}
          height={400}
        >
          <SwiperSlide>
            <img src="/images/slide1.jpg" alt="Приватный сервер" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide2.jpg" alt="Приватный сервер" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/slide3.jpg" alt="Добро пожаловать" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
