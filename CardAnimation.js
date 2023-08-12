import React, { useState } from 'react';
import styles from './CardAnimation.module.css';
import image from './image/memoji.png';
import mac from './image/Mac.png';

const CardAnimation = () => {
  const [transformStyle, setTransformStyle] = useState('');

  const onMouseEnterHandler = (event) => {
    update(event);
  };

  const onMouseLeaveHandler = () => {
    setTransformStyle('');
  };

  const onMouseMoveHandler = (event) => {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  const mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      const e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function () {
      this._x = window.innerWidth / 2;
      this._y = window.innerHeight / 2;
    },
  };

  mouse.setOrigin();

  let counter = 0;
  const updateRate = 5; // Adjust the update rate for faster movement

  const isTimeToUpdate = () => {
    return counter++ % updateRate === 0;
  };

  const update = (event) => {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / (window.innerHeight / 2)).toFixed(2), // Adjust the scaling factor for greater movement
      (mouse.x / (window.innerWidth / 2)).toFixed(2) // Adjust the scaling factor for greater movement
    );
  };

  const updateTransformStyle = (x, y) => {
    const style = `rotateX(${x * 2}deg) rotateY(${y * 5}deg)`; // Adjust the scaling factor for greater rotation
    setTransformStyle(style);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onMouseMove={onMouseMoveHandler}
    >

        <div className={styles.design1}></div>
        <div className={styles.design2}></div>
        
      <div
        className={styles.inner}
        style={{
          transform: transformStyle,
          WebkitTransform: transformStyle,
          MozTransform: transformStyle,
          MsTransform: transformStyle,
          OTransform: transformStyle,
        }}
        
      >
        <img src={image} style={{maxWidth: '100%', maxHeight: '100%'}} />
      </div>

      <div className={styles.mac}>
        <img src={mac} />
      </div>
    </div>
  );
};

export default CardAnimation;
