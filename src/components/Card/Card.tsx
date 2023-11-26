import React from 'react'
import { CardImg } from '../CardImg';
import { CardBody } from '../CardBody';
import { ICard } from '../../App';

export const Card = (props: ICard) => {
  const { src } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      {src ?
        <> <CardImg {...props} src = {src}/> <CardBody {...props} /></>
        :  <CardBody {...props} />
      }
    </div>
  )
}
