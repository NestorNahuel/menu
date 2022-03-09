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
          style={{
            border: 'none',
            borderBottom: '0.8px dashed',
            fontSize: '1em',
            minHeight: '1.3em',
            maxHeight: '1em',
          }}
        >
          {price.description}
        </p>
      </td>
      <td>
        <p
          style={{
            fontSize: '1.5em',
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
