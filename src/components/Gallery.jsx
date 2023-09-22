import style from '../css/components/Gallery.module.css'
import { Product } from '../context/Products';
import { useContext } from 'react';
import { PassImage } from './PassImage';

export const Gallery = ({ state }) => {

  const { setImageTarget, imageTarget } = useContext(Product);

  const onActivate = (event) => {
    setImageTarget(event.target.id)
  }

  const onModalProduct = () => {
    state(true);
  }

  return (
    <>
      <section className={style.gallery}>
        <section className={style.passImage}>
          <PassImage />
        </section>
        <img src={`./src/assets/images/image-product-${imageTarget}.jpg`} alt="" className={style.imageProduct} onClick={onModalProduct} />

        <dir className={style.galleryImages}>
          <img id={1} src='./src/assets/images/image-product-1-thumbnail.jpg' className={`${style.imageProductThumbnail} ${imageTarget == 1 && style.imageThumbnailActivate}`} onClick={onActivate} />
          <img id={2} src='./src/assets/images/image-product-2-thumbnail.jpg' className={`${style.imageProductThumbnail} ${imageTarget == 2 && style.imageThumbnailActivate}`} onClick={onActivate} />
          <img id={3} src='./src/assets/images/image-product-3-thumbnail.jpg' className={`${style.imageProductThumbnail} ${imageTarget == 3 && style.imageThumbnailActivate}`} onClick={onActivate} />
          <img id={4} src='./src/assets/images/image-product-4-thumbnail.jpg' className={`${style.imageProductThumbnail} ${imageTarget == 4 && style.imageThumbnailActivate}`} onClick={onActivate} />
        </dir>
      </section>
    </>
  )
}
