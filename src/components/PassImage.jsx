import style from '../css/components/PassImage.module.css'
import { Product } from '../context/Products';
import { useContext } from 'react';

export const PassImage = () => {
  const { setImageTarget, imageTarget } = useContext(Product);

  const onHandPrevious = () => {
    imageTarget >= 2 ? setImageTarget(imageTarget - 1) : setImageTarget(4);
  }

  const onHandNext = () => {
    imageTarget <= 3 ? setImageTarget(imageTarget + 1) : setImageTarget(1);
  }
  return (
    <>
      <div className={style.contentImage} onClick={onHandPrevious}><img src='icon-previous.svg' alt="" /></div>
      <div className={style.contentImage} onClick={onHandNext}><img src='icon-next.svg' alt="" /></div>
    </>
  )
}
