import React from 'react'
import PropTypes from 'prop-types'
import { Spinner as BootstrapSpinner } from 'react-bootstrap'

const Spinner = ({ centered }) => {
  return (
    <div
      className={`m-2 vh-100 d-flex justify-content-center${
        centered ? ' align-items-center' : ''
      }`}
    >
      <BootstrapSpinner animation='border' variant='secondary' />
    </div>
  )
}

Spinner.propTypes = {
  centered: PropTypes.bool,
}

export default Spinner
