import React from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import Message from './Message'
import FadeIn from 'react-fade-in'

const ItemList = ({
  component: Component,
  list,
  loading,
  error,
  centered,
  t,
  ...props
}) => {
  // Show loading spinner
  if (loading) {
    return <Spinner centered={centered} />
  }

  // Show no data message when the list is empty
  if (!list?.length && !error) {
    return <Message message={t('There are not items to show')} />
  }

  // Render the list if Items
  if (!!list?.length && !error) {
    const render = () =>
      list.map((item, index) => (
        <Component key={index} item={item} {...props} />
      ))

    if (centered) {
      return (
        <div className='vh-100 d-flex align-items-center'>
          <div className='w-100'>
            <FadeIn>{render()}</FadeIn>
          </div>
        </div>
      )
    }

    return <FadeIn>{render()}</FadeIn>
  }

  // Show error message
  return <Message message={t('There was an error')} />
}

ItemList.propTypes = {
  component: PropTypes.any,
  list: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  centered: PropTypes.bool,
  t: PropTypes.func,
}

export default ItemList
