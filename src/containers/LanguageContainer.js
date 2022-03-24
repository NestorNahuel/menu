import { useEffect, useState } from 'react'
import { firestore } from '../firebase/firebase'
import useQueryData from '../hooks/useQueryData'
import { COLL_TRANSLATIONS, DEFAULT_LANG } from '../utils/constants'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import Spinner from '../components/common/Spinner'
import { LanguageProvider } from '../contexts/languageContext'
import MenuContainer from './MenuContainer'
import spanish from '../locale/spanish.json'

const LanguageContainer = () => {
  const translationsQuery = useQueryData(COLL_TRANSLATIONS, firestore)
  const [loading, setLoading] = useState(true)
  const [languageList, setLanguageList] = useState([])

  // Format the response
  const formatTranslationResponse = (translations) => {
    // The languages should be formatted in this structure
    /*
      {
        en: {
          common: {
            hi: 'Hello'
          }
        }
      }
    */
    let data = { es: spanish }
    let headers = { es: spanish.common.languageName }
    translations.forEach((translation) => {
      const languageName = translation.languageName
      if (languageName) {
        // Build the formatted language list
        data[translation._id] = { common: translation }
        // Build the language headers for the language selector
        headers[translation._id] = languageName
      }
    })
    return { data, headers }
  }

  useEffect(() => {
    if (!translationsQuery.isLoading && translationsQuery.isSuccess) {
      const { data, headers } = formatTranslationResponse(
        translationsQuery.data
      )
      i18next.init({
        interpolation: { escapeValue: false },
        lng: DEFAULT_LANG,
        resources: data,
      })
      setLanguageList(headers)
      setLoading(false)
    }
  }, [translationsQuery.isLoading])

  if (loading) {
    return <Spinner centered={true} />
  }

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng)
  }

  return (
    <I18nextProvider i18n={i18next}>
      <LanguageProvider value={[languageList, changeLanguage]}>
        <MenuContainer />
      </LanguageProvider>
    </I18nextProvider>
  )
}

export default LanguageContainer
