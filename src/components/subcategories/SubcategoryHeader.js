import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

const SubcategoryHeader = ({ subcategory, t }) => (
  <div
    className='px-1 m-2 w-75'
    style={{
      backgroundColor: '#E8E7E7',
    }}
  >
    <table className='w-75'>
      <tbody>
        <tr>
          <th>{t(subcategory.name)} </th>
        </tr>
        <tr>
          <td
            style={{
              fontSize: '0.8em',
            }}
          >
            {t(subcategory.description)}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

SubcategoryHeader.propTypes = {
  subcategory: PropTypes.object,
  t: PropTypes.func,
}

export default withTranslation('common')(SubcategoryHeader)
