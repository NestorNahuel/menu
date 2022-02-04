import React from 'react'
import PropTypes from 'prop-types'

const MenuContext = React.createContext(null)

const useMenu = () => React.useContext(MenuContext)

const MenuProvider = ({ value, children }) => {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

MenuProvider.propTypes = {
  value: PropTypes.object,
  children: PropTypes.any,
}

export { MenuContext, useMenu, MenuProvider }
