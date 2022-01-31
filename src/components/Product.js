import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ item }) => (
  <div>
    <p>{item.name}</p>
  </div>
)

Product.propTypes = {
  item: PropTypes.object,
}

export default Product
