import React, { useState } from 'react';
import imgs from './DataSlider';

export default function Slider() {
  const [indexx, setIndexx] = useState(0);

  const next = () => {
    setIndexx((indexx + 1) % imgs.length);
  }

  const prev = () => {
    setIndexx((indexx - 1 + imgs.length) % imgs.length);
  }

  return (
    <div className="slider-container">
      <h1>Les images de slide</h1>
      <input type="button" value="Prev" onClick={prev} className="slider-button prev" />
      <img src={imgs[indexx]} alt="Description de l'image" className="slider-image" />
      <input type="button" value="Next" onClick={next} className="slider-button next" />
    </div>
  )
}
