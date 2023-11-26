import React from 'react'
import { ICard } from '../../App';

export const CardBody = (props: ICard) => {
  const {title, text } = props;
  return (  
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
  )
}
