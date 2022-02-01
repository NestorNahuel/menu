import React from 'react'
import PropTypes from 'prop-types'
import { Figure } from 'react-bootstrap'
const Product = ({ item }) => (
  <div className='row shadow rounded m-3 py-2'>
    <div className='col-7'>
      <p>{item.name}</p>
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </div>
    <div className='col-5'>
      <Figure.Image
        className='mb-2'
        width={120}
        height={120}
        src={item.image}
      />
      <p>$100</p>
    </div>
  </div>
)

Product.propTypes = {
  item: PropTypes.object,
}

export default Product
