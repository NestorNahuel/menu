import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Header = ({ label = 'Menu', onReturn }) => {
  const renderBackButton = () => {
    if (onReturn) {
      return (
        <div className='col-3'>
          <Button variant='link' onClick={onReturn}>
            <h1 className='text-white bi bi-arrow-left-circle'></h1>
          </Button>
        </div>
      )
    }
  }

  return (
    <div className='row pt-3 px-3 mb-3 bg-success text-white'>
      <div className='mb-2 col mt-1'>
        <h1>{label}</h1>
      </div>
      {renderBackButton()}
    </div>
  )
}

Header.propTypes = {
  label: PropTypes.string,
  onReturn: PropTypes.func,
}

export default Header
