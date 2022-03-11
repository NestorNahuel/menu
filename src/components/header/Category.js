import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Category = ({ selected, categoryName, onClick }) => (
  <Button
    variant={selected && 'dark'}
    size='sm'
    className='m-1 p-1 text-nowrap'
    onClick={onClick}
  >
    {categoryName}
  </Button>
)

Category.propTypes = {
  selected: PropTypes.bool,
  categoryName: PropTypes.string,
  onClick: PropTypes.func,
}

export default Category
