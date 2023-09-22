import { useState } from 'react'
import { Nav } from './components/Nav'
import { Gallery } from './components/Gallery'
import { Description } from './components/Description'
import { ModalGallery } from './components/ModalGallery'
import style from './css/components/Main.module.css'
import { ModalMenu } from './components/ModalMenu.jsx';

export const App = () => {

  const [stateModal, setSetstateModal] = useState(false);
  const [stateModalMenu, setStateModalMenu] = useState(false);

  const activateModal = (prop) => {
    setSetstateModal(prop)
  }

  const activateModalMenu = (state) => {
    setStateModalMenu(state)
  }

  return (
    <>
      <section className={style.container}>
        <header className={style.header}>
          <Nav state={activateModalMenu}/>
          { stateModalMenu && <ModalMenu state={activateModalMenu}/>}
        </header>

        <main className={style.main}>
          <Gallery state={activateModal} />
          {stateModal && <ModalGallery state={activateModal}/>}
          <Description />
        </main>
      </section>
    </>
  )
}