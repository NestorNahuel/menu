import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Category = ({ item, onClick }) => (
  <Button onClick={() => onClick(item._id)} variant='outline-success'>
    {item.name}
  </Button>
)

Category.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
}

export default Category
