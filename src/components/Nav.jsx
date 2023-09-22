import style from '../css/components/Nav.module.css'
import { Product } from '../context/Products';
import { useContext } from 'react';
import { SoldProduct } from '../components/SoldProduct.jsx';
import { useState } from 'react';

export const Nav = ({state}) => {

  const { products } = useContext(Product);
  const [stateCart, setSetstateCart] = useState(false);

  const onActivateCart = () => {
    stateCart != true ? setSetstateCart(true) : setSetstateCart(false);
  }

  const onMenuActivate = () => {
    state(true)
  }
  
  return (
    <>
      <section className={style.navOption}>
        <section className={style.option}>
          <img src='./src/assets/images/icon-menu.svg' alt="" className={style.menuOptions} onClick={onMenuActivate}/>
          <img src='./src/assets/images/logo.svg' alt="Icono de la marca Sneakers" className={style.logo} />
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </section>

        {stateCart == true && <SoldProduct />}

        <section className={style.user}>
          <a href="#">{products != 0 && <span className={style.totalProducts}>{products}</span>}<img src='./src/assets/images/icon-cart.svg' alt="Imagen del carrito de compra" onClick={onActivateCart} /></a>
          <a href="#"><img src='./src/assets/images/image-avatar.png' alt="Imagen de usuario" className={style.avatar} /></a>
        </section>
      </section>
    </>
  )
}
