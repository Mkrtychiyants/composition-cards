import React from 'react'
import { ICard } from '../../App';

export const CardImg = (props: ICard) => {
  const { src } = props;
  return (
      <img src={src} className="card-img-top" alt="..." />
  )
}
