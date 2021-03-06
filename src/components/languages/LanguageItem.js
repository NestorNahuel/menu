import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const LanguageItem = ({ item, onClick }) => (
  <div className='d-grid gap-2 m-2'>
    <Button
      className='p-1'
      size='lg'
      onClick={() => onClick(item.slug)}
      variant='outline-secondary'
    >
      {item.label}
    </Button>
  </div>
)

LanguageItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
}

export default LanguageItem
