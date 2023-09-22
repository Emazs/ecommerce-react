import style from '../css/components/SoldProduct.module.css'
import { Product } from '../context/Products';
import { useContext } from 'react';

export const SoldProduct = () => {

  const { products, setProducts } = useContext(Product);

  const onHandClick = () => {
    setProducts(0)
  }

  return (
    <>
      <section className={style.products}>
        <div className={style.cart}>
          <p>Cart</p>
        </div>

        <div className={style.content}>
          {products == 0 ? <p>Your cart is empty.</p> : <section className={style.contentCard}>
            <div className={style.card}>
              <img src='./src/assets/images/image-product-1-thumbnail.jpg' alt="" className={style.cardThumbnail}/>
              <div className={style.cardInformation}>
                <p>Fall Limited Edition Sneakers</p>
                <div className={style.cardPrice}>
                  <p>$125.00 x {products}</p>
                  <span>${125 * products}.00</span>
                </div>
              </div>
              <img src='./src/assets/images/icon-delete.svg' alt="imagen de eliminar item" onClick={onHandClick} className={style.imageDelete}/>
            </div>
            <button className={style.button}>Checkout</button>
          </section>}
        </div>
      </section>
    </>
  )
}
