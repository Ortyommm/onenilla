import React, { LegacyRef, useRef } from 'react'
import style from './Play.module.scss'

export default ({
  title,
  price,
  btnText,
  imgSrc,
  btnHref,
}: {
  title: string
  price: number
  btnText: string
  imgSrc: string
  btnHref: string
}) => {
  function rotate(e: React.MouseEvent) {
    const rect = e.currentTarget.getBoundingClientRect()
    const halfHeight = e.currentTarget.clientHeight / 2
    const halfWidth = e.currentTarget.clientWidth / 2
    const offsetX = (-e.nativeEvent.clientX + halfWidth + rect.left) / 20
    const offsetY = (-e.nativeEvent.clientY + halfHeight + rect.top) / 20
    productCard.current.style.transform = `rotateY(${offsetX}deg) rotateX(${offsetY}deg)`
  }

  function resetRotation(e: React.MouseEvent) {
    productCard.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }

  const productCard = useRef() as React.MutableRefObject<HTMLDivElement>

  return (
    <div
      className={style.product_card__wrapper}
      onMouseMove={rotate}
      onMouseOut={resetRotation}
    >
      <div className={style.product_card} ref={productCard}>
        <div className={style.product_image__wrapper}>
          <img src={imgSrc} alt="товар" className={style.product_image} />
        </div>
        <div className={style.product_info__wrapper}>
          <span className={style.product_title}>{title}</span>
          <span className={style.product_price}>{price} р</span>
        </div>
        <div className={style.product_btn__wrapper}>
          <a href={btnHref} target="_blank">
            <button className={style.product_btn}>{btnText}</button>
          </a>
        </div>
      </div>
    </div>
  )
}
