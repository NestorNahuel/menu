import React from 'react'
import PropTypes from 'prop-types'

const PriceList = ({ list }) => {
  const renderPrice = (price) => (
    <tr>
      <td
        style={{
          width: '65%',
        }}
      >
        <p
          className='mb-1'
          style={{
            border: 'none',
            borderBottom: '0.8px dashed',
            minHeight: '1.3em',
            maxHeight: '1em',
          }}
        >
          {price.description}
        </p>
      </td>
      <td>
        <p
          className='mb-0'
          style={{
            fontSize: '1.3em',
            fontWeight: '500',
          }}
        >
          {`${price.price}€`}
        </p>
      </td>
    </tr>
  )

  return list.map(renderPrice)
}

PriceList.propTypes = {
  list: PropTypes.array,
  changeLanguage: PropTypes.func,
}

export default PriceList
