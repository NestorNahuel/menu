import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-bootstrap'
import { useLanguage } from '../../contexts/languageContext'
import { withTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

const LanguageModal = ({ showed, hide, t }) => {
  const [languageList, changeLanguage] = useLanguage()
  const onChangeLanguage = (lang) => {
    changeLanguage(lang)
    hide()
  }

  const languages = Object.keys(languageList).map((key) => ({
    slug: key,
    label: languageList[key],
  }))

  const show = showed && languages?.length > 1

  return (
    <Modal
      show={show}
      onHide={hide}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {t('selectLang')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LanguageSelector list={languages} changeLanguage={onChangeLanguage} />
      </Modal.Body>
    </Modal>
  )
}

LanguageModal.propTypes = {
  showed: PropTypes.bool,
  hide: PropTypes.func,
  t: PropTypes.func,
}

export default withTranslation('common')(LanguageModal)
