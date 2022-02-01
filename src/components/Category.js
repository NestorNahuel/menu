import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Category = ({ item, onClick }) => (
  <div className='d-grid gap-2'>
    <Button size='lg' onClick={() => onClick(item)} variant='outline-success'>
      {item.name}
    </Button>
  </div>
)

Category.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
}

export default Category
