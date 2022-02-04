import React from 'react'
import PropTypes from 'prop-types'
import { Button, Figure } from 'react-bootstrap'

const Category = ({ item, onClick }) => (
  <div className='d-grid gap-2 m-3'>
    <Button
      className='p-1'
      size='lg'
      onClick={() => onClick(item)}
      variant='outline-success'
    >
      <div className='row'>
        <div className='col-8'>{item.name}</div>
        <div className='col-4'>
          <Figure.Image
            className='m-0'
            width={100}
            height={100}
            src={item.image}
          />
        </div>
      </div>
    </Button>
  </div>
)

Category.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
}

export default Category