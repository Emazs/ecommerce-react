//import React from 'react'
import style from '../css/components/Description.module.css'
import { Counter } from './Counter.jsx'

export const Description = () => {

  return (
    <>
      <section className={style.information}>
        <p className={style.title}>SNEAKER COMPANY</p>
        <h1 className={style.nameProduct}>Fall Limited Edition Sneakers</h1>
        <p className={style.description}>
          These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>

        <div className={style.price}>
          <div className={style.descuentoPrice}>
            <p>$125.00</p>
            <p>50%</p>
          </div>
          <p className={style.realPrice}>$250.00</p>
        </div>

        <Counter />
      </section>
    </>
  )
}
