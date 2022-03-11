import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

const Category = ({ item, onClick, t }) => (
  <div onClick={() => onClick(item)} className='card m-3'>
    <img
      className='card-img rounded'
      style={{ height: '10em' }}
      src={item.image}
    />
    <div
      style={{ backgroundColor: 'rgba(61, 61, 61, 0.5)' }}
      className='card-img-overlay text-white d-flex align-items-end'
    >
      <h1>{t(item.name)}</h1>
    </div>
  </div>
)

Category.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  t: PropTypes.func,
}

export default withTranslation('common')(Category)
