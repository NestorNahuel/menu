import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import Tooltip from '../common/Tooltip'
import { withTranslation } from 'react-i18next'

const Allergen = ({ allergen, t }) => (
  <Tooltip label={t(allergen.name)}>
    <Image src={allergen.image} width='45' height='45' fluid />
  </Tooltip>
)

Allergen.propTypes = {
  allergen: PropTypes.object,
  t: PropTypes.func,
}

export default withTranslation('common')(Allergen)
