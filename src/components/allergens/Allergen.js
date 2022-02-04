import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'

const Allergen = ({ allergen }) => (
  <Image src={allergen.image} width='45' height='45' fluid />
)

Allergen.propTypes = {
  allergen: PropTypes.object,
}

export default Allergen
