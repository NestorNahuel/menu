import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import HeaderButton from '../common/HeaderButton'

const Header = ({ label = 'Menu', onReturn, t }) => {
  return (
    <div className='mw-100 fixed-top position-sticky row pt-3 px-2 mb-3 bg-success text-white'>
      <HeaderButton
        onClick={onReturn}
        hidden={!onReturn}
        icon='bi-arrow-left-circle'
      />
      <div className='mb-2 col mt-1'>
        <h1>{t(label)}</h1>
      </div>
      <HeaderButton onClick={onReturn} icon='bi-globe2' />
    </div>
  )
}

Header.propTypes = {
  label: PropTypes.string,
  onReturn: PropTypes.func,
  t: PropTypes.func,
}

export default withTranslation('common')(Header)
