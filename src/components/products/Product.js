import React from 'react'
import PropTypes from 'prop-types'
import { Figure } from 'react-bootstrap'
import AllergenList from '../allergens/AllergenList'
import { getProductAllergens } from '../../utils/utils'
import { useMenu } from '../../contexts/menuContext'
import { withTranslation } from 'react-i18next'
const Product = ({ item, t }) => {
  const { allergens } = useMenu()

  const renderDescription = () => {
    if (item.description) {
      return (
        <Figure.Caption className='mb-2'>{t(item.description)}</Figure.Caption>
      )
    }
    return <AllergenList list={getProductAllergens(allergens, item)} />
  }

  const renderObservations = () => {
    if (item.description) {
      return <AllergenList list={getProductAllergens(allergens, item)} />
    }
  }

  return (
    <div className='row shadow rounded m-3 py-2'>
      <div className='col-7'>
        <p>{t(item.name)}</p>
        {renderDescription()}
      </div>
      <div className='col-5'>
        <Figure.Image
          className='mb-2'
          width={120}
          height={120}
          src={item.image}
        />
        {item.price && <p>{'€' + item.price}</p>}
      </div>
      {renderObservations()}
    </div>
  )
}

Product.propTypes = {
  item: PropTypes.object,
  allergens: PropTypes.array,
  t: PropTypes.func,
}

export default withTranslation('common')(Product)
