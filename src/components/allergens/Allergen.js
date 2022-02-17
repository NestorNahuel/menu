import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import Tooltip from '../common/Tooltip'

const Allergen = ({ allergen }) => (
  <Tooltip label={allergen.name}>
    <Image src={allergen.image} width='45' height='45' fluid />
  </Tooltip>
)

Allergen.propTypes = {
  allergen: PropTypes.object,
}

export default Allergen
