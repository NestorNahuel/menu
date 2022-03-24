import React from 'react'
import PropTypes from 'prop-types'
import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap'

const Tooltip = ({ label, children }) => {
  const overlay = <BootstrapTooltip id={label}>{label}</BootstrapTooltip>

  return (
    <OverlayTrigger placement='top' overlay={overlay}>
      {children}
    </OverlayTrigger>
  )
}

Tooltip.propTypes = {
  label: PropTypes.string,
  children: PropTypes.object,
}

export default Tooltip
