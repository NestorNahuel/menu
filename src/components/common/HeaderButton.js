import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const HeaderButton = ({ icon, ...props }) => (
  <div>
    <Button variant='link' {...props}>
      <h2 className={'text-white bi ' + icon}></h2>
    </Button>
  </div>
)

HeaderButton.propTypes = {
  icon: PropTypes.string,
}

export default HeaderButton
