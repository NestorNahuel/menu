import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ItemList from '../common/ItemList'
import LanguageItem from './LanguageItem'
import MenuContainer from '../../containers/MenuContainer'

const LanguageSelector = ({ list, changeLanguage }) => {
  const [isSelected, setIsSelected] = useState(false)

  const selectLanguage = (lang) => {
    changeLanguage(lang)
    setIsSelected(true)
  }

  useEffect(() => {
    // If there are no languages just continue
    if (!list?.length) {
      setIsSelected(true)
    }

    // If there are only one language select it
    if (list && list.length === 1) {
      selectLanguage(list[0].slug)
    }
  }, [list])

  // If there is not a selected language show the list
  if (!isSelected) {
    return (
      <ItemList
        component={LanguageItem}
        list={list}
        onClick={selectLanguage}
        centered={true}
      />
    )
  }

  // Go to the menu view if there is a selected lang
  return <MenuContainer />
}

LanguageSelector.propTypes = {
  list: PropTypes.array,
  changeLanguage: PropTypes.func,
}

export default LanguageSelector
