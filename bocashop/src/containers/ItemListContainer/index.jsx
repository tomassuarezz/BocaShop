import React from 'react'
import romansticker from '../../assets/romansticker.webp'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="row text-center justify-content-center">
        <p>{greeting}</p>
        <img src={romansticker} alt="roman" style={{width:'250px'}} />
    </div>
  )
}

export default ItemListContainer