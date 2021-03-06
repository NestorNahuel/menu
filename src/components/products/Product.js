import React from 'react'
import PropTypes from 'prop-types'
import { Figure, Image } from 'react-bootstrap'
import AllergenList from '../allergens/AllergenList'
import { getProductAllergens } from '../../utils/utils'
import { useMenu } from '../../contexts/menuContext'
import { withTranslation } from 'react-i18next'
import PriceList from './PriceList'
const Product = ({ item, t }) => {
  const { allergens } = useMenu()

  const renderDescription = () => {
    if (item.description) {
      return (
        <Figure.Caption
          style={{
            fontSize: '0.8em',
          }}
          className='mb-2'
        >
          {t(item.description)}
        </Figure.Caption>
      )
    }
  }

  const renderAllergens = () => {
    if (item.allergens) {
      return <AllergenList list={getProductAllergens(allergens, item)} />
    }
  }

  const renderPrices = () => {
    if (item.prices) {
      return <PriceList list={item.prices} />
    }
  }

  return (
    <div className='row shadow-sm rounded p-2 m-1'>
      <table>
        <tbody>
          <tr>
            <td
              style={{
                fontWeight: '500',
                width: '65%',
              }}
            >
              {t(item.name)}
            </td>
            <td rowSpan='3'>
              <Image
                style={{
                  objectFit: 'cover',
                }}
                className='img-responsive overflow-hidden mw-100'
                height='125'
                src={item.image}
              />
            </td>
          </tr>
          <tr>
            <td>{renderDescription()}</td>
          </tr>
          <tr>
            <td>{renderAllergens()}</td>
          </tr>
          {renderPrices()}
        </tbody>
      </table>
    </div>
  )
}

Product.propTypes = {
  item: PropTypes.object,
  allergens: PropTypes.array,
  t: PropTypes.func,
}

export default withTranslation('common')(Product)
