import React from 'react'
import PropTypes from 'prop-types'

const LanguageContext = React.createContext(null)

const useLanguage = () => React.useContext(LanguageContext)

const LanguageProvider = ({ value, children }) => {
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  value: PropTypes.any,
  children: PropTypes.any,
}

export { LanguageContext, useLanguage, LanguageProvider }
