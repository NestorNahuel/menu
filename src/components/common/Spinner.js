import React from 'react'
import PropTypes from 'prop-types'
import { Spinner as BootstrapSpinner } from 'react-bootstrap'

const Spinner = ({ centered }) => {
  console.log('cenenenenene', centered)
  return (
    <div
      className={
        'vh-100 d-flex justify-content-center' +
        (centered ? ' align-items-center' : '')
      }
    >
      <BootstrapSpinner animation='border' variant='success' />
    </div>
  )
}

Spinner.propTypes = {
  centered: PropTypes.bool,
}

export default Spinner
