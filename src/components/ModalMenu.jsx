import style from '../css/components/ModalMenu.module.css'

export const ModalMenu = ({state}) => {

  const onCloseMenu = () => {
    state(false);
  }

  return (
    <>
      <section className={style.containerModal}>
        <section className={style.nav}>
          <img src='./src/assets/images/icon-close.svg' alt="" onClick={onCloseMenu}/>
          <section className={style.navContent}>
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </section>
        </section>
      </section>
    </>
  )
}
