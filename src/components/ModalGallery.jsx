import style from '../css/components/modalGallery.module.css'
import { Gallery } from './Gallery'
import {PassImage} from './PassImage.jsx'

export const ModalGallery = ({ state }) => {

  const prueba = () => { }

  const onCloseModal = () => {
    state(false)
  }

  return (
    <div className={style.containerModal}>
      <section className={style.closeModal}>
        <img src='./src/assets/images/icon-close.svg' alt="" className={style.imageClose} onClick={onCloseModal} />
      </section>

      <section className={style.passImage}>
        <PassImage />
      </section>

      <Gallery state={prueba} />
    </div>
  )
}
