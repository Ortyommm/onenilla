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
    <section id="about">
      <div className={style.info}>
        <div className="text-container">
          <h1 className={style.h1}>ONENILLA</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus in
            fames volutpat interdum aliquet. Magna sed eu diam nulla diam mattis
            aenean mauris, vel. Dui, pellentesque pharetra, pulvinar eu, quam
            eros hendrerit. Tellus odio fermentum consequat elit vestibulum.
            Aliquam sed et vel ut ac nec in tempus. Vestibulum consequat arcu
            tortor in amet, egestas sem vitae. Sed ac non, molestie.
          </p>
        </div>

        <img src="/images/bee.gif" alt="Пчела" className="right-image" />
      </div>

      <div className="swiper-out">
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
      </div>
    </section>
  )
}
