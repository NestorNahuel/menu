import React from 'react'
import PropTypes from 'prop-types'
import ItemList from '../common/ItemList'
import LanguageItem from './LanguageItem'

const LanguageSelector = ({ list, changeLanguage }) => (
  <ItemList
    component={LanguageItem}
    list={list}
    onClick={changeLanguage}
    centered={true}
  />
)

LanguageSelector.propTypes = {
  list: PropTypes.array,
  changeLanguage: PropTypes.func,
}

export default LanguageSelector
