import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import HeaderButton from '../common/HeaderButton'
import CategoryList from './CategoryList'
import { useMenu } from '../../contexts/menuContext'

const Header = ({
  label = 'headerLabel',
  category,
  setCategory,
  showLanguageSelector,
  t,
}) => {
  const menuData = useMenu()

  return (
    <>
      <div className='bg-success'>
        <div className='mw-100 position-sticky fixed-top row pt-2 px-0 text-white'>
          <HeaderButton
            onClick={() => setCategory(null)}
            hidden={!category}
            icon='bi-arrow-left-circle'
          />
          <div className='col mt-2 px-0'>
            <h2>{t(label)}</h2>
          </div>
          <HeaderButton
            onClick={showLanguageSelector}
            hidden={!showLanguageSelector}
            icon='bi-globe2'
          />
        </div>
      </div>
      <CategoryList
        list={menuData.categories}
        selected={category?._id}
        setCategory={setCategory}
      />
    </>
  )
}

Header.propTypes = {
  label: PropTypes.string,
  category: PropTypes.object,
  setCategory: PropTypes.func,
  showLanguageSelector: PropTypes.func,
  t: PropTypes.func,
}

export default withTranslation('common')(Header)
