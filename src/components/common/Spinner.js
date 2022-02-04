import React from 'react'
import { Spinner as BootstrapSpinner } from 'react-bootstrap'

const Spinner = () => (
  <div className='d-flex justify-content-center'>
    <BootstrapSpinner animation='border' variant='success' />
  </div>
)

export default Spinner
