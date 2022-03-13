import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

const CategoryHeader = ({ category, t }) => (
  <div
    className='px-1 m-2'
    style={{
      backgroundColor: '#C7C6C6',
    }}
  >
    <table className='w-100'>
      <tbody>
        <tr>
          <th>{t(category.name)} </th>
          <td
            align='right'
            style={{
              fontWeight: '600',
              fontSize: '1.1em',
            }}
            rowSpan='2'
          >{`${t(category.price)}€`}</td>
        </tr>
        <tr>
          <td
            style={{
              fontSize: '0.8em',
            }}
          >
            {t(category.description)}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

CategoryHeader.propTypes = {
  category: PropTypes.object,
  t: PropTypes.func,
}

export default withTranslation('common')(CategoryHeader)
