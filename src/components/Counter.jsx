import { Product } from '../context/Products';
import style from '../css/components/Counter.module.css'
import { useContext, useState } from 'react';

export const Counter = () => {
  const [stateCounter, setStateCounter] = useState(0);

  const {setProducts}= useContext(Product);

  const minusCounter = () => {
    stateCounter <= 0 ? setStateCounter(0) : setStateCounter(stateCounter - 1);
  }

  const plusCounter = () => {
    setStateCounter(stateCounter + 1);
  }

  const onHandleClick = () => {
    setProducts(stateCounter)
  }

  return (
    <>
      <section className={style.counterButton}>
        <div className={style.counter}>
          <div className={style.minus} onClick={minusCounter}>
            <img src='./src/assets/images/icon-minus.svg' alt="" />
          </div>
          <p className={style.number}>{stateCounter}</p>
          <div className={style.plus} onClick={plusCounter}>
            <img src='./src/assets/images/icon-plus.svg' alt="" />
          </div>
        </div>

        <button
          className={style.button}
          onClick={onHandleClick}>
          <div className={style.containerButton}>
            <img src='./src/assets/images/icon-cart-button.svg' alt="" />
            <p>Add to cart</p>
          </div>
        </button>
      </section>
    </>
  )
}
